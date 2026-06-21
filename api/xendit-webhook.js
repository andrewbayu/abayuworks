// Xendit invoice callback. Marks an enrollment `paid` once payment is confirmed.
// Set the webhook URL in Xendit to https://learn.adityabayu.com/api/xendit-webhook
// and the verification token to match XENDIT_CALLBACK_TOKEN.
//
// Xendit sends the token in the `x-callback-token` header. We reject anything
// that doesn't match — this is what stops a stranger from forging "paid" events.
//
// Env: XENDIT_CALLBACK_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
//      (optional receipt) SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const COURSE_SLUG = 'operator-playbook';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false });
  }

  const { XENDIT_CALLBACK_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;

  // 1) Verify the callback token (constant work; reject mismatches).
  const token = req.headers['x-callback-token'];
  if (!XENDIT_CALLBACK_TOKEN || token !== XENDIT_CALLBACK_TOKEN) {
    return res.status(401).json({ success: false, message: 'Invalid callback token' });
  }

  const ev = req.body || {};
  // Only act on confirmed payments. Acknowledge everything else with 200 so
  // Xendit doesn't retry indefinitely.
  if (ev.status !== 'PAID' && ev.status !== 'SETTLED') {
    return res.status(200).json({ success: true, ignored: ev.status || 'unknown' });
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('webhook: supabase not configured');
    return res.status(500).json({ success: false });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const external_id = ev.external_id;
  const email = ev.payer_email || ev.customer?.email || '';
  const paidAt = ev.paid_at || new Date().toISOString();

  // 2) Flip the pending row to paid; if we can't find it, insert a paid row so a
  //    real payment is never lost (idempotent on xendit_external_id).
  try {
    const { data: updated, error: updErr } = await supabase
      .from('enrollments')
      .update({ status: 'paid', paid_at: paidAt, xendit_invoice_id: ev.id || null, email: email || undefined })
      .eq('xendit_external_id', external_id)
      .select();

    if (updErr) throw updErr;

    if (!updated || updated.length === 0) {
      await supabase.from('enrollments').upsert(
        {
          email,
          course_slug: COURSE_SLUG,
          xendit_external_id: external_id || ev.id,
          xendit_invoice_id: ev.id || null,
          amount: ev.paid_amount || ev.amount || null,
          status: 'paid',
          paid_at: paidAt,
        },
        { onConflict: 'xendit_external_id' }
      );
    }
  } catch (err) {
    console.error('webhook: enrollment update failed:', err);
    return res.status(500).json({ success: false });
  }

  // 3) Best-effort receipt / access email (never block the 200 on this).
  await sendReceipt(email).catch((e) => console.error('receipt email failed:', e));

  return res.status(200).json({ success: true });
}

async function sendReceipt(email) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!email || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) return;
  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"Aditya Bayu — Learn" <${SMTP_USER}>`,
    to: email,
    subject: 'Your access to The Operator Playbook',
    text: [
      'Thanks for enrolling in The Operator Playbook.',
      '',
      'To open your lessons, go to https://learn.adityabayu.com/ and click "Sudah beli? Masuk",',
      `then sign in with this email (${email}). You'll get a one-time login link.`,
      '',
      'Lifetime access — see you inside.',
      '— Aditya',
    ].join('\n'),
  });
}
