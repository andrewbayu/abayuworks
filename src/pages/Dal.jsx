import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fadeUp, inView, stagger } from '../lib/motion';

const outcomes = [
  'A clear diagnosis of the bottleneck costing the business growth right now',
  'A practical map of the customer journey, from first touch to paid customer',
  'A prioritized 90-day action plan, including what not to spend money on yet',
];

const deliverables = [
  ['01', 'Digital Advantage Scorecard', 'A 5-part assessment of Foundation, Demand, Conversion, Connected Experience, and Intelligence.'],
  ['02', 'The Discovery Journey', 'A visual map of how prospects discover, evaluate, trust, and choose the business, including where they drop off.'],
  ['03', 'The Acquisition Framework', 'A practical blueprint showing funnel stages, channels, lead temperature, follow-up, ownership, and conversion timing.'],
  ['04', 'Your Priority Growth Move', 'One clear priority and an actionable 90-day plan. No generic ideas and no bloated strategy deck.'],
];

const ctaClass =
  'inline-flex items-center justify-center gap-3 rounded-card bg-blue px-6 py-3.5 font-medium text-white shadow-[0_12px_28px_-14px_rgba(28,61,115,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-blue-soft focus:outline-none focus:ring-2 focus:ring-blue-soft/60 focus:ring-offset-2 focus:ring-offset-white';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Advantage Lab',
  description:
    'A private 60-minute diagnostic for founders and decision-makers who want to find the growth bottleneck before spending more on marketing.',
  provider: { '@type': 'Person', name: site.name, jobTitle: site.role },
  url: `${site.url}/dal/`,
};

export default function Dal() {
  return (
    <>
      <Seo
        title="Digital Advantage Lab · Find the growth bottleneck"
        description="A private 60-minute diagnostic for founders and decision-makers who want to find the growth bottleneck before spending more on marketing."
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
            <p className="eyebrow">Private diagnostic · Limited to 4 businesses per week</p>
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
              <span className="block text-blue">A 10-page diagnosis of what is holding your business back.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Get a clear picture of where your business and brand stand, what is stopping you from scaling, and exactly what to do next.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="/#contact" className={ctaClass}>
                Apply for your 60-minute diagnostic <span aria-hidden>→</span>
              </a>
              <span className="text-sm text-faint">For founders and decision-makers.</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-14 max-w-4xl rounded-card border border-blue/20 bg-[#f7f9fc] p-5 shadow-[0_20px_60px_-40px_rgba(28,61,115,0.55)] sm:mt-20 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="eyebrow">The deliverable</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  A 10-page audit and actionable growth report.
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  The session is where the diagnosis happens. The report is what you keep, use, and execute after the call.
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
              <p className="eyebrow">Why this exists</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                More marketing cannot rescue a broken path to purchase.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Traffic can be healthy while conversion is weak. Leads can be plentiful while follow-up is slow. Sales can be talented while marketing attracts the wrong people. The Lab finds the constraint that connects those symptoms.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['Attention', 'Can the right people find and understand the offer?'],
                ['Trust', 'Do prospects get enough proof and clarity to move?'],
                ['Revenue', 'Does the team have a repeatable path to close?'],
              ].map(([title, body]) => (
                <div key={title} className="border-t-2 border-blue pt-4">
                  <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-5xl sm:mt-32">
            <motion.div variants={fadeUp} className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">What is inside the report</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">A method, not a pile of opinions.</h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted">Four practical sections that show the current position, the growth leak, and the next move.</p>
            </motion.div>
            <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {deliverables.map(([no, title, body]) => (
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
                  The goal is not to leave with more ideas. The goal is to leave with a 10-page report, a sharper diagnosis, a better order of operations, and a 90-day move the business can actually execute.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-end border-t border-white/15 p-7 md:border-l md:border-t-0 sm:p-10">
                <blockquote className="border-l-2 border-[#ffe8d4] pl-5 text-lg italic leading-relaxed text-white">
                  “The right next move becomes obvious when the real constraint is visible.”
                </blockquote>
              </motion.div>
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.07)} className="mx-auto mt-24 max-w-3xl text-center sm:mt-32" id="apply">
            <motion.p variants={fadeUp} className="eyebrow">Apply for Digital Advantage Lab</motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Find the leak before you fund the fix.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted">
              Apply for a private 60-minute diagnostic. Every session starts with a rapid pre-audit, so the conversation begins with the business, not a sales script.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <a href="/#contact" className={ctaClass}>
                Apply for a Private Diagnostic <span aria-hidden>→</span>
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-faint">Limited to 4 businesses per week.</motion.p>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}
