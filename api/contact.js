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
async function addToResendAudience({ email, name, properties = {}, segmentIds = [] }) {
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
    const contact = { email, first_name, last_name, unsubscribed: false };
    if (Object.keys(properties).length) contact.properties = properties;
    const validSegmentIds = segmentIds.filter(Boolean);
    if (validSegmentIds.length) contact.segments = validSegmentIds.map((id) => ({ id }));

    const resp = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    if (!resp.ok) {
      console.warn('resend contact add non-ok:', resp.status, await resp.text().catch(() => ''));
    }
  } catch (err) {
    console.warn('resend contact add failed:', err);
  }
}

// Trigger the configured Resend Automation for lead-magnet opt-ins.
// Resend handles the delays and email sequence after this event is accepted.
async function triggerResendAutomation({ email, resource, ref_id, payload = {}, eventName = '' }) {
  const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;
  if (!apiKey || !apiKey.startsWith('re_') || !email || !resource) return;

  try {
    const resp = await fetch('https://api.resend.com/events/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'abayuworks-lead-magnet/1.0',
      },
      body: JSON.stringify({
        event: eventName || process.env.RESEND_AUTOMATION_EVENT || 'lead_magnet.subscribed',
        email,
        payload: { resource, ref_id, ...payload },
      }),
    });
    if (!resp.ok) {
      console.warn('resend automation trigger non-ok:', resp.status, await resp.text().catch(() => ''));
    }
  } catch (err) {
    console.warn('resend automation trigger failed:', err);
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
    dal_website = '',
    dal_offer = '',
    dal_challenge = '',
    dal_tried = '',
    dal_goal = '',
    from_name = '',
    consent = false,
    botcheck = '',
  } = body;

  // Honeypot: silently accept (don't tip off bots) but send nothing.
  if (botcheck) return res.status(200).json({ success: true });

  // A contact inquiry has a message; a lead-magnet request has a resource.
  if (!email || (!message && !resource)) {
    return res.status(400).json({ success: false, message: 'Please fill in the required fields.' });
  }
  if (resource && consent !== true) {
    return res.status(400).json({ success: false, message: 'Please confirm email follow-ups.' });
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
    dal_website && `Website / social: ${dal_website}`,
    dal_offer && `Offer: ${dal_offer}`,
    dal_challenge && `Primary challenge: ${dal_challenge}`,
    dal_tried && `What has been tried: ${dal_tried}`,
    dal_goal && `90-day goal: ${dal_goal}`,
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
    const isDalApplication = resource === 'Digital Advantage Lab application';
    const isNewsletterSignup = resource === 'The CMO Notes newsletter';
    const dalPayload = isDalApplication
      ? { company, website: dal_website, offer: dal_offer, challenge: dal_challenge, tried: dal_tried, goal: dal_goal }
      : {};
    await addToResendAudience({
      email,
      name: name || from_name,
      properties: isDalApplication
        ? { lead_source: 'digital_advantage_lab', company, website: dal_website, challenge: dal_challenge, goal: dal_goal }
        : {},
      segmentIds: [
        isDalApplication ? process.env.RESEND_DAL_SEGMENT_ID : '',
        resource && consent === true ? process.env.RESEND_NEWSLETTER_SEGMENT_ID : '',
      ],
    });
    if (!isNewsletterSignup) {
      await triggerResendAutomation({
        email,
        resource,
        ref_id,
        payload: dalPayload,
        eventName: isDalApplication ? process.env.RESEND_DAL_AUTOMATION_EVENT : '',
      });
    }
    if (resource && consent === true) {
      await triggerResendAutomation({
        email,
        resource: 'The CMO Notes newsletter',
        ref_id,
        payload: { source: resource },
        eventName: process.env.RESEND_NEWSLETTER_AUTOMATION_EVENT || 'newsletter.subscribed',
      });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('contact mail send failed:', err);
    return res.status(502).json({ success: false, message: 'Could not send right now. Please email directly.' });
  }
}
