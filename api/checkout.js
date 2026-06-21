// Creates a Xendit invoice for the paid course and records a pending enrollment.
// Same-origin POST from the browser (no CORS), Node runtime on Vercel.
//
// Flow: browser POSTs { email, name? } -> we create a Xendit Invoice with a
// unique external_id, insert a `pending` enrollment (service role), and return
// the hosted invoice_url for the browser to redirect to. The webhook
// (api/xendit-webhook.js) flips the row to `paid` once Xendit confirms payment.
//
// Env: XENDIT_SECRET_KEY, COURSE_PRICE_IDR, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import { createClient } from '@supabase/supabase-js';

const COURSE_SLUG = 'operator-playbook';
const COURSE_TITLE = 'The Operator Playbook';

// crypto-backed unique id: OP-<base36 time>-<random>
function externalId() {
  const rand = Math.abs((globalThis.crypto?.getRandomValues(new Uint32Array(1))[0]) ?? 0).toString(36);
  return `op-${Date.now().toString(36)}-${rand}`;
}

const emailOk = (e) => typeof e === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email = '', name = '' } = req.body || {};
  if (!emailOk(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email.' });
  }

  const { XENDIT_SECRET_KEY, COURSE_PRICE_IDR, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!XENDIT_SECRET_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ success: false, message: 'Checkout is not configured.' });
  }

  const amount = Number(COURSE_PRICE_IDR) || 0;
  if (amount <= 0) {
    return res.status(500).json({ success: false, message: 'Course price is not set.' });
  }

  const external_id = externalId();
  const origin =
    (req.headers['x-forwarded-proto'] && req.headers.host
      ? `${req.headers['x-forwarded-proto']}://${req.headers.host}`
      : 'https://learn.adityabayu.com');

  // 1) Create the Xendit invoice. Basic auth = secret key as username, no password.
  let invoice;
  try {
    const resp = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${XENDIT_SECRET_KEY}:`).toString('base64'),
      },
      body: JSON.stringify({
        external_id,
        amount,
        currency: 'IDR',
        payer_email: email,
        description: `${COURSE_TITLE} — lifetime access`,
        success_redirect_url: `${origin}/learn/?purchase=success`,
        failure_redirect_url: `${origin}/learn/?purchase=failed`,
        customer: { email, given_names: name || email.split('@')[0] },
        invoice_duration: 86400, // 24h to pay
      }),
    });
    invoice = await resp.json();
    if (!resp.ok || !invoice?.invoice_url) {
      console.error('xendit invoice error:', invoice);
      return res.status(502).json({ success: false, message: 'Could not start checkout. Please try again.' });
    }
  } catch (err) {
    console.error('xendit request failed:', err);
    return res.status(502).json({ success: false, message: 'Could not reach the payment provider.' });
  }

  // 2) Record a pending enrollment (service role bypasses RLS).
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });
    const { error } = await supabase.from('enrollments').insert({
      email,
      course_slug: COURSE_SLUG,
      xendit_external_id: external_id,
      xendit_invoice_id: invoice.id || null,
      amount,
      status: 'pending',
    });
    if (error) console.error('enrollment insert failed:', error); // non-fatal: webhook can still match by external_id
  } catch (err) {
    console.error('supabase insert failed:', err);
  }

  return res.status(200).json({ success: true, invoice_url: invoice.invoice_url });
}
