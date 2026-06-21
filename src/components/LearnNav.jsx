import { Link } from 'react-router-dom';
import { course } from '../course/curriculum';
import { useSession, SignOutButton } from './LearnAuth';

// Minimal shared course chrome. Distinct from the marketing-site Nav: just a
// wordmark back to the course home, a link to the full portfolio, and auth state.
export default function LearnNav() {
  const { session } = useSession();
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link to="/learn/" className="font-display text-sm font-semibold tracking-tight text-ink">
          {course.title}
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://adityabayu.com"
            className="hidden text-xs text-faint transition-colors hover:text-cream sm:inline"
          >
            ← adityabayu.com
          </a>
          {session?.user?.email ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-xs text-muted sm:inline">{session.user.email}</span>
              <SignOutButton />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
