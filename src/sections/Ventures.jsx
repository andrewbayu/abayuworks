import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section, SectionHead } from '../components/Section';
import { ventures } from '../data/site';
import { fadeUp, stagger, inView, easeOut } from '../lib/motion';

function Row({ v, open, onToggle }) {
  return (
    <motion.div variants={fadeUp} className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="font-display text-lg font-semibold leading-tight">{v.name}</div>
          <div className="mt-0.5 truncate text-sm text-muted">{v.role}</div>
        </div>
        <span className="hidden shrink-0 rounded-full border border-line px-2.5 py-1 text-xs text-muted sm:block">
          {v.tag}
        </span>
        <span className={`shrink-0 text-teal transition-transform duration-300 ${open ? 'rotate-90' : ''}`} aria-hidden>
          →
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">{v.scope}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Ventures() {
  const [openIdx, setOpenIdx] = useState(0);
  const [allOpen, setAllOpen] = useState(false);

  const isOpen = (i) => allOpen || openIdx === i;

  return (
    <Section id="ventures">
      <SectionHead
        eyebrow="Portfolio"
        title="The venture portfolio."
        intro="Ten ventures across agency, education, maritime, film, and AI. Title, role, and what the venture actually is. Open any row."
      />

      <div className="mb-5 flex gap-2 text-xs">
        <button
          onClick={() => { setAllOpen(true); }}
          className="rounded-card border border-line px-3 py-1.5 text-muted transition-colors hover:border-teal/40 hover:text-ink"
        >
          Expand all
        </button>
        <button
          onClick={() => { setAllOpen(false); setOpenIdx(-1); }}
          className="rounded-card border border-line px-3 py-1.5 text-muted transition-colors hover:border-teal/40 hover:text-ink"
        >
          Collapse all
        </button>
      </div>

      <motion.div variants={stagger(0.05)} {...inView} className="grid gap-3">
        {ventures.map((v, i) => (
          <Row
            key={v.name}
            v={v}
            open={isOpen(i)}
            onToggle={() => { setAllOpen(false); setOpenIdx(isOpen(i) ? -1 : i); }}
          />
        ))}
      </motion.div>
    </Section>
  );
}
