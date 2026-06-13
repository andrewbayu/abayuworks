import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { posts } from '../posts';
import { site } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Writing · ' + site.name,
  url: site.url + '/blog/',
  description: 'Case studies and operator notes on building and scaling ventures across industries.',
  author: { '@type': 'Person', name: site.name, url: site.url + '/' },
};

export default function BlogIndex() {
  return (
    <>
      <Seo
        title={'Writing · ' + site.name}
        description="Case studies and operator notes from Aditya (Andrew) Indra Bayu, building and scaling ventures across education, maritime, agency, film, and AI products."
        path="/blog/"
        jsonLd={collectionJsonLd}
      />

      <div className="wrap pt-20 sm:pt-24">
        <motion.header variants={stagger(0.07)} initial="hidden" animate="show" className="mb-12 max-w-2xl">
          <motion.div variants={fadeUp} className="eyebrow mb-3">Writing</motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Case studies and operator notes.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-muted text-pretty">
            From building ventures across industries. Receipts, not rhetoric.
          </motion.p>
        </motion.header>

        <motion.ol variants={stagger(0.08)} {...inView} className="grid gap-5">
          {posts.map((p) => (
            <motion.li key={p.slug} variants={fadeUp}>
              <Link
                to={`/blog/${p.slug}/`}
                className="card group block p-6 hover:shadow-card sm:p-7"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3 text-micro uppercase text-muted">
                  <span>{p.kind}</span>
                  <span className="text-faint">·</span>
                  <span>{p.category}</span>
                  <span className="text-faint">·</span>
                  <time dateTime={p.date}>{p.dateLabel}</time>
                </div>
                <h2 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-teal/40 px-4 py-1.5 text-sm font-medium text-teal-bright transition-colors group-hover:bg-teal group-hover:text-bg">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </>
  );
}
