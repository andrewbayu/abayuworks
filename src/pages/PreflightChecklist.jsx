import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { genRefId, submitContact } from '../lib/forms';
import { fadeUp, stagger, inView } from '../lib/motion';

const RESOURCE = 'Meta Ads Pre-Flight Checklist (Vol. 01)';
const THANK_YOU = '/preflight-checklist/thank-you';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The Meta Ads Pre-Flight Checklist',
  description:
    'A free field guide for marketers and business owners running ads in the creative-as-targeting era. The exact 5-point pre-flight Aditya Bayu runs before a single ad goes live.',
  url: site.url + '/preflight-checklist/',
  author: { '@type': 'Person', name: site.name, jobTitle: site.role },
};

// The five phases of the checklist, written as curiosity bullets.
const phases = [
  {
    no: '01',
    kicker: 'Fix the signal',
    title: 'The tracking setup that decides who Meta can even find',
    body: 'Why running only the Pixel (and skipping CAPI) leaves the system half-blind — and the one Event Match Quality number you must clear before you launch.',
  },
  {
    no: '02',
    kicker: 'Simplify the structure',
    title: 'The “old scaffolding” quietly slowing your learning to a crawl',
    body: 'Stacked interests, layered lookalikes, age/gender exclusions — built to steer a system that no longer needs steering. What to tear down so ad sets stop getting stuck in the learning phase.',
  },
  {
    no: '03',
    kicker: 'The first 3 seconds',
    title: 'The one question every hook has to answer',
    body: 'Your creative is now a targeting input. The single question each hook must pass — or the algorithm guesses who to show it to, with your money.',
  },
  {
    no: '04',
    kicker: 'Build for diversity',
    title: 'Why 50 ads can get a single shot at the auction',
    body: 'Near-identical creatives get grouped as one. The “10+ distinct angles, not 5 color swaps” rule that gives the algorithm something real to match.',
  },
  {
    no: '05',
    kicker: 'Launch discipline',
    title: 'The 7–14 day rule most people break on day 3',
    body: 'Swapping creative early restarts the learning phase from zero. How long to hold, which two signals to read before conversions mature, and how to diagnose a slump correctly.',
  },
];

const forWho = [
  'You run Meta ads — or you’re about to — and the results feel like a coin flip.',
  'You’ve felt targeting get “worse” lately and can’t tell why.',
  'You’re a founder or operator spending real money and want a pre-launch gate.',
];

const inputCls =
  'w-full rounded-card border border-line bg-elevated px-4 py-3 text-base text-ink placeholder:text-faint focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/30';

function OptInForm({ id, cta = 'Send me the checklist' }) {
  const navigate = useNavigate();
  const [state, setState] = useState('idle'); // idle | sending | error
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const ref = genRefId();
      await submitContact({
        subject: `Lead magnet request: ${RESOURCE} (${ref})`,
        from_name: email,
        email,
        resource: RESOURCE,
        ref_id: ref,
      });
      // Lead captured — hand off to the thank-you page where the download lives.
      navigate(THANK_YOU);
    } catch {
      setState('error');
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2.5 sm:flex-row"
        aria-label="Get the checklist"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={inputCls}
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-card bg-blue px-5 py-3 font-medium text-white transition-colors hover:bg-blue-soft disabled:opacity-60 sm:px-6"
        >
          {state === 'sending' ? 'Sending…' : `${cta} →`}
        </button>
      </form>
      {state === 'error' && (
        <p className="mt-2 text-sm text-red-400">Couldn’t send just now — try again in a moment.</p>
      )}
      <p className="mt-2.5 text-xs text-faint">
        Free. No spam. You get the download link on the next page.
      </p>
    </div>
  );
}

