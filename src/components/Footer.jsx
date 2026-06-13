import Logo from './Logo';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="section-rule mt-24">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo />
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              {s.label}
            </a>
          ))}
          <span className="text-faint">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
