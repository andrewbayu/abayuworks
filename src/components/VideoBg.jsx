import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Fixed full-viewport animated backdrop for the /links page. Content scrolls
// over it. The same cinematic clip as the homepage hero. Loads on any viewport
// when motion is allowed (this page is mostly viewed on phones, and the clip is
// ~1MB); falls back to the drifting gradient under prefers-reduced-motion and
// before hydration, so there's never a blank or broken background.

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export default function VideoBg() {
  const [enable, setEnable] = useState(false);
  const [ready, setReady] = useState(false);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 50, damping: 22 });
  const sy = useSpring(my, { stiffness: 50, damping: 22 });
  const x = useTransform(sx, [0, 100], [16, -16]);
  const y = useTransform(sy, [0, 100], [12, -12]);

  useEffect(() => {
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnable(motionOk);
    if (!motionOk) return undefined;
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gradient floor — the fallback when no video */}
      <div
        className="absolute inset-0 animate-drift opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(125deg, rgba(28,61,115,0.55), rgba(28,61,115,0.22) 42%, rgba(255,232,212,0.06) 72%, transparent)',
          backgroundSize: '220% 220%',
        }}
      />

      {enable && (
        <motion.div style={{ x, y, willChange: 'transform' }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
            onCanPlay={() => setReady(true)}
            className={`absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-[1400ms] ease-out ${
              ready ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Scrim — keeps the centered column legible over the footage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 75% at 50% 0%, rgba(26,27,37,0.74), rgba(26,27,37,0.9) 68%, #1A1B25 100%)',
        }}
      />
      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    </div>
  );
}
