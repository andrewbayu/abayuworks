import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export function DesktopStickyRail() {
  return (
    <aside className="hidden w-72 shrink-0 xl:block">
      <div className="sticky top-28 rounded-card border border-[#dfe4eb] bg-white p-5 shadow-sm">
        {/* Author header */}
        <div className="flex items-center gap-3 border-b border-[#f1f5f9] pb-4">
          <img
            src="/aditya-bayu.webp"
            alt="Aditya Indra Bayu"
            width="48"
            height="48"
            className="h-12 w-12 rounded-full border border-white object-cover shadow-sm"
            loading="lazy"
          />
          <div>
            <div className="font-display text-sm font-semibold text-ink">Aditya Indra Bayu</div>
            <div className="text-micro uppercase font-medium text-[#1C3D73]">Fractional CMO</div>
          </div>
        </div>

        {/* Diagnostic pitch */}
        <div className="mt-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1C3D73]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1C3D73]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1C3D73]" />
            90-Min Diagnostic
          </div>
          <h4 className="mt-2 font-display text-sm font-semibold leading-snug text-ink">
            Revenue capped? Find your single bottleneck.
          </h4>
          <p className="mt-1.5 font-serif text-xs leading-relaxed text-[#44474f]">
            Isolate the constraint between demand, funnels, and sales capacity before spending more on ads.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <Link
            to="/dal/"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-card bg-[#1C3D73] px-3.5 py-2.5 font-display text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#2A5499] hover:-translate-y-0.5"
          >
            Apply for Audit <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Free Tool divider */}
        <div className="mt-5 border-t border-[#f1f5f9] pt-3 text-center">
          <p className="font-serif text-[11px] text-[#718096]">Need a self-service check?</p>
          <Link
            to="/preflight-checklist/"
            className="mt-1 inline-block font-display text-xs font-semibold text-[#1C3D73] hover:underline"
          >
            Meta Ads Pre-Flight Checklist <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </aside>
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
    <div className="xl:hidden">
      {/* 🔖 Floating Bookmark Ribbon Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 items-center gap-1.5 rounded-l-lg border-y border-l border-[#1C3D73]/20 bg-[#1C3D73] py-3.5 pl-2.5 pr-2 text-white shadow-xl transition-transform active:scale-95 hover:-translate-x-1 focus:outline-none"
        aria-label="Open Growth Audit Bookmark"
      >
        <div className="flex flex-col items-center gap-1.5">
          <svg className="h-4 w-4 fill-current text-[#FFE8D4]" viewBox="0 0 24 24">
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-[#FFE8D4] [writing-mode:vertical-rl] rotate-180">
            GROWTH AUDIT
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
              className="relative z-10 max-h-[85vh] w-full overflow-y-auto rounded-t-2xl border-t border-[#dfe4eb] bg-white p-6 shadow-2xl sm:max-w-md"
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
                  width="52"
                  height="52"
                  className="h-13 w-13 rounded-full border border-white object-cover shadow-sm"
                />
                <div>
                  <div className="font-display text-base font-semibold text-ink">Aditya Indra Bayu</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1C3D73]">
                    Fractional CMO · InfinitiLabs
                  </div>
                </div>
              </div>

              {/* Offer Details */}
              <div className="mt-5 rounded-xl border border-[#dfe4eb] bg-[#f8fafc] p-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1C3D73]/10 px-2 py-0.5 text-micro font-bold uppercase tracking-wider text-[#1C3D73]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1C3D73]" />
                  The 90-Minute Constraint Audit
                </div>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink">
                  Stop guessing why ad spend climbs while pipeline stays flat.
                </h3>
                <p className="mt-1.5 font-serif text-xs leading-relaxed text-[#44474f]">
                  In one session, we isolate the exact bottleneck across positioning, funnel, tracking, and handoff before you approve another rupiah of budget.
                </p>

                <ul className="mt-3 space-y-1.5 font-serif text-xs text-[#44474f]">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#1C3D73]" />
                    <span>1-on-1 diagnostic directly with Aditya.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#1C3D73]" />
                    <span>Digital Advantage Scorecard across 5 stages.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#1C3D73]" />
                    <span>Prioritized 90-day action plan for your team.</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <Link
                    to="/dal/"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-[#1C3D73] px-4 py-3 font-display text-sm font-medium text-white shadow-sm transition-all hover:bg-[#2A5499]"
                  >
                    Apply for a growth diagnostic <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Free Tool option */}
              <div className="mt-4 border-t border-[#f1f5f9] pt-3 text-center">
                <p className="font-serif text-xs text-[#718096]">Looking for the self-service checklist?</p>
                <Link
                  to="/preflight-checklist/"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-block font-display text-xs font-semibold text-[#1C3D73] hover:underline"
                >
                  Meta Ads Pre-Flight Checklist (Free PDF) <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
