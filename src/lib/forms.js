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
  const resp = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await resp.json().catch(() => ({}));
  if (!resp.ok || !json.success) throw new Error(json.message || 'Submission failed');
  return json;
}
