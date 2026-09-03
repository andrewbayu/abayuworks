import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fadeUp, inView, stagger } from '../lib/motion';

const scorecard = [
  ['01', 'Foundation', 'Can the right customer find, understand, and trust you?'],
  ['02', 'Demand', 'Can you consistently attract qualified attention?'],
  ['03', 'Conversion', 'Can you turn interest into revenue?'],
  ['04', 'Connected Experience', 'Do marketing, sales, and follow-up work together?'],
  ['05', 'Intelligence', 'Are you using insight and data to improve growth decisions?'],
];

const deliverables = [
  {
    no: '01',
    title: 'Digital Advantage Scorecard',
    body: 'A clear assessment of your business across Foundation, Demand, Conversion, Connected Experience, and Intelligence.',
  },
  {
    no: '02',
    title: 'The Discovery Journey',
    body: 'A visual map of how strangers should discover, evaluate, trust, and choose your business, including the friction points where prospects drop off.',
  },
  {
    no: '03',
    title: 'The Acquisition Framework',
    body: 'A practical blueprint of funnel stages, touchpoints, lead temperature, conversion timing, team ownership, channels, and performance variables.',
  },
  {
    no: '04',
    title: 'Your Priority Growth Move',
    body: 'One clear priority, supported by a practical 90-day plan. No generic ideas and no bloated strategy deck.',
  },
];

const ctaClass =
  'inline-flex items-center justify-center gap-3 rounded-card bg-blue px-5 py-3.5 font-medium text-white transition-colors hover:bg-blue-soft focus:outline-none focus:ring-2 focus:ring-cream/60 focus:ring-offset-2 focus:ring-offset-bg';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Advantage Lab',
  description:
    'A private diagnostic session for founders and decision-makers who want to identify the bottleneck holding back acquisition, conversion, and growth.',
  provider: { '@type': 'Person', name: site.name, jobTitle: site.role },
  url: `${site.url}/dal/`,
};

export default function Dal() {
  return (
    <>
      <Seo
        title="DAL: Digital Advantage Lab · Aditya Bayu"
        description="Find the growth leak before you spend more on marketing. A private diagnostic session for founders and decision-makers."
        path="/dal/"
        jsonLd={jsonLd}
      />

      <div className="relative overflow-hidden bg-bg">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(28,61,115,0.42), transparent 68%)' }}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-24"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <motion.p variants={fadeUp} className="eyebrow">
                DAL · Digital Advantage Lab
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl"
              >
                Find the growth leak before you spend more on marketing.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                More ads, more content, a new website, or a bigger sales team will only work when they solve the right problem.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted">
                Digital Advantage Lab is a private diagnostic session for founders and decision-makers who want to identify what is holding back acquisition, conversion, and growth before investing more budget in the wrong place.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
                <a href="/#contact" className={ctaClass}>
                  Apply for a Private Diagnostic <span aria-hidden>→</span>
                </a>
                <span className="text-sm text-faint">Limited to 4 businesses per week.</span>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="card relative overflow-hidden p-5 sm:p-7">
              <div className="flex items-start justify-between border-b border-line pb-5">
                <div>
                  <p className="eyebrow">Diagnostic instrument</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink">Digital Advantage Scorecard</p>
                </div>
                <span className="font-mono text-xs text-faint">DAL / 01</span>
              </div>
              <div className="mt-5 space-y-4">
                {scorecard.map(([no, label, question], index) => (
                  <div key={label} className="grid grid-cols-[2rem_1fr_auto] items-start gap-3">
                    <span className="font-mono text-xs text-blue-soft">{no}</span>
                    <div>
                      <p className="text-sm font-medium text-ink">{label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-faint">{question}</p>
                    </div>
                    <span className="mt-1 h-2 w-2 rounded-full bg-cream/70" aria-hidden />
                    {index < scorecard.length - 1 && <span className="col-start-1 row-start-1 ml-[0.35rem] mt-5 h-8 w-px bg-line" aria-hidden />}
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-5 text-xs uppercase tracking-[0.16em] text-faint">
                Attention <span className="mx-2 text-blue-soft">→</span> Revenue
              </div>
            </motion.div>
          </div>

          <motion.section {...inView} variants={stagger(0.08)} className="mt-24 max-w-3xl sm:mt-32">
            <motion.p variants={fadeUp} className="eyebrow">The actual problem</motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              You may not need more leads. You may need a better system.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 leading-relaxed text-muted">
              Your business may already be generating activity, but growth remains unpredictable because there is a disconnect between attention and revenue.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 grid gap-3 text-lg text-ink sm:grid-cols-3">
              <p className="border-l border-blue-soft pl-4">Maybe traffic does not convert.</p>
              <p className="border-l border-blue-soft pl-4">Maybe leads are not followed up properly.</p>
              <p className="border-l border-blue-soft pl-4">Maybe marketing and sales are not working as one system.</p>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-muted">
              In a focused 60-minute session, the bottleneck that matters most and the next move worth making are identified.
            </motion.p>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.08)} className="mt-24 sm:mt-32">
            <motion.p variants={fadeUp} className="eyebrow">What you receive</motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Clarity on what to fix first.
            </motion.h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <motion.article key={item.no} variants={fadeUp} className="card p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-blue-soft">{item.no}</span>
                    <span className="text-cream" aria-hidden>↗</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.08)} className="mt-24 grid gap-8 border-t border-line pt-8 sm:mt-32 sm:grid-cols-[0.7fr_1.3fr] sm:gap-16 sm:pt-12">
            <motion.p variants={fadeUp} className="eyebrow">Why spots are limited</motion.p>
            <div>
              <motion.p variants={fadeUp} className="text-xl leading-relaxed text-ink sm:text-2xl">
                Every Lab begins with a rapid pre-audit of your business, so the session can be commercially useful from the first minute.
              </motion.p>
              <motion.blockquote variants={fadeUp} className="mt-8 border-l-2 border-cream pl-5 text-lg italic leading-relaxed text-muted">
                You will not leave with more marketing noise. You will leave with a clearer path from attention to revenue.
              </motion.blockquote>
            </div>
          </motion.section>

          <motion.section {...inView} variants={stagger(0.08)} className="mt-24 rounded-card border border-line bg-elevated p-7 sm:mt-32 sm:p-12" id="apply">
            <motion.p variants={fadeUp} className="eyebrow">Apply for your Digital Advantage Lab</motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Make the next growth decision with a clearer diagnosis.
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-7">
              <a href="/#contact" className={ctaClass}>
                Apply for a Private Diagnostic <span aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
}
