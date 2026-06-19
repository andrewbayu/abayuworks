import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredCaseStudies } from '../data/site';
import { fadeUp } from '../lib/motion';
import CardImage from './CardImage';

// Featured-image + title cards linking to the full case studies. Content is kept
// in site.js (not imported from posts/) so the /links bundle stays lean.
const cardCls = 'card group flex h-full w-64 shrink-0 snap-start flex-col overflow-hidden transition-colors';

export default function CaseStudyCarousel() {
  if (!featuredCaseStudies.length) return null;
  return (
    <motion.section variants={fadeUp} aria-labelledby="cases-heading" className="mt-8">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="cases-heading" className="text-micro uppercase tracking-wide text-muted">
          Case studies and notes
        </h2>
        <Link to="/blog/" className="text-micro uppercase tracking-wide text-cream/80 transition-colors hover:text-cream">
          All →
        </Link>
      </div>
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-5 pb-1">
        {featuredCaseStudies.map((c) => (
          <Link key={c.slug} to={`/blog/${c.slug}/`} className={cardCls}>
            <CardImage src={c.image} alt={c.title} kind={c.kind} />
            <div className="flex flex-1 flex-col p-5">
              <span className="text-[0.62rem] uppercase tracking-wide text-cream/70">{c.category}</span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">{c.title}</h3>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-cream">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
