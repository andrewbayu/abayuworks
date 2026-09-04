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
          ? scrolled ? 'border-[#e6e8ec] bg-white/90 backdrop-blur-md' : 'border-transparent bg-white/80'
          : scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between py-3.5" aria-label="Primary">
        <a href="/" className="shrink-0" aria-label="Home">
          <Logo className={light ? 'home-logo-light' : ''} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm transition-colors ${light ? 'text-[#4b5563] hover:text-[#111]' : 'text-muted hover:text-ink'}`}
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
          className={`relative grid h-10 w-10 place-items-center rounded-card md:hidden ${light ? 'text-[#111]' : 'text-ink'}`}
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
            className={`overflow-hidden border-t backdrop-blur-md md:hidden ${light ? 'border-[#e6e8ec] bg-white/95' : 'border-line bg-bg/95'}`}
          >
            <ul className="wrap flex flex-col py-2">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-base transition-colors ${light ? 'text-[#4b5563] hover:text-[#111]' : 'text-muted hover:text-ink'}`}
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
