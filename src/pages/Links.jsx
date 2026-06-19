import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ResourceCarousel from '../components/ResourceCarousel';
import CaseStudyCarousel from '../components/CaseStudyCarousel';
import VideoBg from '../components/VideoBg';
import { site, linkPage } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    url: site.url + '/',
    image: site.url + '/aditya-bayu.webp',
    sameAs: site.socials.map((s) => s.href),
  },
};

function LinkButton({ label, sub, href, tag, external }) {
  const inner = (
    <>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate font-display text-base font-semibold text-ink">{label}</span>
          {tag && (
            <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-cream">
              {tag}
            </span>
          )}
        </div>
        {sub && <p className="mt-0.5 text-sm leading-snug text-muted">{sub}</p>}
      </div>
      <span className="shrink-0 text-cream transition-transform group-hover:translate-x-1" aria-hidden>
        {external ? '↗' : '→'}
      </span>
    </>
  );

  const cls =
    'card group flex items-center justify-between gap-3 p-4 transition-all hover:-translate-y-0.5 hover:shadow-card';

  if (external) {
    return (
      <motion.a variants={fadeUp} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.div variants={fadeUp}>
      <Link to={href} className={cls}>{inner}</Link>
    </motion.div>
  );
}

export default function Links() {
  return (
    <>
      <Seo
        title={`${site.name} · Links`}
        description={`${linkPage.tagline}. ${site.name} builds and scales companies across education, maritime, agency, film, and AI. Find his products, writing, and how to work with him.`}
        path="/links/"
        type="profile"
        jsonLd={jsonLd}
      />

      <main className="relative min-h-screen overflow-hidden">
        {/* Animated video backdrop (same clip as the homepage hero) */}
        <VideoBg />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pb-12 pt-16 sm:pt-20"
        >
          {/* Identity */}
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="h-28 w-28 overflow-hidden rounded-full border border-white/15 shadow-card">
              <img
                src="/aditya-bayu.webp"
                alt={site.name}
                width="112"
                height="112"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">{site.name}</h1>
            <p className="mt-1.5 text-micro uppercase tracking-wide text-cream">{linkPage.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">{linkPage.intro}</p>
          </motion.div>

          {/* Primary CTA */}
          <motion.a
            variants={fadeUp}
            href={linkPage.cta.href}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-card bg-blue px-5 py-3.5 font-medium text-white transition-colors hover:bg-blue-soft"
          >
            {linkPage.cta.label} <span aria-hidden>→</span>
          </motion.a>

          {/* Lead-magnet carousel */}
          <ResourceCarousel />

          {/* Case studies carousel */}
          <CaseStudyCarousel />

          {/* Link buttons */}
          <motion.nav variants={stagger(0.06)} className="mt-4 flex flex-col gap-3" aria-label="Links">
            {linkPage.links.map((l) => (
              <LinkButton key={l.label} {...l} />
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div variants={fadeUp} className="mt-auto pt-10 text-center">
            <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-ink">
              {site.email}
            </a>
            <div className="mt-3">
              <Link to="/" className="text-xs text-faint transition-colors hover:text-cream">
                View full portfolio · adityabayu.com
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
