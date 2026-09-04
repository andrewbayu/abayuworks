import Contact from '../sections/Contact';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PostCover from '../components/PostCover';
import { OptInForm } from './PreflightChecklist';
import { posts } from '../posts';
import { site, receipts } from '../data/site';
import DalClientMarquee from '../components/DalClientMarquee';

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
      <section className="home-hero bg-grid">
        <div className="wrap py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-5">InfinitiLabs · The 90-Minute Constraint Audit</p>
            <h1 className="mx-auto max-w-5xl text-balance font-display text-4xl font-semibold leading-[1] tracking-[-.04em] sm:text-5xl lg:text-[4.2rem]">
              More marketing won&rsquo;t fix a broken growth system. Find the bottleneck first.
            </h1>
            <div className="relative mx-auto mt-10 w-full max-w-5xl">
              <div className="overflow-hidden rounded-xl border border-[#dfe4eb] bg-white p-3 shadow-sm">
              <img src="/images/home/constraint-diagnosis-doodle.png" alt="Editorial doodle showing a messy growth system being diagnosed into a clear constraint, priority, and next move" className="w-full rounded-lg" />
              </div>
              <div className="home-note absolute -bottom-8 left-4 max-w-[16rem] bg-[#1c3d73] p-5 text-left text-white shadow-xl sm:left-10">
                <p className="font-serif text-sm leading-6">One operator, one name on the result. Not a team shuffled between accounts.</p>
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-[.12em] text-[#cddcff]">Aditya Bayu · InfinitiLabs</p>
              </div>
            </div>
            <p className="mx-auto mt-16 max-w-3xl font-serif text-lg leading-8 text-muted sm:text-xl">
              You don&rsquo;t need more traffic, a prettier brand, or another agency saying &ldquo;trust us.&rdquo; You need one person to name the single thing slowing you down — and prove it before you spend another rupiah.
            </p>
            <div className="mt-9 flex justify-center gap-3">
              <Link to="/dal/" className="home-button">{DIAG_CTA} <span aria-hidden>→</span></Link>
              <a href="#fractional-cmo" className="home-button-secondary">See how it works</a>
            </div>
            <p className="mt-5 text-sm text-muted">
              Leave with one insight worth 50&times; the session — or don&rsquo;t come back. That&rsquo;s the deal.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF — early, and given meaning */}
      <DalClientMarquee />

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

      {/* DIAGNOSTIC METHOD — make the mechanism visible */}
      <section className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <figure className="home-visual order-2 overflow-hidden border border-[#dfe4eb] bg-[#fffdf8] p-2 lg:order-1">
          <img src="/images/home/constraint-audit-doodle.png" alt="Doodle diagram showing evidence becoming a named constraint, priority, and next move" className="w-full" loading="lazy" />
          <figcaption>Evidence → constraint → priority → next move.</figcaption>
        </figure>
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">The method</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">No opinions dressed up as strategy.</h2>
          <p className="mt-5 font-serif text-lg leading-8 text-muted">We start with what the business is already telling us: the offer, market, funnel, sales conversations, creative, data, and customer experience. Then we reduce the noise to one constraint the team can act on.</p>
          <p className="mt-5 font-serif leading-7 text-muted">That is what makes the next move useful. It is not a list of everything that could be improved. It is the thing that should be fixed first.</p>
        </div>
      </section>

      {/* OPERATING SYSTEM — advisory credibility without a dense process diagram */}
      <section className="home-band">
        <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">How the work compounds</p>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Strategy only matters when the system can run it.</h2>
            <p className="mt-5 max-w-xl font-serif text-lg leading-8 text-muted">The work connects the four things most teams keep in separate rooms: the offer, demand, sales, and data. The output is a better decision loop—not another strategy document waiting for a champion.</p>
          </div>
          <figure className="home-visual overflow-hidden border border-[#dfe4eb] bg-[#fffdf8] p-2">
            <img src="/images/home/operating-system-doodle.png" alt="Doodle diagram showing strategy flowing into a system and commercial outcomes, supported by offer, demand, sales, and data" className="w-full" loading="lazy" />
            <figcaption>Strategy becomes an operating system when offer, demand, sales, and data share one loop.</figcaption>
          </figure>
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

      {/* ENGAGEMENT PATH — clarify what happens after interest */}
      <section className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <figure className="home-visual overflow-hidden border border-[#dfe4eb] bg-[#fffdf8] p-2">
          <img src="/images/home/engagement-map-doodle.png" alt="Doodle decision map branching from diagnose to clarity session, growth sprint, or Fractional CMO" className="w-full" loading="lazy" />
          <figcaption>Start with clarity. Continue only when the next level is clear.</figcaption>
        </figure>
        <div>
          <p className="eyebrow mb-4">Choose the right depth</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">You do not have to buy the biggest engagement to get the right answer.</h2>
          <p className="mt-5 font-serif text-lg leading-8 text-muted">Start with the diagnostic. If the answer is clarity, stop there. If the answer is execution, build the fix in a sprint. If the business needs senior ownership, I step in as your Fractional CMO.</p>
          <Link to="/dal/" className="mt-8 inline-flex home-button">Start with the diagnostic <span aria-hidden>→</span></Link>
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
