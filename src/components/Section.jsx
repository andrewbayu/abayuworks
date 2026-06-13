import { motion } from 'framer-motion';
import { fadeUp, stagger, inView } from '../lib/motion';

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`wrap scroll-mt-24 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <motion.div variants={stagger(0.06)} {...inView} className="mb-10 border-b border-line pb-6">
      {eyebrow && (
        <motion.div variants={fadeUp} className="eyebrow mb-3">
          {eyebrow}
        </motion.div>
      )}
      <motion.h2 variants={fadeUp} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </motion.h2>
      {intro && (
        <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-muted text-pretty">
          {intro}
        </motion.p>
      )}
    </motion.div>
  );
}
