import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// Tracks the Supabase auth session on the client. Returns { session, loading }.
// During SSG prerender (no window / no client) it just reports loading=false,
// signed-out — the real state hydrates in the browser.
export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) {
        setSession(data.session ?? null);
        setLoading(false);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    return () => {
      active = false;
      sub?.subscription?.unsubscribe();
    };
  }, []);

  return { session, loading };
}

// Email magic-link / OTP sign-in form. On success the user gets a one-time login
// link emailed to them; clicking it returns to the course signed in.
export function SignInForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [msg, setMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (!supabase) {
      setStatus('error');
      setMsg('Login is not configured yet.');
      return;
    }
    setStatus('sending');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/learn/` },
    });
    if (error) {
      setStatus('error');
      setMsg(error.message);
    } else {
      setStatus('sent');
    }
  }

  if (status === 'sent') {
    return (
      <p className="text-sm leading-relaxed text-muted">
        Check <span className="text-ink">{email}</span> — we sent a one-time login link. Open it on this
        device to unlock your lessons.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={compact ? 'flex flex-col gap-2.5' : 'flex flex-col gap-3'}>
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
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 rounded-card border border-line bg-surface px-5 py-3 font-medium text-ink transition-colors hover:border-cream disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Email me a login link'} <span aria-hidden>→</span>
      </button>
      {status === 'error' && <p className="text-sm text-red-300">{msg}</p>}
    </form>
  );
}

export function SignOutButton({ className = '' }) {
  return (
    <button
      type="button"
      onClick={() => supabase?.auth.signOut()}
      className={`text-xs text-faint transition-colors hover:text-cream ${className}`}
    >
      Sign out
    </button>
  );
}
