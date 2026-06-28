// Same-origin contact + lead-capture endpoint. The browser POSTs here instead
// of calling a third-party form API directly. Because this is same-origin there
// is no CORS preflight and no third-party Cloudflare bot-challenge in the
// browser path (the reason the old Web3Forms browser call kept 403ing). The
// email itself is sent server-side over SMTP via nodemailer.
//
// Runs on Vercel's Node.js runtime (required: SMTP needs raw sockets, which the
// Edge runtime can't do). Configured entirely through env vars (see .env.example):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
import nodemailer from 'nodemailer';

// Add a lead to the Resend Audience (marketing/newsletter list). Best-effort:
// any failure is logged and swallowed so it never breaks the contact form.
// Reuses the Resend API key already configured for SMTP (SMTP_PASS) unless a
// dedicated RESEND_API_KEY is set. The new single-audience Contacts API needs
// no audience id. Skips unless the key is a Resend key (re_*), so a legacy
// Gmail app-password setup never hits Resend.
async function addToResendAudience({ email, name }) {
  const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;
  if (!apiKey || !apiKey.startsWith('re_') || !email) return;

  // Split a real name into first/last; skip if it's just the email address.
  let first_name = '';
  let last_name = '';
  if (name && name !== email && !name.includes('@')) {
    const parts = name.trim().split(/\s+/);
    first_name = parts.shift() || '';
    last_name = parts.join(' ');
  }

  try {
    const resp = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, first_name, last_name, unsubscribed: false }),
    });
    if (!resp.ok) {
      console.warn('resend contact add non-ok:', resp.status, await resp.text().catch(() => ''));
    }
  } catch (err) {
    console.warn('resend contact add failed:', err);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = req.body || {};
  const {
    name = '',
    email = '',
    company = '',
    engagement_type = '',
    message = '',
    subject = '',
    ref_id = '',
    resource = '',
    botcheck = '',
  } = body;

  // Honeypot: silently accept (don't tip off bots) but send nothing.
  if (botcheck) return res.status(200).json({ success: true });

  // A contact inquiry has a message; a lead-magnet request has a resource.
  if (!email || (!message && !resource)) {
    return res.status(400).json({ success: false, message: 'Please fill in the required fields.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ success: false, message: 'Mail server is not configured.' });
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const lines = [
    subject && `Subject: ${subject}`,
    ref_id && `Reference: ${ref_id}`,
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    company && `Company / role: ${company}`,
    engagement_type && `Engagement type: ${engagement_type}`,
    resource && `Resource requested: ${resource}`,
    message && `\nMessage:\n${message}`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      // With Resend SMTP, SMTP_USER is the literal "resend", so the From must be a
      // verified-domain address set via MAIL_FROM (e.g. "Aditya Bayu <hi@adityabayu.com>").
      // Falls back to the SMTP user for the legacy Gmail setup.
      from: MAIL_FROM || `"adityabayu.com" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email || undefined,
      subject: subject || `New inquiry from ${name || email}`,
      text: lines.join('\n'),
    });
    // Best-effort: capture the lead into the Resend Audience for marketing.
    // Never blocks or fails the submission if it errors.
    await addToResendAudience({ email, name: name || from_name });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('contact mail send failed:', err);
    return res.status(502).json({ success: false, message: 'Could not send right now. Please email directly.' });
  }
}
