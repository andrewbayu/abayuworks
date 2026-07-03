import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { site } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

const PATH = '/fractional-cmo/';
const CONTACT = '/#contact';

// Visible FAQ — kept in sync with the FAQPage schema below (Google requires the
// structured answers to match what's on the page).
const faqs = [
  {
    q: 'What is a fractional CMO?',
    a: 'A fractional CMO is a senior marketing leader who runs your growth part-time — setting strategy, owning the funnel, and directing execution — for a fraction of a full-time hire. You get CMO-level judgment and systems without a full-time salary, equity, or a long ramp.',
  },
  {
    q: 'What does a fractional CMO actually do?',
    a: 'Sets the growth strategy and positioning, owns the full marketing funnel, runs performance marketing across Meta, Google, and TikTok, builds reporting founders can actually read, directs creative testing, and leads whatever team or vendors are already in place.',
  },
  {
    q: 'When should you hire a fractional CMO?',
    a: 'When you are spending real money on ads but results feel like a coin flip, when you have traction but no senior owner of growth, when you are between CMOs, or when a full-time CMO is not yet justified but freelancers and agencies are not enough. You need a system and an owner, not just more hands.',
  },
  {
    q: 'Fractional CMO vs full-time CMO — what is the difference?',
    a: 'A full-time CMO is permanent headcount: full salary, equity, benefits, and months to hire and onboard. A fractional CMO plugs in part-time on a flexible, scope-based engagement and is productive in weeks. For most startups and scaling SMBs, fractional delivers the same senior judgment at a fraction of the cost and commitment.',
  },
  {
    q: 'Does Aditya work with remote and international teams?',
    a: 'Yes. Aditya works remotely and is set up for strong working-hours overlap with US and international teams, alongside D2C and service brands across Southeast Asia.',
  },
  {
    q: 'How much does a fractional CMO cost?',
    a: 'It depends on scope and stage. Rather than a fixed rate card, Aditya works on a monthly retainer scoped to your goals — so the investment matches the mandate. The quickest way to a number is a short intro call.',
  },
  {
    q: 'How is this different from hiring an agency?',
    a: 'An agency executes tasks you brief them on. A fractional CMO owns the strategy and directs execution as your marketing leader — accountable for revenue, not deliverables. Aditya also brings a Clutch Top-100, Meta Marketing Partner team behind him, so execution ships without becoming your bottleneck.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': site.url + PATH + '#service',
      name: 'Fractional CMO & Growth Leadership',
      serviceType: 'Fractional CMO',
      url: site.url + PATH,
      description:
        'Fractional CMO and performance-marketing leadership for D2C and service brands — full-funnel growth, Meta & Google Ads, and revenue systems, delivered part-time and remote.',
      provider: { '@id': site.url + '/#aditya' },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Indonesia' },
        'Remote',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': site.url + PATH + '#faq',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url + '/' },
        { '@type': 'ListItem', position: 2, name: 'Fractional CMO', item: site.url + PATH },
      ],
    },
  ],
};

const owns = [
  ['Growth strategy & positioning', 'The plan, the ICP, the message — before a dollar is spent.'],
  ['Full-funnel performance marketing', 'Meta, Google, and TikTok Ads run as one system, not silos.'],
  ['Revenue systems & reporting', 'Numbers a founder can read, tied to pipeline and revenue.'],
  ['Creative direction & testing', 'Hooks and angles built as targeting inputs, tested in volume.'],
  ['Team & vendor leadership', 'Whoever you already have, pointed in one direction.'],
];

const triggers = [
  'You’re spending real money on ads, but results feel like a coin flip.',
  'You have traction — but no senior owner of growth.',
  'You’re between CMOs, or a full-time hire isn’t justified yet.',
  'You need a system and an owner, not another freelancer or agency.',
];

const compare = [
  ['Cost', 'A fraction of a full-time package', 'Full salary + equity + benefits'],
  ['Time to value', 'Productive in weeks', 'Months to hire and onboard'],
  ['Commitment', 'Flexible, scope-based', 'Permanent headcount'],
  ['Best for', 'Startups & SMBs scaling growth', 'Large orgs with a full mandate'],
];

function CTA({ label = 'Book an intro call' }) {
  return (
    <a
      href={CONTACT}
      className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-6 py-3 font-medium text-white transition-colors hover:bg-blue-soft"
    >
      {label} →
    </a>
  );
}

function H2({ children, id }) {
  return (
    <motion.h2
      variants={fadeUp}
      id={id}
      className="text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
    >
      {children}
    </motion.h2>
  );
}

