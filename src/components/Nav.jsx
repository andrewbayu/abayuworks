import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import { site } from '../data/site';
import { easeOut } from '../lib/motion';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const light = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        light
          ? scrolled
            ? 'border-white/10 bg-[#0d1a33]/95 backdrop-blur-xl'
            : 'border-transparent bg-gradient-to-r from-[#0b1526]/75 via-[#12264a]/65 to-[#1c3d73]/55 backdrop-blur-xl'
          : scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between py-3.5" aria-label="Primary">
        <a href="/" className="shrink-0" aria-label="Home">
          <Logo className={light ? 'home-logo-nav-navy' : ''} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm transition-colors ${
                  light ? 'text-white/80 hover:text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`relative grid h-10 w-10 place-items-center rounded-card md:hidden ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className={`overflow-hidden border-t backdrop-blur-xl md:hidden ${
              light ? 'border-white/10 bg-[#0d1a33]/95' : 'border-line bg-bg/95'
            }`}
          >
            <ul className="wrap flex flex-col py-2">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-base transition-colors ${
                      light ? 'text-white/85 hover:text-white' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}