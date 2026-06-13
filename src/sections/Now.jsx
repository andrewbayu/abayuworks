import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { now } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

export default function Now() {
  return (
    <Section id="now">
      <motion.div variants={fadeUp} {...inView} className="mb-8 flex items-center gap-3 text-micro uppercase text-muted">
        <span className="h-2 w-2 animate-pulseDot rounded-full bg-cream" />
        Now · Active operating commitments
      </motion.div>

      <motion.div variants={stagger(0.07)} {...inView} className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {now.map((c) => (
          <motion.article
            key={c.org}
            variants={fadeUp}
            className={`group relative bg-surface p-6 transition-colors hover:bg-elevated ${c.cta ? 'ring-1 ring-inset ring-blue/50' : ''}`}
          >
            <div className="mb-3 text-sm font-medium text-cream">{c.role}</div>
            <div className="mb-2 font-display text-lg font-semibold leading-snug">{c.org}</div>
            <p className="text-sm leading-relaxed text-muted">{c.note}</p>
            {c.cta && (
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cream transition-colors hover:text-cream">
                Get in touch <span aria-hidden>→</span>
              </a>
            )}
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
