import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import LearnNav from '../components/LearnNav';
import Paywall from '../components/Paywall';
import { useSession } from '../components/LearnAuth';
import { useEntitlement } from '../lib/course-access';
import { course, modules, totalLessons } from '../course/curriculum';
import { site } from '../data/site';
import { fadeUp, stagger } from '../lib/motion';

const LEARN_ORIGIN = 'https://learn.adityabayu.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.promise,
  provider: { '@type': 'Person', name: site.name, url: site.url + '/' },
};

export default function LearnHome() {
  const { session } = useSession();
  const { entitled } = useEntitlement(session);

  return (
    <>
      <Seo
        title={`${course.title} · ${site.name}`}
        description={course.promise}
        path="/learn/"
        origin={LEARN_ORIGIN}
        type="website"
        jsonLd={jsonLd}
      />
      <LearnNav />

      <main className="mx-auto w-full max-w-3xl px-5 pb-24">
        {/* Hero */}
        <motion.section
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="pt-16 sm:pt-20"
        >
          <motion.div variants={fadeUp} className="text-micro uppercase tracking-wide text-cream">
            Self-paced course · {totalLessons} lessons
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl"
          >
            {course.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted text-pretty">
            {course.tagline}. {course.promise}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-3 text-sm text-faint">
            {course.audience}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            {entitled ? (
              <Link
                to={`/learn/${modules[0].lessons[0].slug}/`}
                className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-6 py-3.5 font-medium text-white transition-colors hover:bg-blue-soft"
              >
                Continue the course <span aria-hidden>→</span>
              </Link>
            ) : (
              <a
                href="#enroll"
                className="inline-flex items-center justify-center gap-2 rounded-card bg-blue px-6 py-3.5 font-medium text-white transition-colors hover:bg-blue-soft"
              >
                Get lifetime access <span aria-hidden>→</span>
              </a>
            )}
          </motion.div>
        </motion.section>

        {/* Outcomes */}
        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold tracking-tight">What you'll be able to do</h2>
          <ul className="mt-5 grid gap-2.5">
            {course.outcomes.map((o) => (
              <li key={o} className="relative pl-6 leading-relaxed text-ink/85">
                <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-cream" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </section>

        {/* Curriculum */}
        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold tracking-tight">Curriculum</h2>
          <div className="mt-6 grid gap-8">
            {modules.map((m, mi) => (
              <div key={m.id}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-cream">Module {mi + 1}</span>
                  <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted">{m.blurb}</p>
                <ul className="mt-4 grid gap-px overflow-hidden rounded-card border border-line bg-line">
                  {m.lessons.map((l) => {
                    const open = l.is_free || entitled;
                    const inner = (
                      <div className="flex items-center justify-between gap-3 bg-surface p-4 transition-colors hover:bg-surface/70">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-semibold text-ink">
                              {l.number}. {l.title}
                            </span>
                            {l.is_free && (
                              <span className="shrink-0 rounded-full border border-cream/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-cream">
                                Free
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 truncate text-sm text-muted">{l.summary}</p>
                        </div>
                        <span className="shrink-0 text-sm text-faint">
                          {open ? <span className="text-cream">→</span> : '🔒'}
                        </span>
                      </div>
                    );
                    return (
                      <li key={l.slug}>
                        {open ? <Link to={`/learn/${l.slug}/`}>{inner}</Link> : inner}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Enroll */}
        {!entitled && (
          <section id="enroll" className="mt-16 scroll-mt-20">
            <Paywall heading="Enroll — lifetime access" signedIn={!!session?.user} />
          </section>
        )}

        <footer className="mt-20 text-center text-sm text-faint">
          <a href="https://adityabayu.com" className="transition-colors hover:text-cream">
            A course by {site.name} · adityabayu.com
          </a>
        </footer>
      </main>
    </>
  );
}
