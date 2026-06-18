// Shared contact/lead-capture helpers. Web3Forms key comes from the Vercel env var.
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

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

// POST a payload to Web3Forms. Throws on failure.
// Sent as FormData (not JSON) on purpose: a JSON body forces a CORS preflight
// OPTIONS request, which Web3Forms' Cloudflare bot-protection answers with a
// challenge (non-2xx) and the browser then blocks the whole request. FormData
// is a CORS-safelisted content type, so no preflight is sent. Do NOT add a
// Content-Type header here — the browser must set the multipart boundary.
export async function submitWeb3Forms(payload) {
  const formData = new FormData();
  formData.append('access_key', WEB3FORMS_KEY);
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value ?? '');
  }
  const resp = await fetch('https://api.web3forms.com/v0/submit', {
    method: 'POST',
    body: formData,
  });
  const json = await resp.json();
  if (!json.success) throw new Error(json.message || 'Submission failed');
  return json;
}
