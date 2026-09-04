import Contact from '../sections/Contact';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PostCover from '../components/PostCover';
import { OptInForm } from './PreflightChecklist';
import { posts } from '../posts';
import { site, receipts } from '../data/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: ['Andrew Bayu', 'Aditya Bayu'],
  url: site.url + '/',
  image: site.url + '/og-image.png',
  jobTitle: 'Venture Builder, Fractional CMO',
  email: 'mailto:' + site.email,
  address: { '@type': 'PostalAddress', addressLocality: 'South Tangerang', addressCountry: 'ID' },
  sameAs: site.socials.map((s) => s.href),
};

// Single front door: the growth diagnostic. Direct interested visitors to the
// DAL explainer page first, where they can apply from inside that flow.
const DIAG_CTA = 'Apply for a growth diagnostic';

export default function Home() {
  const latest = posts.slice(0, 3);
  return (
    <div className="home-light">
      <Seo
        title="Aditya Indra Bayu · Fractional CMO · InfinitiLabs Growth Studio"
        description="Aditya Indra Bayu is a Fractional CMO who runs InfinitiLabs. Book a free 90-minute Constraint Audit and learn exactly which bottleneck is holding your revenue back."
        path="/"
        type="profile"
        jsonLd={personJsonLd}
      />

      {/* HERO — the problem, not the title */}
      <section className="home-hero home-hero-navy">
        <div className="wrap grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow mb-5">InfinitiLabs · The 90-Minute Constraint Audit</p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.8rem]">
              Your marketing isn&rsquo;t the problem. The bottleneck you haven&rsquo;t found yet is.
            </h1>
            <p className="mt-7 max-w-2xl font-serif text-lg leading-8 text-muted sm:text-xl">
              You don&rsquo;t need more traffic, a prettier brand, or another agency saying &ldquo;trust us.&rdquo; You need one person to name the single thing slowing you down — and prove it before you spend another rupiah.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/dal/" className="home-button">{DIAG_CTA} <span aria-hidden>→</span></Link>
              <a href="#fractional-cmo" className="home-button-secondary">See how it works</a>
            </div>
            <p className="mt-5 text-sm text-muted">
              Leave with one insight worth 50&times; the session — or don&rsquo;t come back. That&rsquo;s the deal.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="home-portrait overflow-hidden border border-[#dfe4eb] bg-[#f5f6f8]">
              <img src="/aditya-bayu.webp" alt="Aditya Indra Bayu, Fractional CMO" className="h-full w-full object-cover" />
            </div>
            <div className="home-note absolute -bottom-6 -left-5 max-w-[16rem] bg-[#1c3d73] p-5 text-white shadow-xl sm:-left-10">
              <p className="font-serif text-sm leading-6">One operator, one name on the result. Not a team shuffled between accounts.</p>
              <p className="mt-3 font-display text-xs font-bold uppercase tracking-[.12em] text-[#cddcff]">Aditya Bayu · InfinitiLabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF — early, and given meaning */}
      <section className="wrap py-10 sm:py-14">
        <div className="grid gap-6 border-y border-[#dfe4eb] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div><strong className="home-stat">Rp156B</strong><p>all-time revenue high at Wall Street English Indonesia</p></div>
          <div><strong className="home-stat">+200%</strong><p>registration growth at Hacktiv8</p></div>
          <div><strong className="home-stat">300+</strong><p>businesses scaled through the InfinitiLabs studio</p></div>
          <div><strong className="home-stat">One seat</strong><p>no handoffs across strategy, sales, and execution</p></div>
        </div>
      </section>

      {/* AGITATION — make the leak feel expensive */}
      <section className="wrap py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Does this sound like you</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Three signs your growth is quietly leaking money.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['You\u2019re spending, not compounding', 'Budget goes up, pipeline stays flat. New creative, new channels, same ceiling — because no one has named what\u2019s actually capped.'],
            ['Nobody owns the number', 'Three vendors, six dashboards, zero people accountable for revenue. Marketing reports activity; nobody reports results.'],
            ['You guess, then you pray', 'A new funnel, a rebrand, a bigger budget — and hope it lands. That\u2019s not strategy, that\u2019s a slot machine with your margin in it.'],
          ].map(([title, body]) => (
            <article key={title} className="home-card"><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      {/* SOLUTION — the named, concrete deliverable */}
      <section id="fractional-cmo" className="home-band scroll-mt-24">
        <div className="wrap py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The fix</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">The 90-Minute Constraint Audit.</h2>
            <p className="mt-5 font-serif text-lg leading-8 text-muted">One session, one operator, and the studio behind him. You walk out knowing exactly which bottleneck — positioning, offer, channel, funnel, follow-up, or measurement — is holding your revenue back. Before you approve another rupiah of spend.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Name the constraint', 'We isolate the single bottleneck that matters most — the one that, fixed, moves everything else.'],
              ['Build the system', 'Turn that into an operating model your team can actually run, not a deck they bookmark.'],
              ['Stay close to outcomes', 'Marketing gets wired to qualified pipeline, sales reality, and margin — the numbers that compound.'],
            ].map(([title, body]) => <article key={title} className="home-card"><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <p className="mt-10 max-w-2xl font-serif text-lg leading-8 text-muted">Engagements line up behind the same gate: start with the audit, escalate to a sprint or a seat. LaunchBox AI and LeadGen Kit are the studio&rsquo;s ready-made sprints for AI-driven launches and lead capture.</p>
          <Link to="/dal/" className="mt-8 inline-flex home-button">{DIAG_CTA} <span aria-hidden>→</span></Link>
        </div>
      </section>

      {/* PROOF DEEP — receipts with meaning */}
      <section className="wrap py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#dfe4eb] pb-6">
          <div>
            <p className="eyebrow mb-3">The receipts</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">Proven by operators, not by advisors.</h2>
            <p className="mt-4 max-w-2xl font-serif leading-7 text-muted">These aren&rsquo;t vanity metrics. They&rsquo;re what happened when the constraint got named and fixed from the operating seat — across agency, education, maritime, film, and AI.</p>
          </div>
          <Link to="/receipts/" className="font-display font-bold text-[#1c3d73]">See all the receipts →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#dfe4eb] bg-[#dfe4eb] sm:grid-cols-4">
          {receipts.slice(0, 4).map((r) => (
            <div key={r.src} className="bg-white p-5">
              <strong className="font-display text-2xl font-semibold text-[#1c3d73]">{r.value}</strong>
              <p className="mt-2 text-sm leading-5 text-muted">{r.src}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD MAGNET — the cheap escalation */}
      <section className="home-resource-band">
        <div className="wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="eyebrow mb-4">Free field guide</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Before you spend on Meta ads, check the system.</h2><p className="mt-5 max-w-xl font-serif leading-7 text-muted">Get the same 5-point pre-flight gate we use to catch wasted budget before launch.</p></div>
          <div className="home-optin"><OptInForm id="homepage-preflight" cta="Send me the checklist" /></div>
        </div>
      </section>

      {/* WRITING — pushed down, not the point */}
      <section className="wrap py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#dfe4eb] pb-6"><div><p className="eyebrow mb-3">Latest writing</p><h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Notes from the operating seat.</h2></div><Link to="/blog/" className="font-display font-bold text-[#1c3d73]">View all writing →</Link></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{latest.map((p) => <Link key={p.slug} to={`/blog/${p.slug}/`} className="home-card group overflow-hidden p-0"><PostCover kind={p.kind} category={p.category} img={p.img} /><div className="p-5"><p className="text-xs uppercase tracking-[.12em] text-muted">{p.dateLabel}</p><h3 className="mt-3 text-xl">{p.title}</h3><p className="mt-3 font-serif text-sm leading-6 text-muted">{p.summary}</p><span className="mt-5 inline-block font-display text-sm font-bold text-[#1c3d73]">Read the note →</span></div></Link>)}</div>
      </section>

      {/* FINAL RISK-REVERSAL CTA */}
      <section className="home-dark-section">
        <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">The offer</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">90 minutes. Free. No pitch, no walk-aways.</h2>
            <p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-white/70">If you&rsquo;re a fit and we don&rsquo;t find a leak worth acting on, that&rsquo;s on us — and you keep the audit. Book it now and find out exactly what&rsquo;s costing you.</p>
            <Link to="/dal/" className="home-button mt-8">{DIAG_CTA} <span aria-hidden>→</span></Link>
          </div>
          <div className="border border-white/15 p-6">
            <p className="font-display text-sm font-bold uppercase tracking-[.12em] text-white/60">What you leave with</p>
            <p className="mt-5 font-serif text-2xl leading-9 text-white">One named constraint, the evidence behind it, and the three moves worth making next — whether or not you ever work with us again.</p>
          </div>
        </div>
      </section>

      <Contact />

      {/* STICKY CTA — always one action available */}
      <Link
        to="/dal/"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1c3d73] px-5 py-3 font-display font-bold text-white shadow-2xl transition-colors hover:bg-[#2a5499]"
      >
        {DIAG_CTA} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}