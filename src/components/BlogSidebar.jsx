import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export function DesktopStickyRail() {
  return (
    <div className="sticky top-28 space-y-4">
      {/* 1. Author Profile Card */}
      <div className="rounded-card border border-[#dfe4eb] bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src="/aditya-bayu.webp"
            alt="Aditya Indra Bayu"
            width="44"
            height="44"
            className="h-11 w-11 rounded-full border border-white object-cover shadow-sm"
            loading="lazy"
          />
          <div>
            <div className="font-display text-sm font-semibold text-ink">Aditya Indra Bayu</div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1C3D73]">
              Fractional CMO · InfinitiLabs
            </div>
          </div>
        </div>
      </div>

      {/* 2. Top Offer: Premium Field Guide (Meta Ads Pre-Flight Checklist) */}
      <div className="overflow-hidden rounded-card border border-[#dfe4eb] bg-[#f8fafc] p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8D4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1C3D73] border border-[#1C3D73]/15">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            FIELD GUIDE · EBOOK
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-sm font-bold text-ink">Rp49.000</span>
            <span className="text-[11px] text-faint line-through">Rp129.000</span>
          </div>
        </div>
        
        {/* Direct raw mockup image - no background, no border container */}
        <div className="mt-2 text-center">
          <a
            href="https://lynk.id/growthlab/k3ryx868xg2r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <img
              src="https://storage.googleapis.com/bluestark_explorer/infinitiworks/Preflight-checklist-mockup.png"
              alt="Meta Ads Pre-Flight Checklist Mockup"
              width="600"
              height="340"
              loading="lazy"
              className="mx-auto w-full max-w-[210px] h-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        <h4 className="mt-2.5 font-display text-[15px] font-bold leading-snug text-ink">
          Stop Bleeding Ad Spend on Broken Signals.
        </h4>
        <p className="mt-1 font-serif text-xs leading-relaxed text-[#44474f]">
          Meta's AI decides who sees your ads. Don't let it guess with your budget. Grab the battle-tested 5-point gate to catch costly tracking leaks and offer flaws before you spend another rupiah.
        </p>
        <div className="mt-3.5">
          <a
            href="https://lynk.id/growthlab/k3ryx868xg2r"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff' }}
            className="btn-gradient-glow inline-flex w-full items-center justify-center gap-2 rounded-card px-3.5 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
          >
            Beli Ebook — Rp49.000 <span className="line-through text-white/70 text-[10px] font-normal">Rp129.000</span> <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* 3. Bottom Offer: 1-on-1 Consultation (The 90-Minute Constraint Audit) */}
      <div className="rounded-card border-2 border-[#1C3D73] bg-white p-4 shadow-sm">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1C3D73]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1C3D73]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1C3D73]" />
          Direct Consultation
        </div>
        <h4 className="mt-2 font-display text-sm font-semibold leading-snug text-ink">
          Revenue capped? Find your bottleneck.
        </h4>
        <p className="mt-1 font-serif text-xs leading-relaxed text-[#44474f]">
          1-on-1 diagnostic directly with Aditya. Full Digital Advantage Scorecard across 5 stages and a 90-day action plan.
        </p>
        <div className="mt-3.5">
          <Link
            to="/dal/"
            style={{ color: '#ffffff' }}
            className="!text-white inline-flex w-full items-center justify-center gap-1.5 rounded-card bg-[#1C3D73] px-3 py-2.5 font-display text-xs font-semibold shadow-sm transition-all hover:bg-[#2A5499] hover:-translate-y-0.5"
          >
            Apply for Audit <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MobileBookmarkDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* 🔖 Floating Bookmark Ribbon Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 items-center gap-1.5 rounded-l-lg border-y border-l border-[#1C3D73]/20 bg-[#1C3D73] py-3.5 pl-2.5 pr-2 text-white shadow-xl transition-transform active:scale-95 hover:-translate-x-1 focus:outline-none"
        aria-label="Open Growth Tools & Audit Bookmark"
      >
        <div className="flex flex-col items-center gap-1.5">
          <svg className="h-4 w-4 fill-current text-[#FFE8D4]" viewBox="0 0 24 24">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#FFE8D4] [writing-mode:vertical-rl] rotate-180">
            GROWTH TOOLS
          </span>
        </div>
      </button>

      {/* Slide-up Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 max-h-[88vh] w-full overflow-y-auto rounded-t-2xl border-t border-[#dfe4eb] bg-white p-6 shadow-2xl sm:max-w-md"
            >
              {/* Grab handle */}
              <div className="mx-auto h-1.5 w-12 rounded-full bg-[#cbd5e1]" />

              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-[#718096] hover:bg-[#f1f5f9] hover:text-ink"
                aria-label="Close drawer"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mt-3 flex items-center gap-3">
                <img
                  src="/aditya-bayu.webp"
                  alt="Aditya Indra Bayu"
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-full border border-white object-cover shadow-sm"
                />
                <div>
                  <div className="font-display text-base font-semibold text-ink">Aditya Indra Bayu</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1C3D73]">
                    Fractional CMO · InfinitiLabs
                  </div>
                </div>
              </div>

              {/* 1. Product Offer (First) */}
              <div className="mt-5 overflow-hidden rounded-xl border border-[#dfe4eb] bg-[#f8fafc] p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE8D4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1C3D73] border border-[#1C3D73]/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    FIELD GUIDE · EBOOK
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-sm font-bold text-ink">Rp49.000</span>
                    <span className="text-[11px] text-faint line-through">Rp129.000</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <a
                    href="https://lynk.id/growthlab/k3ryx868xg2r"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-block"
                  >
                    <img
                      src="https://storage.googleapis.com/bluestark_explorer/infinitiworks/Preflight-checklist-mockup.png"
                      alt="Meta Ads Pre-Flight Checklist Mockup"
                      width="600"
                      height="340"
                      loading="lazy"
                      className="mx-auto w-full max-w-[190px] h-auto object-contain drop-shadow-md"
                    />
                  </a>
                </div>
                <h3 className="mt-2 font-display text-[15px] font-bold leading-snug text-ink">
                  Stop Bleeding Ad Spend on Broken Signals.
                </h3>
                <p className="mt-1 font-serif text-xs leading-relaxed text-[#44474f]">
                  Audit tracking, creative hooks, and telemetry before launch with our 5-point field gate.
                </p>
                <div className="mt-3.5">
                  <a
                    href="https://lynk.id/growthlab/k3ryx868xg2r"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    style={{ color: '#ffffff' }}
                    className="btn-gradient-glow inline-flex w-full items-center justify-center gap-2 rounded-card px-3.5 py-2.5 font-display text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Beli Ebook — Rp49.000 <span className="line-through text-white/70 text-[10px] font-normal">Rp129.000</span> <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* 2. Direct Consultation (Second) */}
              <div className="mt-4 rounded-xl border-2 border-[#1C3D73] bg-white p-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1C3D73]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1C3D73]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1C3D73]" />
                  Direct Consultation
                </div>
                <h3 className="mt-1.5 font-display text-sm font-semibold leading-snug text-ink">
                  The 90-Minute Constraint Audit
                </h3>
                <p className="mt-1 font-serif text-xs leading-relaxed text-[#44474f]">
                  1-on-1 diagnostic directly with Aditya. Find the single bottleneck holding your revenue back before approving more budget.
                </p>
                <div className="mt-3">
                  <Link
                    to="/dal/"
                    onClick={() => setOpen(false)}
                    style={{ color: '#ffffff' }}
                    className="!text-white inline-flex w-full items-center justify-center gap-2 rounded-card bg-[#1C3D73] px-3.5 py-2.5 font-display text-xs font-semibold shadow-sm transition-all hover:bg-[#2A5499]"
                  >
                    Apply for Growth Diagnostic <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
