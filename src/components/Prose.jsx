import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, inView } from '../lib/motion';

// Shared building blocks for blog post bodies. Dark premium styling.

export function Prose({ children }) {
  return (
    <div className="prose-body w-full">
      {children}
    </div>
  );
}

export function H2({ children }) {
  return <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight">{children}</h2>;
}
export function H3({ children }) {
  return <h3 className="mt-8 font-display text-lg font-semibold">{children}</h3>;
}
export function P({ children, muted }) {
  return <p className={`mt-4 font-serif leading-relaxed text-pretty ${muted ? 'text-muted' : 'text-ink/85'}`}>{children}</p>;
}
export function UL({ children }) {
  return <ul className="mt-4 grid gap-2.5 pl-1">{children}</ul>;
}
export function LI({ children }) {
  return (
    <li className="relative pl-5 font-serif leading-relaxed text-ink/85">
      <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-cream" aria-hidden />
      {children}
    </li>
  );
}

export function FigureGrid({ items }) {
  return (
    <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
      {items.map((f) => (
        <div key={f.l} className="bg-surface p-5">
          <div className="font-display text-2xl font-semibold text-cream">{f.n}</div>
                    <div className="mt-1 font-serif text-xs leading-snug text-muted">{f.l}</div>
        </div>
      ))}
    </div>
  );
}

export function Pull({ children }) {
  return (
    <blockquote className="mt-8 border-l-2 border-cream pl-5 font-serif text-xl leading-snug text-ink">
      {children}
    </blockquote>
  );
}

export function Tags({ items }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
          {t}
        </span>
      ))}
    </div>
  );
}

export function Disclaimer({ children }) {
  return (
    <>
      <hr className="mt-12 border-line" />
      <p className="mt-5 font-serif text-sm leading-relaxed text-muted">{children}</p>
    </>
  );
}

export function Src({ children }) {
  return <span className="font-medium text-ink">{children}</span>;
}

export function ConstraintCallout({
  badge = 'Diagnosing Your Revenue Constraint',
  title = 'Where is your growth engine leaking margin?',
  children = 'Most brands spend on creative hooks while their commercial checkpoints leak margin. In the 90-minute Constraint Audit, we isolate the exact bottleneck between demand, sales signals, and capacity before you spend another rupiah.',
  ctaText = 'Apply for a growth diagnostic',
  ctaLink = '/dal/',
}) {
  return (
    <div className="my-10 overflow-hidden rounded-card border border-[#dfe4eb] bg-[#f8fafc] p-6 shadow-sm sm:p-7">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#1C3D73]" aria-hidden="true" />
        <span className="font-display text-micro font-bold uppercase tracking-wider text-[#1C3D73]">{badge}</span>
      </div>
      <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2.5 font-serif text-sm leading-relaxed text-[#44474f]">{children}</p>
      <div className="mt-5">
        <Link
          to={ctaLink}
          style={{ color: '#ffffff' }}
          className="!text-white inline-flex items-center gap-2 rounded-card bg-[#1C3D73] px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#2A5499]"
        >
          {ctaText} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

// Animated wrapper for a post header block.
export function Reveal({ children, className = '' }) {
  return (
    <motion.div variants={fadeUp} {...inView} className={className}>
      {children}
    </motion.div>
  );
}
