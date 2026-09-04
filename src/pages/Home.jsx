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

export default function Home() {
  const latest = posts.slice(0, 3);
  return (
    <div className="home-light">
      <Seo
        title="Aditya Indra Bayu · Fractional CMO · InfinitiLabs Growth Studio"
        description="Aditya Indra Bayu is a Fractional CMO and venture builder who leads InfinitiLabs, a boutique growth studio that works backward from your commercial constraint to turn attention into revenue."
        path="/"
        type="profile"
        jsonLd={personJsonLd}
      />
      <section className="home-hero bg-grid">
        <div className="wrap grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow mb-5">Principal-led growth studio · Indonesia &amp; SEA</p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.8rem]">
              Fractional CMO. InfinitiLabs behind it. One operator accountable.
            </h1>
            <p className="mt-7 max-w-2xl font-serif text-lg leading-8 text-muted sm:text-xl">
              Aditya Indra Bayu leads InfinitiLabs, a boutique growth studio that works backward from your commercial constraint. You get the thinking of a full team, delivered by a single accountable operator at its center.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/dal-apply/" className="home-button">Apply for a growth diagnostic <span aria-hidden>→</span></Link>
              <a href="#fractional-cmo" className="home-button-secondary">See how I work</a>
            </div>
            <p className="mt-5 text-sm text-muted">For founders and leadership teams who need clarity before more spend.</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="home-portrait overflow-hidden border border-[#dfe4eb] bg-[#f5f6f8]">
              <img src="/aditya-bayu.webp" alt="Aditya Indra Bayu, Fractional CMO" className="h-full w-full object-cover" />
            </div>
            <div className="home-note absolute -bottom-6 -left-5 max-w-[16rem] bg-[#1c3d73] p-5 text-white shadow-xl sm:-left-10">
              <p className="font-serif text-sm leading-6">“The job is not to make marketing look busy. It is to make the path to growth make sense.”</p>
              <p className="mt-3 font-display text-xs font-bold uppercase tracking-[.12em] text-[#cddcff]">Aditya Bayu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-10 border-y border-[#dfe4eb] py-10 sm:grid-cols-3 sm:gap-8">
          <div><strong className="home-stat">10+</strong><p>ventures operated across multiple industries</p></div>
          <div><strong className="home-stat">300+</strong><p>businesses served through the InfinitiLabs studio</p></div>
          <div><strong className="home-stat">One seat</strong><p>no handoffs across strategy, marketing, sales, and execution</p></div>
        </div>
      </section>

      <section id="fractional-cmo" className="wrap scroll-mt-24 py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">The Fractional CMO role, studio-delivered</p>
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">A senior growth operator, without the full-time overhead.</h2>
          <p className="mt-5 font-serif text-lg leading-8 text-muted">You get the thinking of a CMO, the bias toward shipping of an operator, and the InfinitiLabs studio behind both. We work from the commercial constraint backwards: what must be true for the business to acquire, convert, and retain better customers?</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['The Constraint Method', 'Positioning, offer, channel, funnel, follow-up, or measurement—the bottleneck gets named before tactics get approved. It is how every engagement starts.'],
            ['Build the system', 'The strategy becomes an operating model your team can understand, execute, and improve.'],
            ['Stay close to outcomes', 'Marketing is connected to qualified pipeline, sales reality, margin, and the decisions that compound.'],
          ].map(([title, body]) => <article key={title} className="home-card"><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section id="engagements" className="home-band scroll-mt-24">
        <div className="wrap py-16 sm:py-20">
          <p className="eyebrow mb-4">The engagement ladder</p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Start with a diagnostic. Scale to a seat.</h2>
          <p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-muted">Three ways in, same method, matched to how much of the problem you want solved. LaunchBox AI and LeadGen Kit are the studio's ready-made sprints for AI-driven launches and lead capture.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Growth Diagnostic', '1–1.5 hrs · Free', 'A structured session that names the constraint holding growth back—the gate into every engagement.'],
              ['Growth Sprint', '3–6 weeks · Project', 'One constraint, attacked end to end. LaunchBox AI and LeadGen Kit ship here as fixed-scope studio sprints.'],
              ['Fractional CMO retainer', '3–6 months · One seat', 'A senior operator embedded in the business, reporting on the decisions that compound. The full studio in support.'],
            ].map(([title, tag, body]) => (
              <article key={title} className="home-card"><p className="font-display text-xs font-bold uppercase tracking-[.12em] text-[#1c3d73]">{tag}</p><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-resource-band">
        <div className="wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="eyebrow mb-4">Free field guide</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Before you spend on Meta ads, check the system.</h2><p className="mt-5 max-w-xl font-serif leading-7 text-muted">Get the 5-point Meta Ads Pre-Flight Checklist—the same gate used to catch wasted budget before launch.</p></div>
          <div className="home-optin"><OptInForm id="homepage-preflight" cta="Send me the checklist" /></div>
        </div>
      </section>

      <section className="home-band">
        <div className="wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow mb-4">Receipts</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Built inside the machine.</h2><p className="mt-5 max-w-lg font-serif leading-7 text-muted">The perspective comes from running InfinitiLabs and operating across agency, education, maritime, film, and AI—not from advising at a distance.</p><Link to="/receipts/" className="mt-6 inline-flex font-display font-bold text-[#1c3d73]">See the receipts →</Link></div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#dfe4eb] bg-[#dfe4eb] sm:grid-cols-4">{receipts.slice(0, 4).map((r) => <div key={r.src} className="bg-white p-5"><strong className="font-display text-2xl font-semibold text-[#1c3d73]">{r.value}</strong><p className="mt-2 text-sm leading-5 text-muted">{r.src}</p></div>)}</div>
        </div>
      </section>

      <section className="wrap py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#dfe4eb] pb-6"><div><p className="eyebrow mb-3">Latest writing</p><h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Notes from the operating seat.</h2></div><Link to="/blog/" className="font-display font-bold text-[#1c3d73]">View all writing →</Link></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{latest.map((p) => <Link key={p.slug} to={`/blog/${p.slug}/`} className="home-card group overflow-hidden p-0"><PostCover kind={p.kind} category={p.category} img={p.img} /><div className="p-5"><p className="text-xs uppercase tracking-[.12em] text-muted">{p.dateLabel}</p><h3 className="mt-3 text-xl">{p.title}</h3><p className="mt-3 font-serif text-sm leading-6 text-muted">{p.summary}</p><span className="mt-5 inline-block font-display text-sm font-bold text-[#1c3d73]">Read the note →</span></div></Link>)}</div>
      </section>

      <section className="home-dark-section">
        <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="eyebrow mb-4">Digital Advantage Lab</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Before you spend more, find the leak.</h2><p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-white/70">A two-session diagnostic that tells you what level your business is operating at, what is holding back growth, and the three moves worth making next.</p><Link to="/dal/" className="home-button mt-8">See how DAL works <span aria-hidden>→</span></Link></div><div className="border border-white/15 p-6"><p className="font-display text-sm font-bold uppercase tracking-[.12em] text-white/60">What you leave with</p><p className="mt-5 font-serif text-2xl leading-9 text-white">A 10-page audit and actionable report—so the next growth decision is based on evidence, not noise.</p><Link to="/dal-apply/" className="mt-6 inline-flex font-display font-bold text-[#ffe8d4]">Apply for the next slot →</Link></div></div>
      </section>
      <Contact />
    </div>
  );
}