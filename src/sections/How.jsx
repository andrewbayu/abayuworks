import { motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { how } from '../data/site';
import { fadeUp, stagger, inView } from '../lib/motion';

export default function How() {
  return (
    <Section id="how">
      <SectionHead eyebrow="Approach" title="How he works." />
      <motion.div variants={stagger(0.1)} {...inView} className="grid gap-6 lg:grid-cols-2">
        {how.map((p, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className={`text-pretty ${i === 0 ? 'text-xl leading-relaxed text-ink' : 'leading-relaxed text-muted'}`}
          >
            {p}
          </motion.p>
        ))}
      </motion.div>
    </Section>
  );
}
