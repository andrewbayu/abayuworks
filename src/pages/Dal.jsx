import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import DalClientMarquee from '../components/DalClientMarquee';
import { fadeUp, inView, stagger } from '../lib/motion';

const outcomes = [
  'Your current level across the Digital Advantage Scorecard',
  'The bottleneck holding back growth right now',
  'A prioritized 90-day action plan, including what not to spend money on yet',
];

const scorecardLevels = [
  ['01', 'Foundation', 'Can the right customer find, understand, and trust the offer?'],
  ['02', 'Demand', 'Can the business consistently attract qualified attention?'],
  ['03', 'Conversion', 'Can interest move predictably into revenue?'],
  ['04', 'Connected Experience', 'Do marketing, sales, and follow-up work as one system?'],
  ['05', 'Intelligence', 'Does the business learn from data and improve its decisions?'],
];

const reportContents = [
  ['01', 'Manifesto', 'The business goal, built from the client brief and current condition.'],
  ['02', 'Insight & Findings', 'What the research, audit, and discovery process reveal.'],
  ['03', 'The Core Strategy', 'The central strategic direction that connects the findings to growth.'],
  ['04', 'Knowing Your Market', 'Buyer persona profile, market segments, competitors, and the space to win.'],
  ['05', 'Your Digital Advantage Scorecard', 'Your current level across Foundation, Demand, Conversion, Connected Experience, and Intelligence.'],
  ['06', 'The Discovery Journey', 'How prospects should discover, evaluate, trust, and choose the business.'],
  ['07', 'The Acquisition Framework', 'Stages, touchpoints, lead temperature, ownership, channels, timing, and performance variables.'],
  ['08', '3 Key Actionables', 'The three highest-leverage moves based on what the diagnosis found.'],
];

const reportSamples = [
  ['Insight & Findings', '/images/dal/insight-findings.png', 'Turn scattered observations into decision-ready findings.'],
  ['The Discovery Journey', '/images/dal/discovery-journey.png', 'Map intent from discovery content to consultation.'],
  ['The Acquisition Framework', '/images/dal/acquisition-framework.png', 'Connect stages, touchpoints, ownership, and conversion timing.'],
  ['Recommended Channels', '/images/dal/recommended-channels.png', 'Prioritize the channels that fit the business and its audience.'],
  ['Actionable Priorities', '/images/dal/actionables.png', 'Translate the diagnosis into a short list of actions.'],
  ['Sample Findings Page', '/images/dal/sample-findings.png', 'A representative example of the report’s findings format.'],
];

const ctaClass =
  'inline-flex items-center justify-center gap-3 rounded-card bg-blue px-6 py-3.5 font-medium text-white shadow-[0_12px_28px_-14px_rgba(28,61,115,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-blue-soft focus:outline-none focus:ring-2 focus:ring-blue-soft/60 focus:ring-offset-2 focus:ring-offset-white';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Advantage Lab',
  description:
    'A two-session business diagnostic with a five-day working period and a practical PDF report showing your current level, growth bottleneck, and next actionables.',
  provider: { '@type': 'Person', name: site.name, jobTitle: site.role },
  url: `${site.url}/dal/`,
};