export default function PreflightChecklist() {
  return (
    <>
      <Seo
        title="The Meta Ads Pre-Flight Checklist · Aditya Bayu"
        description="Meta stopped letting you pick the audience — your creative picks it now. The free 5-point pre-flight Aditya Bayu runs before spending a single rupiah on Meta ads. Get the field guide."
        path="/preflight-checklist/"
        jsonLd={jsonLd}
      />

      <main className="relative min-h-screen overflow-hidden bg-bg">
        {/* Ambient backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(28,61,115,0.35), transparent 70%)' }}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-prose px-5 pb-20 pt-16 sm:pt-24"
        >
          {/* Pre-headline */}
          <motion.p variants={fadeUp} className="eyebrow">
            Free field guide · Vol. 01 — Meta Ads
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl"
          >
            The 5-point checklist Aditya runs before spending a single rupiah on Meta ads.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            Meta stopped letting you pick the audience. Your <span className="text-cream">creative</span> picks
            it now — its AI reads your hook, your words, your structure, and decides who sees the ad. Which
            means most ad budgets are lost <em>before launch</em>, on five things almost nobody checks. This is
            the exact pre-flight that catches them.
          </motion.p>

          {/* Above-the-fold opt-in */}
          <motion.div variants={fadeUp} className="mt-8">
            <OptInForm id="optin-top" />
          </motion.div>

          {/* Authority strip */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 border-t border-line pt-6"
          >
            <img
              src="/aditya-bayu.webp"
              alt={site.name}
              width="44"
              height="44"
              loading="eager"
              className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover"
            />
            <p className="text-sm leading-snug text-muted">
              <span className="text-ink">{site.name}</span> — Fractional CMO &amp; venture builder.
              The same gate he runs across client accounts before a single ad goes live.
            </p>
          </motion.div>

          {/* What's inside */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              What’s inside
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-muted">
              Five phases. Run them in order, every time you build a campaign.
            </motion.p>

            <div className="mt-8 flex flex-col gap-4">
              {phases.map((p) => (
                <motion.div
                  key={p.no}
                  variants={fadeUp}
                  className="card flex gap-4 p-5 sm:gap-6 sm:p-6"
                >
                  <span
                    className="font-display text-3xl font-semibold leading-none text-cream/70 sm:text-4xl"
                    aria-hidden
                  >
                    {p.no}
                  </span>
                  <div className="min-w-0">
                    <p className="text-micro uppercase tracking-wide text-cream">{p.kicker}</p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pull-quote */}
          <motion.blockquote
            {...inView}
            variants={fadeUp}
            className="mt-16 border-l-2 border-cream/50 pl-5 sm:pl-6"
          >
            <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              If the machine can’t tell who your ad is for, it will guess. With your budget.
            </p>
          </motion.blockquote>

          {/* Who it's for */}
          <motion.section {...inView} variants={stagger(0.07)} className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              Read this if…
            </motion.h2>
            <ul className="mt-6 flex flex-col gap-3">
              {forWho.map((line) => (
                <motion.li key={line} variants={fadeUp} className="flex gap-3 text-pretty text-muted">
                  <span className="mt-1 shrink-0 text-cream" aria-hidden>
                    ✓
                  </span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            {...inView}
            variants={fadeUp}
            className="mt-16 rounded-card border border-line bg-surface p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Get the checklist
            </h2>
            <p className="mt-2 text-pretty text-muted">
              Five phases, every checkbox, in one tight field guide. Enter your email and it’s yours in the next
              30 seconds.
            </p>
            <div className="mt-6">
              <OptInForm id="optin-bottom" cta="Send it to me" />
            </div>

            {/* P.S. — Brunson signature */}
            <p className="mt-6 text-sm leading-relaxed text-muted">
              <span className="text-ink">P.S.</span> — This isn’t theory. It’s the literal pre-flight Aditya runs
              across real client accounts before any ad goes live. If you’d rather have it run inside your own
              funnel,{' '}
              <Link to="/#contact" className="text-cream underline-offset-4 hover:underline">
                reach out
              </Link>{' '}
              — he takes on a few operators a month.
            </p>
          </motion.section>

          {/* Footer */}
          <motion.div variants={fadeUp} className="mt-14 border-t border-line pt-6 text-center">
            <Link to="/" className="text-xs text-faint transition-colors hover:text-cream">
              View full portfolio · adityabayu.com
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
