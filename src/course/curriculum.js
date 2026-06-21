// Public-safe course metadata for /learn (Operator Playbook).
//
// IMPORTANT: this file is in the PUBLIC repo, so it contains NO lesson bodies —
// only titles, summaries, ordering, and which lessons are free previews. Paid
// lesson bodies (`body_md`) live in Supabase and are released by RLS only to
// authenticated buyers. See `supabase/schema.sql`.
//
// The `slug` of each lesson must match the `slug` column in the Supabase
// `lessons` table.

import { COURSE_SLUG } from '../lib/supabase';

export const course = {
  slug: COURSE_SLUG,
  title: 'The Operator Playbook',
  tagline: 'How Aditya builds and scales ventures — the actual system',
  promise:
    'A practical, no-fluff course on operating a company to revenue: read the business, find the real constraint, build a demand engine, and systemize it so it runs without you.',
  // Outcomes shown on the landing page.
  outcomes: [
    'Diagnose the one growth constraint that actually matters right now',
    'Build positioning that compounds instead of resetting every campaign',
    'Stand up a repeatable demand motion you can measure and scale',
    'Install an operating cadence and hand the machine off cleanly',
  ],
  audience: 'For founders, operators, and fractional marketers running real P&Ls.',
};

// Modules → lessons. Order is explicit via `number`. The first lesson is a free,
// public, SEO-indexable preview (is_free: true). Everything else is paid.
export const modules = [
  {
    id: 'm1',
    title: 'Read the business',
    blurb: 'Before you build anything, see the machine clearly.',
    lessons: [
      {
        number: 1,
        slug: 'operators-first-30-days',
        title: "The operator's first 30 days",
        summary:
          'What to look at, who to talk to, and what to deliberately ignore when you take an operating seat.',
        duration: '12 min read',
        is_free: true,
      },
      {
        number: 2,
        slug: 'finding-the-real-growth-constraint',
        title: 'Finding the real growth constraint',
        summary:
          'Most teams optimise the wrong thing. A method for locating the single bottleneck holding revenue back.',
        duration: '14 min read',
        is_free: false,
      },
    ],
  },
  {
    id: 'm2',
    title: 'Build the engine',
    blurb: 'Turn the diagnosis into a demand motion that repeats.',
    lessons: [
      {
        number: 3,
        slug: 'positioning-that-compounds',
        title: 'Positioning that compounds',
        summary:
          'Why most positioning resets every quarter — and how to write one that accrues value over time.',
        duration: '15 min read',
        is_free: false,
      },
      {
        number: 4,
        slug: 'the-channel-fit-test',
        title: 'The channel-fit test',
        summary:
          'A disciplined way to find the one or two channels that fit your motion before you spend at scale.',
        duration: '13 min read',
        is_free: false,
      },
      {
        number: 5,
        slug: 'building-a-repeatable-demand-motion',
        title: 'Building a repeatable demand motion',
        summary:
          'Assemble offer, creative, channel, and follow-up into a loop you can measure and pour budget into.',
        duration: '17 min read',
        is_free: false,
      },
    ],
  },
  {
    id: 'm3',
    title: 'Scale & hand off',
    blurb: 'Make it run without you in the room.',
    lessons: [
      {
        number: 6,
        slug: 'operating-cadence-and-metrics',
        title: 'Operating cadence & the metrics that matter',
        summary:
          'The weekly/monthly rhythm and the short list of numbers that actually move decisions.',
        duration: '14 min read',
        is_free: false,
      },
      {
        number: 7,
        slug: 'systemizing-the-handoff',
        title: 'Systemizing so it runs without you',
        summary:
          'Document, delegate, and instrument the engine so growth survives your exit from the seat.',
        duration: '16 min read',
        is_free: false,
      },
    ],
  },
];

// Flat, ordered list — convenient for routing, prev/next, and lookups.
export const lessons = modules
  .flatMap((m) => m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title })))
  .sort((a, b) => a.number - b.number);

export const lessonSlugs = lessons.map((l) => l.slug);
export const lessonBySlug = Object.fromEntries(lessons.map((l) => [l.slug, l]));

export const totalLessons = lessons.length;