export default function Dal() {
  return (
    <>
      <Seo
        title="Digital Advantage Lab · Find the growth bottleneck"
        description="A two-session business diagnostic with a five-day working period and a practical PDF report showing your current level, growth bottleneck, and next actionables."
        path="/dal/"
        jsonLd={jsonLd}
      />

      <div className="dal-light relative overflow-hidden bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Private diagnostic · Limited to 5 businesses per month</p>
            <img
              src="https://storage.googleapis.com/bluestark_explorer/infinitiworks/digital-advantage-lab-logo.png"
              alt="Digital Advantage Lab"
              width="240"
              height="96"
              loading="eager"
              decoding="async"
              className="mx-auto mt-6 h-auto w-72 object-contain sm:w-[26rem]"
            />
            <h1 className="mt-2 text-balance font-display text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl">
              Not your typical bullshit consultation session.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Digital Advantage Lab is a two-session business diagnostic that shows you what level your business is at, what is holding it back, and which three actions will create the clearest path forward.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="/dal-apply/" className={ctaClass}>
                Apply for your 60-minute diagnostic <span aria-hidden>→</span>
              </a>
              <span className="text-sm text-faint">For founders and decision-makers.</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 sm:mt-20"><DalClientMarquee /></motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-14 max-w-4xl rounded-card border border-blue/20 bg-[#f7f9fc] p-5 shadow-[0_20px_60px_-40px_rgba(28,61,115,0.55)] sm:mt-20 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="eyebrow">What you walk away with</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  Your current level, your biggest leak, and the next move.
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Two focused sessions, five days of working time, and a report that turns the diagnosis into a clear plan.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                {outcomes.map((outcome, index) => (
                  <div key={outcome} className="flex gap-3 border-t border-blue/15 pt-3 first:border-t-0 first:pt-0 md:first:border-t md:first:pt-3">
                    <span className="font-mono text-xs text-blue-soft">0{index + 1}</span>
                    <p className="text-sm font-medium leading-relaxed text-ink">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="eyebrow">How DAL works</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Two sessions. Five days of focused work. One clear diagnosis.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                The work starts with your brief and digital footprint, then gets tested in conversation before the findings are turned into a practical PDF report.
              </p>
            </motion.div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['01', 'Discovery Call', 'Up to 90 minutes', 'Align on the business goal, current condition, audience, offer, growth challenge, and the questions the audit needs to answer.'],
                ['02', 'Five days working', 'Research + report build', 'Review the digital footprint, market, competitors, content, ads, customer journey, and internal brief. Then build the diagnosis and action plan.'],
                ['03', 'Clarity Session', 'Up to 90 minutes', 'Present the report, show the current scorecard level, explain the bottleneck, and walk through the three key actionables.'],
              ].map(([no, title, kicker, body]) => (
                <motion.article key={no} variants={fadeUp} className="card p-6 sm:p-7">
                  <span className="font-mono text-xs text-blue-soft">{no}</span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-medium text-blue">{kicker}</p>
                  <p className="mt-3 leading-relaxed text-muted">{body}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="eyebrow">Know your level</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Find out where your business is before trying to scale it.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                DAL places the business across five levels of digital advantage. You will see what is working, where the system is leaking, what level the business is operating at today, and what needs to be true before moving to the next one.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {scorecardLevels.map(([no, title, body]) => (
                <div key={no} className="border-t-2 border-blue pt-4">
                  <span className="font-mono text-xs text-blue-soft">{no}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="max-w-2xl">
                <p className="eyebrow">See the work product</p>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                This is what your strategic PDF report looks like.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                The report turns the session into an operating document: your scorecard position, clear findings, visual frameworks, and three priority actions in the right order.
              </p>
            </motion.div>
            <motion.figure variants={fadeUp} className="mt-10 overflow-hidden rounded-card border border-line bg-[#f7f9fc] p-3 shadow-[0_20px_60px_-40px_rgba(28,61,115,0.55)] sm:p-5">
              <img
                src="/images/dal/report-mockup.png"
                alt="Digital Advantage Lab report shown on a laptop"
                width="942"
                height="492"
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              <figcaption className="px-2 pt-3 text-xs text-faint">Representative report mockup. Actual recommendations are based on the business being diagnosed.</figcaption>
            </motion.figure>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reportSamples.map(([title, src, body]) => (
                <motion.figure key={src} variants={fadeUp} className="overflow-hidden rounded-card border border-line bg-white">
                  <img src={src} alt={title} width="1920" height="1080" loading="lazy" decoding="async" className="aspect-video w-full object-cover object-top" />
                  <figcaption className="p-4">
                    <p className="font-display text-base font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <motion.p variants={fadeUp} className="mt-4 text-xs text-faint">Visual examples show the report format and framework types. The content is tailored to each business.</motion.p>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Report table of contents</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">A method, not a pile of opinions.</h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted">Eight sections that move from business context to diagnosis, then from diagnosis to action.</p>
            </motion.div>
            <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {reportContents.map(([no, title, body]) => (
                <motion.article key={no} variants={fadeUp} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line pb-7">
                  <span className="font-mono text-xs text-blue-soft">{no}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{body}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <div className="grid overflow-hidden rounded-card border border-line bg-[#10264a] text-white md:grid-cols-[1.1fr_0.9fr]">
              <motion.div variants={fadeUp} className="p-7 sm:p-10">
                <p className="dal-utility text-xs font-medium uppercase tracking-[0.16em] text-blue-200">The outcome</p>
                <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  Stop guessing which lever to pull.
                </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-blue-100/80">
                  The goal is not to leave with more ideas. The goal is to leave knowing your current level, holding a practical PDF, and having three actionables the business can actually execute.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-end border-t border-white/15 p-7 md:border-l md:border-t-0 sm:p-10">
                <blockquote className="border-l-2 border-[#ffe8d4] pl-5 text-lg italic leading-relaxed text-white">
                  “The right next move becomes obvious when the real constraint is visible.”
                </blockquote>
              </motion.div>
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="eyebrow">The investment</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Clarity costs less than scaling the wrong problem.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                DAL includes both sessions, the five-day working period, research, and the final strategic PDF report.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card p-7 sm:p-8">
                <p className="eyebrow">International</p>
                <p className="mt-5 font-display text-4xl font-semibold text-faint line-through">USD 499</p>
                <p className="mt-2 font-display text-5xl font-semibold text-blue">USD 199</p>
                <p className="mt-3 text-sm text-muted">Promotional rate for the complete Digital Advantage Lab.</p>
              </div>
            </motion.div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-3xl text-center sm:mt-32" id="apply">
            <motion.p variants={fadeUp} className="eyebrow">Apply for Digital Advantage Lab</motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Find the leak before you fund the fix.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted">
              Apply for the complete Digital Advantage Lab. Start with the brief, complete the two sessions, and leave with your current level, your three key actionables, and a strategic PDF report.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a href="/dal-apply/" className={ctaClass}>
                Apply for a Private Diagnostic <span aria-hidden>→</span>
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-faint">Limited to 5 businesses per month.</motion.p>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}
