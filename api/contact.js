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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
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
      from: `"adityabayu.com" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email || undefined,
      subject: subject || `New inquiry from ${name || email}`,
      text: lines.join('\n'),
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('contact mail send failed:', err);
    return res.status(502).json({ success: false, message: 'Could not send right now. Please email directly.' });
  }
}
