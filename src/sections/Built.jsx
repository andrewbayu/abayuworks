import { motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { tools } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

export default function Built() {
  return (
    <Section id="built">
      <SectionHead
        eyebrow="Built"
        title="Tools and frameworks."
        intro="One person can't run ten ventures by hand. AI copilots, ads engines, content systems, and proprietary frameworks. The same tooling runs across the entire portfolio."
      />
      <motion.div variants={stagger(0.04)} {...inView} className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <motion.div key={t.name} variants={fadeUp} className="card p-5">
            <div className="eyebrow mb-2">{t.kind}</div>
            <div className="font-display text-lg font-semibold">{t.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t.note}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
