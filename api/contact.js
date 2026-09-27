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

// Catalog of downloadable lead magnets and their direct links
const DOWNLOAD_RESOURCES = {
  'Playbook Marketing F&B 2026': {
    title: 'Playbook Marketing F&B 2026: Meja Penuh, Kas Kosong',
    subject: '[Akses Unduhan] Playbook Marketing F&B 2026 — Aditya Bayu',
    directDownloadUrl: 'https://drive.google.com/uc?export=download&id=1MZ-kkNyoLVQmFjiP_rwSNVH3SKUoHFFT',
    driveViewUrl: 'https://drive.google.com/file/d/1MZ-kkNyoLVQmFjiP_rwSNVH3SKUoHFFT/view',
    advice: 'Buka bagian Diagnostik 60 Detik di halaman awal untuk langsung memetakan kebocoran terbesar kas & retensi pelanggan di bisnis F&B Anda sebelum melangkah ke strategi promosi.',
  },
};

// Send download link email directly to requester upon lead-magnet form submission.
// Best-effort: any failure is logged and caught so it never breaks the user flow.
async function sendDownloadAutoReply({
  transporter,
  mailFrom,
  smtpUser,
  replyTo,
  toEmail,
  recipientName,
  resource,
}) {
  const resourceData = DOWNLOAD_RESOURCES[resource];
  if (!resourceData || !toEmail || !transporter) return false;

  const firstName =
    recipientName && recipientName.trim() && !recipientName.includes('@')
      ? recipientName.trim().split(/\s+/)[0]
      : 'Rekan';

  const textBody = `Halo ${firstName},

Terima kasih sudah mendaftar untuk mengunduh ${resourceData.title}.

Anda dapat langsung membaca dan mengunduh filenya melalui tautan berikut:

👉 Unduh Langsung (PDF):
${resourceData.directDownloadUrl}

👉 Buka di Google Drive:
${resourceData.driveViewUrl}

Saran awal:
${resourceData.advice}

Jika ada bagian di dalam panduan ini yang ingin didiskusikan lebih lanjut seputar implementasinya di bisnis Anda, silakan langsung balas (reply) email ini.

Salam hangat,
Aditya Bayu
Fractional CMO & Growth Operator
https://adityabayu.com`;

  const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
    .btn { display: inline-block; background-color: #1e3a8a; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin: 16px 0; }
    .box { background-color: #f1f5f9; border-left: 4px solid #1e3a8a; padding: 14px 16px; margin: 20px 0; border-radius: 4px; font-size: 14px; }
    .footer { margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <div class="card">
    <p style="font-size: 16px;">Halo <strong>${firstName}</strong>,</p>
    <p>Terima kasih sudah meminta akses ke <strong>${resourceData.title}</strong>.</p>
    <p>Sesuai janji, Anda dapat langsung mengunduh dan membaca filenya sekarang:</p>
    
    <p style="text-align: center;">
      <a href="${resourceData.directDownloadUrl}" class="btn" target="_blank">Unduh File (PDF) ↓</a>
    </p>
    <p style="font-size: 13px; text-align: center; color: #64748b;">
      Atau buka via Google Drive: <a href="${resourceData.driveViewUrl}" target="_blank">Klik di sini</a>
    </p>

    <div class="box">
      <strong>Saran awal:</strong> ${resourceData.advice}
    </div>

    <p style="font-size: 14px; color: #475569;">
      Jika ada hal yang ingin didiskusikan atau ditanyakan seputar implementasinya di bisnis Anda, silakan langsung balas (reply) email ini.
    </p>

    <div class="footer">
      <strong>Aditya Bayu</strong><br>
      Fractional CMO & Growth Operator<br>
      <a href="https://adityabayu.com">adityabayu.com</a>
    </div>
  </div>
</body>
</html>`;

  try {
    const fromAddress =
      mailFrom ||
      (smtpUser && smtpUser.includes('@')
        ? `"Aditya Bayu" <${smtpUser}>`
        : '"Aditya Bayu" <hi@adityabayu.com>');
    const replyToAddress =
      replyTo || (smtpUser && smtpUser.includes('@') ? smtpUser : 'hi.andrewbayu@gmail.com');

    await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      replyTo: replyToAddress,
      subject: resourceData.subject,
      text: textBody,
      html: htmlBody,
    });
    return true;
  } catch (err) {
    console.warn('lead magnet auto-reply failed:', err);
    return false;
  }
}

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

// Sync incoming lead directly to Google Sheets (Newsletter Campaign sheet).
// Best-effort: failures are logged and swallowed so contact form never breaks.
async function addToGoogleSheet({
  firstName = '',
  email = '',
  status = 'Lead',
  result = '',
  raw = {},
}) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl || !email) return;

  try {
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        email,
        status,
        result,
        ...raw,
      }),
    });
    if (!resp.ok) {
      console.warn('google sheet sync non-ok:', resp.status, await resp.text().catch(() => ''));
    }
  } catch (err) {
    console.warn('google sheet sync failed:', err);
  }
}

// Sync incoming lead directly to Supabase Central Leads Database (table: public.leads)
// Best-effort: failures are logged and swallowed so contact form never breaks.
async function addToSupabase({
  firstName = '',
  email = '',
  sourceSite = 'adityabayu.com',
  formName = '',
  leadType = 'Lead',
  result = '',
  status = 'New',
  aiNotes = null,
  payload = {},
}) {
  const supabaseUrl = (process.env.SUPABASE_URL || 'https://immdmdiegbnmqhegkacq.supabase.co').trim().replace(/\/+$/, '');
  const supabaseKey = (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbWRtZGllZ2JubXFoZWdrYWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0Mjc4MTQsImV4cCI6MjEwNjAwMzgxNH0.cxBbiPWaPo-EwjBjT1jRYFxUsvdmPTqt8hwotEHTrJw'
  ).trim();

  if (!supabaseUrl || !email) return;

  try {
    const resp = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        first_name: firstName,
        email,
        source_site: sourceSite,
        form_name: formName,
        lead_type: leadType,
        result,
        status,
        ai_notes: aiNotes,
        payload,
      }),
    });
    if (!resp.ok) {
      console.warn('supabase lead insert non-ok:', resp.status, await resp.text().catch(() => ''));
    }
  } catch (err) {
    console.warn('supabase lead insert failed:', err);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = req.body || {};
  const {
    name = '',
    email = '',
    company = '',
    source_site = 'adityabayu.com',
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

    // Capture the lead directly to Google Sheets (Newsletter Campaign sheet).
    // Maps FirstName, Email, Status ("Lead Magnet" or "Lead"), Result.
    const leadFirstName = (name || from_name || '').trim().split(/\s+/)[0] || '';
    const leadStatus = isNewsletterSignup ? 'Lead' : (resource && !isDalApplication ? 'Lead Magnet' : 'Lead');
    const leadResult = isDalApplication
      ? `Digital Advantage Lab application${company ? ` (${company})` : ''}`
      : (resource || subject || 'Website inquiry');

    await addToGoogleSheet({
      firstName: leadFirstName,
      email,
      status: leadStatus,
      result: leadResult,
      raw: {
        company,
        message,
        ref_id,
        dal_website,
        dal_offer,
        dal_challenge,
        dal_tried,
        dal_goal,
      },
    });

    // Auto-responder: send download link email directly to requester
    let isAutoDelivered = false;
    if (resource && DOWNLOAD_RESOURCES[resource]) {
      isAutoDelivered = await sendDownloadAutoReply({
        transporter,
        mailFrom: MAIL_FROM,
        smtpUser: SMTP_USER,
        replyTo: CONTACT_TO,
        toEmail: email,
        recipientName: name || from_name,
        resource,
      });
    }

    // Capture the lead directly to Supabase Central Leads Database
    await addToSupabase({
      firstName: leadFirstName,
      email,
      sourceSite: source_site || 'adityabayu.com',
      formName: resource || subject || 'Website Contact Form',
      leadType: leadStatus,
      result: leadResult,
      status: isAutoDelivered ? 'Delivered' : 'New',
      aiNotes: isAutoDelivered ? `Auto-delivered ${resource} download link via email.` : null,
      payload: {
        name,
        company,
        message,
        ref_id,
        dal_website,
        dal_offer,
        dal_challenge,
        dal_tried,
        dal_goal,
        consent,
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('contact mail send failed:', err);
    return res.status(502).json({ success: false, message: 'Could not send right now. Please email directly.' });
  }
}
