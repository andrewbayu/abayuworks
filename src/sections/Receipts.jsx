import { motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { receipts } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

export default function Receipts() {
  return (
    <Section id="receipts">
      <SectionHead
        eyebrow="Receipts"
        title="Receipts, not rhetoric."
        intro="Delivered and contributed outcomes across the portfolio. Reported figures reflect contributions to team outcomes during the engagements described, not sole-authored results."
      />
      <motion.div variants={stagger(0.06)} {...inView} className="grid gap-4 sm:grid-cols-2">
        {receipts.map((r) => (
          <motion.div key={r.src + r.value} variants={fadeUp} className="card p-6">
            <div className="font-display text-3xl font-semibold text-cream">{r.value}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              <span className="font-medium text-ink">{r.src}.</span> {r.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
