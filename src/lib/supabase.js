// Browser Supabase client for the /learn course (auth + reading lesson content).
// Uses the public anon key + RLS — never the service-role key (that lives only
// in the serverless functions). Configured via VITE_ env vars, which ARE shipped
// to the browser; that's expected for the anon key.
//
// Returns null when env vars are missing (e.g. local dev without a Supabase
// project yet) so the UI can degrade gracefully instead of crashing the build.
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: {
          // Magic-link / OTP sessions persist in localStorage and auto-refresh.
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : null;

export const COURSE_SLUG = 'operator-playbook';
