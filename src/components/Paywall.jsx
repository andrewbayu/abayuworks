import { useState } from 'react';
import { course } from '../course/curriculum';
import { startCheckout } from '../lib/course-access';
import { SignInForm } from './LearnAuth';

const priceLabel =
  import.meta.env.VITE_COURSE_PRICE_LABEL || 'Rp—'; // set VITE_COURSE_PRICE_LABEL for display, e.g. "Rp299.000"

// Locked state for a paid lesson (or the landing CTA). Two paths: buy, or sign in
// if you already bought. `signedIn` hides the buy box once a user is logged in but
// not yet entitled (e.g. payment still settling).
export default function Paywall({ heading, signedIn = false }) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function buy(e) {
    e.preventDefault();
    setErr('');
    setBusy(true);
    try {
      await startCheckout({ email });
    } catch (e2) {
      setErr(e2.message);
      setBusy(false);
    }
  }

  return (
    <div className="card mx-auto max-w-md p-6 text-center">
      <div className="text-micro uppercase tracking-wide text-cream">Members only</div>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {heading || 'Unlock the full course'}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {course.promise}
      </p>

      {!signedIn && (
        <form onSubmit={buy} className="mt-5 flex flex-col gap-2.5 text-left">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="rounded-card border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint focus:border-cream focus:outline-none"
          />
          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-5 py-3.5 font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60"
          >
            {busy ? 'Opening checkout…' : `Get lifetime access · ${priceLabel}`} <span aria-hidden>→</span>
          </button>
          {err && <p className="text-sm text-red-300">{err}</p>}
          <p className="text-center text-xs text-faint">One-time payment · QRIS, e-wallet, VA, card via Xendit</p>
        </form>
      )}

      <div className="mt-6 border-t border-line pt-5 text-left">
        <p className="mb-2.5 text-center text-xs uppercase tracking-wide text-faint">
          {signedIn ? 'Payment confirmed but still locked? Refresh in a moment.' : 'Already bought? Sign in'}
        </p>
        <SignInForm compact />
      </div>
    </div>
  );
}
