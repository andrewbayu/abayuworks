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
export async function submitWeb3Forms(payload) {
  const resp = await fetch('https://api.web3forms.com/v0/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
  });
  const json = await resp.json();
  if (!json.success) throw new Error(json.message || 'Submission failed');
  return json;
}
