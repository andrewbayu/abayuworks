-- ============================================================================
-- learn.adityabayu.com — paid course schema (Supabase / Postgres)
-- Run once in the Supabase SQL editor for the `adityabayu-learn` project.
-- ============================================================================

-- ── Tables ──────────────────────────────────────────────────────────────────

-- Lesson content. PAID bodies live here (not in the public repo). Free previews
-- are marked is_free = true and readable by anyone.
create table if not exists public.lessons (
  id           uuid primary key default gen_random_uuid(),
  course_slug  text not null default 'operator-playbook',
  slug         text not null unique,        -- matches src/course/curriculum.js
  module       text,
  number       int  not null,
  title        text not null,
  summary      text,
  duration     text,
  body_md      text not null,               -- markdown rendered client-side
  is_free      boolean not null default false,
  published    boolean not null default true,
  created_at   timestamptz not null default now()
);

-- Purchases / entitlements. Written ONLY server-side (service role) by the
-- checkout + webhook functions. Keyed by email so access survives before the
-- buyer first signs in; user_id is linked opportunistically on first login.
create table if not exists public.enrollments (
  id                 uuid primary key default gen_random_uuid(),
  email              text not null,
  user_id            uuid references auth.users(id),
  course_slug        text not null default 'operator-playbook',
  xendit_external_id text unique,            -- our id, sent to Xendit
  xendit_invoice_id  text,                   -- Xendit's invoice id (from webhook)
  amount             int,                    -- IDR
  status             text not null default 'pending'  -- 'pending' | 'paid' | 'expired'
                       check (status in ('pending','paid','expired')),
  paid_at            timestamptz,
  created_at         timestamptz not null default now()
);

create index if not exists enrollments_email_idx on public.enrollments (lower(email));

-- ── Row Level Security ──────────────────────────────────────────────────────
alter table public.lessons     enable row level security;
alter table public.enrollments enable row level security;

-- LESSONS: readable if it's a free preview, OR the signed-in user's email has a
-- paid enrollment for the same course. (auth.jwt() carries the user's email.)
drop policy if exists "lessons readable to entitled users" on public.lessons;
create policy "lessons readable to entitled users"
  on public.lessons for select
  using (
    published
    and (
      is_free
      or exists (
        select 1 from public.enrollments e
        where lower(e.email) = lower(auth.jwt() ->> 'email')
          and e.status = 'paid'
          and e.course_slug = lessons.course_slug
      )
    )
  );

-- ENROLLMENTS: a signed-in user can read their own rows (to show purchase state).
drop policy if exists "users read own enrollments" on public.enrollments;
create policy "users read own enrollments"
  on public.enrollments for select
  using (lower(email) = lower(auth.jwt() ->> 'email'));

-- No INSERT/UPDATE/DELETE policies on purpose: all writes go through the
-- service-role key in api/checkout.js + api/xendit-webhook.js, which bypasses RLS.

-- ── Optional: link user_id on first login ───────────────────────────────────
-- Backfills enrollments.user_id when a buyer signs in with the purchase email.
create or replace function public.link_enrollment_to_user()
returns trigger language plpgsql security definer as $$
begin
  update public.enrollments
     set user_id = new.id
   where lower(email) = lower(new.email)
     and user_id is null;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.link_enrollment_to_user();
