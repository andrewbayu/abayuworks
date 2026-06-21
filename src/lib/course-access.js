import { useEffect, useState } from 'react';
import { supabase, COURSE_SLUG } from './supabase';

// Whether the signed-in user has a paid enrollment. RLS only returns the user's
// own rows, so a simple count is safe. Returns { entitled, checking }.
export function useEntitlement(session) {
  const [entitled, setEntitled] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!supabase || !session?.user) {
      setEntitled(false);
      setChecking(false);
      return;
    }
    let active = true;
    setChecking(true);
    supabase
      .from('enrollments')
      .select('id', { count: 'exact', head: true })
      .eq('course_slug', COURSE_SLUG)
      .eq('status', 'paid')
      .then(({ count, error }) => {
        if (!active) return;
        setEntitled(!error && (count ?? 0) > 0);
        setChecking(false);
      });
    return () => {
      active = false;
    };
  }, [session]);

  return { entitled, checking };
}

// Start checkout: ask the serverless function for a Xendit invoice, then redirect
// the browser to the hosted payment page. Throws on failure.
export async function startCheckout({ email, name = '' }) {
  const resp = await fetch('/api/checkout/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name }),
  });
  const json = await resp.json().catch(() => ({}));
  if (!resp.ok || !json.success || !json.invoice_url) {
    throw new Error(json.message || 'Could not start checkout.');
  }
  window.location.href = json.invoice_url;
}
