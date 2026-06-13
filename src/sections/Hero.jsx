import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { hero } from '../data/site';
import { fadeUp, stagger, easeOut } from '../lib/motion';

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(38rem 38rem at ${x}% ${y}%, rgba(45,212,191,0.18), transparent 60%)`
  );

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <header
      onMouseMove={onMove}
      className="relative overflow-hidden bg-grid"
    >
      {/* Animated gradient mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(13,148,136,0.20), rgba(30,58,90,0.18) 40%, rgba(45,30,90,0.16) 70%, transparent)',
          backgroundSize: '220% 220%',
        }}
      />
      {/* Cursor spotlight */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      {/* Top fade for nav legibility */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg/80 to-transparent" />

      <motion.div
        variants={stagger(0.09)}
        initial="hidden"
        animate="show"
        className="wrap relative pb-20 pt-24 sm:pb-28 sm:pt-32"
      >
        <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-micro uppercase text-muted">
          {hero.kicker.map((k, i) => (
            <span key={k} className="flex items-center gap-3">
              {i > 0 && <span className="text-faint">·</span>}
              {k}
            </span>
          ))}
        </motion.div>

        <h1 className="max-w-[20ch] font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {hero.title.map((line, i) => (
            <motion.span key={i} variants={fadeUp} className="block">
              {line === 'scales ventures' ? (
                <span className="relative text-teal-bright">
                  {line}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-teal to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
                  />
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {hero.lede}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
          {hero.domains.map((d) => (
            <span key={d} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/80">
              {d}
            </span>
          ))}
        </motion.div>

        {/* Stat strip */}
        <motion.dl variants={fadeUp} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.value} className="bg-surface p-5">
              <dt className="font-display text-2xl font-semibold text-teal-bright sm:text-3xl">{s.value}</dt>
              <dd className="mt-1.5 text-xs leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </header>
  );
}