export default function FractionalCmo() {
  return (
    <>
      <Seo
        title="Fractional CMO for Hire — Growth Leadership, Part-Time · Aditya Bayu"
        description="A fractional CMO who turns ad spend into predictable revenue. Aditya Bayu embeds in your team part-time — 300K+ leads and $10M+ revenue driven, Meta Marketing Partner, Clutch Top-100. Remote, US-hours overlap. Book an intro call."
        path={PATH}
        jsonLd={jsonLd}
      />

      <div className="wrap max-w-3xl pt-20 pb-8 sm:pt-28">
        {/* Hero */}
        <motion.header variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow">
            Fractional CMO · Remote
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl"
          >
            A fractional CMO who turns ad spend into <span className="text-cream">predictable revenue</span> — embedded in your team, part-time.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-pretty text-lg leading-relaxed text-muted">
            Aditya Indra Bayu plugs into founding and growth teams as senior marketing leadership —
            without the cost or commitment of a full-time CMO. He has driven{' '}
            <span className="text-ink">300K+ qualified leads</span> and{' '}
            <span className="text-ink">$10M+ in client revenue</span> across D2C and service brands,
            managing IDR 4B+ in ad budgets — backed by a Clutch Top-100, Meta Marketing Partner team.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <CTA />
            <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-ink">
              or email {site.email}
            </a>
          </motion.div>
        </motion.header>

        {/* What is a fractional CMO */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-4"
        >
          <H2>What is a fractional CMO?</H2>
          <motion.p variants={fadeUp} className="text-pretty text-lg leading-relaxed text-muted">
            A fractional CMO is a senior marketing leader who runs your growth part-time — setting
            strategy, owning the funnel, and directing execution — for a fraction of a full-time hire.
            You get CMO-level judgment and systems without a full-time salary, equity, or a long ramp.
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-3 flex flex-col divide-y divide-line rounded-card border border-line bg-surface/40">
            {owns.map(([t, d]) => (
              <li key={t} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="shrink-0 font-medium text-ink sm:w-64">{t}</span>
                <span className="text-sm text-muted">{d}</span>
              </li>
            ))}
          </motion.ul>
        </motion.section>

        {/* When to hire */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-4"
        >
          <H2>When should you hire a fractional CMO?</H2>
          <motion.ul variants={fadeUp} className="flex flex-col gap-3">
            {triggers.map((t) => (
              <li key={t} className="flex gap-3 text-pretty text-lg leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cream" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Fractional vs full-time */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-5"
        >
          <H2>Fractional CMO vs full-time CMO</H2>
          <motion.div variants={fadeUp} className="overflow-x-auto rounded-card border border-line">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-faint">
                  <th className="px-5 py-3 font-medium"></th>
                  <th className="px-5 py-3 font-medium text-cream">Fractional CMO</th>
                  <th className="px-5 py-3 font-medium text-muted">Full-time CMO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {compare.map(([label, frac, full]) => (
                  <tr key={label}>
                    <td className="px-5 py-4 font-medium text-ink">{label}</td>
                    <td className="px-5 py-4 text-muted">{frac}</td>
                    <td className="px-5 py-4 text-muted">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* How Aditya works */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-4"
        >
          <H2>How Aditya works</H2>
          <motion.p variants={fadeUp} className="text-pretty text-lg leading-relaxed text-muted">
            Engagements are scoped to your stage and goals — typically a monthly retainer covering
            strategy, hands-on execution oversight, and a weekly operating cadence. Remote, with strong
            overlap for US and international teams. Rather than a fixed rate card, scope and investment
            are set on a short intro call — so the mandate and the number match.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-2">
            <CTA label="Scope it on a call" />
          </motion.div>
        </motion.section>

        {/* Proof */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-5"
        >
          <H2>The receipts</H2>
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
            {[
              ['300K+', 'Qualified leads'],
              ['$10M+', 'Client revenue'],
              ['IDR 4B+', 'Ad budget managed'],
              ['Top-100', 'Clutch · Meta Partner'],
            ].map(([big, lbl]) => (
              <div key={lbl} className="bg-bg px-4 py-6 text-center">
                <div className="font-display text-2xl font-semibold tracking-tight text-ink tabular-nums">{big}</div>
                <div className="mt-1 text-xs text-muted">{lbl}</div>
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-sm text-muted">
            The full stories, with numbers, live in the{' '}
            <Link to="/blog/" className="text-cream underline-offset-4 hover:underline">case studies</Link>.
            Running Meta ads yourself? Start with the free{' '}
            <Link to="/preflight-checklist/" className="text-cream underline-offset-4 hover:underline">Meta Ads Pre-Flight Checklist</Link>.
          </motion.p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 flex flex-col gap-5"
        >
          <H2>Fractional CMO FAQ</H2>
          <motion.div variants={fadeUp} className="flex flex-col divide-y divide-line rounded-card border border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:hidden">
                  {f.q}
                  <span aria-hidden className="shrink-0 text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-pretty leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </motion.div>
        </motion.section>

        {/* Closing CTA */}
        <motion.section
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-20 rounded-card border border-line bg-surface/50 px-6 py-10 text-center"
        >
          <motion.h2 variants={fadeUp} className="text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Need senior growth leadership without a full-time CMO?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-pretty text-muted">
            Bring Aditya in for a short intro call. If it’s a fit, you’ll have an owner for growth in weeks — not months.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <CTA />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
