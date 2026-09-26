// Shared contact/lead-capture helpers. Submissions go to our own same-origin
// serverless function (/api/contact), which sends the email over SMTP. Because
// the request is same-origin there is no CORS preflight and no third-party
// bot-challenge in the browser path (the reason the old Web3Forms browser API
// kept returning 403 via its Cloudflare protection).

// 5-char reference id: 2 letters + 3 digits (e.g. AB123). crypto-backed.
export function genRefId() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const digits = '0123456789';
  const a = new Uint8Array(5);
  (window.crypto || window.msCrypto).getRandomValues(a);
  return (
    letters[a[0] % letters.length] +
    letters[a[1] % letters.length] +
    digits[a[2] % 10] +
    digits[a[3] % 10] +
    digits[a[4] % 10]
  );
}

// POST a payload to our /api/contact serverless function. Throws on failure.
export async function submitContact(payload) {
  // Trailing slash on purpose: vercel.json has trailingSlash:true, so /api/contact
  // 308-redirects to /api/contact/. Posting straight to the slashed path avoids
  // the redirect round-trip entirely.
  const resp = await fetch('/api/contact/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await resp.json().catch(() => ({}));
  if (!resp.ok || !json.success) throw new Error(json.message || 'Submission failed');

  // Client-side fallback / redundant sync if VITE_GOOGLE_SHEET_WEBHOOK_URL is set
  const clientWebhook = import.meta.env?.VITE_GOOGLE_SHEET_WEBHOOK_URL;
  if (clientWebhook && payload?.email) {
    try {
      const candidate = payload.name || payload.from_name || '';
      const firstName = candidate && !candidate.includes('@') ? candidate.trim().split(/\s+/)[0] : '';
      const isLeadMagnet = Boolean(
        payload.resource &&
        payload.resource !== 'The CMO Notes newsletter' &&
        payload.resource !== 'Digital Advantage Lab application'
      );
      fetch(clientWebhook, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          firstName,
          email: payload.email,
          status: isLeadMagnet ? 'Lead Magnet' : 'Lead',
          result: payload.resource || payload.subject || 'Website inquiry',
          ...payload,
        }),
      }).catch(() => {});
    } catch {}
  }

  // Client-side Supabase sync
  const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || 'https://immdmdiegbnmqhegkacq.supabase.co';
  const supabaseKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbWRtZGllZ2JubXFoZWdrYWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0Mjc4MTQsImV4cCI6MjEwNjAwMzgxNH0.cxBbiPWaPo-EwjBjT1jRYFxUsvdmPTqt8hwotEHTrJw';
  if (supabaseUrl && supabaseKey && payload?.email) {
    try {
      const candidate = payload.name || payload.from_name || '';
      const firstName = candidate && !candidate.includes('@') ? candidate.trim().split(/\s+/)[0] : '';
      const isLeadMagnet = Boolean(
        payload.resource &&
        payload.resource !== 'The CMO Notes newsletter' &&
        payload.resource !== 'Digital Advantage Lab application'
      );
      fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          first_name: firstName,
          email: payload.email,
          source_site: 'adityabayu.com',
          form_name: payload.resource || payload.subject || 'Website Contact Form',
          lead_type: isLeadMagnet ? 'Lead Magnet' : 'Lead',
          result: payload.resource || payload.subject || 'Website inquiry',
          payload,
        }),
      }).catch(() => {});
    } catch {}
  }

  return json;
}
