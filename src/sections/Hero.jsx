import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { hero, site } from '../data/site';
import { fadeUp, stagger, easeOut } from '../lib/motion';

const DOT_PATTERN = {
  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
};

// Faint film grain (data-URI SVG turbulence) to break up video banding and kill
// the flat "stock footage" look. Sits over the video at low opacity.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

function ProfileCard() {
  return (
    <motion.div variants={fadeUp} className="hidden shrink-0 lg:block">
      <div className="relative">
        <div
          className="card relative h-[22rem] w-60 overflow-hidden"
          style={{
            background:
              'linear-gradient(145deg, rgba(28,61,115,0.65) 0%, rgba(34,35,48,0.95) 65%, rgba(26,27,37,1) 100%)',
          }}
        >
          <div aria-hidden className="absolute inset-0" style={DOT_PATTERN} />
          <div
            aria-hidden
            className="absolute right-2 top-3 select-none font-display text-8xl font-bold leading-none text-white/[0.04]"
          >
            AIB
          </div>
          {/* Avatar */}
          <div className="absolute left-1/2 top-9 flex -translate-x-1/2 flex-col items-center">
            <div className="h-28 w-28 overflow-hidden rounded-full border border-white/15 shadow-card">
              <img
                src="/aditya-bayu.webp"
                alt="Aditya Indra Bayu"
                width="112"
                height="112"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 font-display text-sm font-semibold text-ink">{site.name}</div>
            <div className="mt-1 text-xs text-muted">{site.role}</div>
          </div>
          {/* Bottom strip */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-line bg-surface/70 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{site.location}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-cream" />
                Open
              </span>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="card absolute -left-6 bottom-20 flex items-center gap-2 px-3 py-2 text-xs shadow-card">
          <span className="font-display font-semibold text-cream">10</span>
          <span className="text-muted">ventures</span>
        </div>
        <div className="card absolute -right-5 top-10 flex items-center gap-2 px-3 py-2 text-xs shadow-card">
          <span className="font-display font-semibold text-cream">Rp156B</span>
          <span className="text-muted">milestone</span>
        </div>
      </div>
    </motion.div>
  );
}

// Video background with scroll + mouse parallax. Mounts only on wide viewports
// with motion allowed, so phones, reduced-motion users, and JS-off crawlers get
// the gradient fallback underneath instead of a 3.8MB download. The element is
// oversized (140%) so neither parallax shift nor the zoom ever reveals an edge.
function VideoBackdrop({ scrollY, scale, mouseX, mouseY }) {
  const [ready, setReady] = useState(false);

  return (
    <motion.div
      aria-hidden
      style={{ y: scrollY, scale, willChange: 'transform' }}
      className="pointer-events-none absolute inset-0"
    >
      <motion.div style={{ x: mouseX, y: mouseY, willChange: 'transform' }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          onCanPlay={() => setReady(true)}
          className={`absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-[1400ms] ease-out ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const headerRef = useRef(null);
  const [enableVideo, setEnableVideo] = useState(false);

  // Mouse spotlight + mouse parallax share one source of truth.
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(38rem 38rem at ${x}% ${y}%, rgba(61,107,176,0.20), transparent 60%)`
  );
  // Mouse parallax for the video: cursor 0–100% maps to a gentle ±18px / ±12px drift.
  const videoMouseX = useTransform(sx, [0, 100], [18, -18]);
  const videoMouseY = useTransform(sy, [0, 100], [12, -12]);

  // Scroll parallax: video sinks and zooms slightly as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start start', 'end start'] });
  const videoScrollY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);

  useEffect(() => {
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 1024px)').matches;
    setEnableVideo(motionOk && wide);
  }, []);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <header ref={headerRef} onMouseMove={onMove} className="relative overflow-hidden bg-grid">
      {/* Animated gradient mesh — the fallback floor (shown when video is absent) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(28,61,115,0.55), rgba(28,61,115,0.22) 42%, rgba(255,232,212,0.06) 72%, transparent)',
          backgroundSize: '220% 220%',
        }}
      />

      {/* Video backdrop (desktop + motion only), layered above the gradient floor */}
      {enableVideo && (
        <VideoBackdrop
          scrollY={videoScrollY}
          scale={videoScale}
          mouseX={videoMouseX}
          mouseY={videoMouseY}
        />
      )}

      {/* Legibility scrim: navy, weighted toward the left where the copy sits */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(102deg, rgba(26,27,37,0.94) 0%, rgba(26,27,37,0.82) 34%, rgba(26,27,37,0.5) 62%, rgba(26,27,37,0.66) 100%)',
        }}
      />
      {/* Bottom fade into the page so the stat strip + section seam stay clean */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, #1A1B25)' }}
      />
      {/* Film grain over the video to break banding */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
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
        <div className="flex items-start gap-16">
          {/* Left: text */}
          <div className="min-w-0 flex-1">
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
                    <span className="relative text-cream">
                      {line}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-cream to-transparent"
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

            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              {hero.lede}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-card bg-blue px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-soft"
              >
                Start a conversation <span aria-hidden>→</span>
              </a>
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-card border border-line px-5 py-2.5 font-medium text-ink transition-colors hover:border-cream/50"
              >
                See the work
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {hero.domains.map((d) => (
                <span key={d} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/80">
                  {d}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: profile card — desktop only */}
          <ProfileCard />
        </div>

        {/* Stat strip — full width */}
        <motion.dl variants={fadeUp} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.value} className="bg-surface p-5">
              <dt className="font-display text-2xl font-semibold text-cream sm:text-3xl">{s.value}</dt>
              <dd className="mt-1.5 text-xs leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </header>
  );
}
