import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PostCover from '../components/PostCover';
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

        <motion.ol variants={stagger(0.08)} {...inView} className="grid gap-5 sm:grid-cols-2">
          {posts.map((p) => (
            <motion.li key={p.slug} variants={fadeUp}>
              <Link
                to={`/blog/${p.slug}/`}
                className="card group flex h-full flex-col overflow-hidden hover:shadow-card"
              >
                <PostCover kind={p.kind} category={p.category} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 text-micro uppercase text-muted">
                    <time dateTime={p.date}>{p.dateLabel}</time>
                  </div>
                  <h2 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted text-pretty">{p.summary}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-cream/40 px-4 py-1.5 text-sm font-medium text-cream transition-colors group-hover:bg-cream group-hover:text-bg">
                    Read <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </>
  );
}
