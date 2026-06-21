import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Seo from '../components/Seo';
import LearnNav from '../components/LearnNav';
import Paywall from '../components/Paywall';
import { Prose } from '../components/Prose';
import { useSession } from '../components/LearnAuth';
import { useEntitlement } from '../lib/course-access';
import { supabase } from '../lib/supabase';
import { lessons, lessonBySlug } from '../course/curriculum';
import { site } from '../data/site';

const LEARN_ORIGIN = 'https://learn.adityabayu.com';

// Map markdown elements to the site's dark-premium styling (mirrors Prose.jsx).
const md = {
  h2: ({ children }) => <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 font-display text-lg font-semibold">{children}</h3>,
  p: ({ children }) => <p className="mt-4 leading-relaxed text-ink/85 text-pretty">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 grid gap-2.5 pl-1">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 grid list-decimal gap-2.5 pl-5">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed text-ink/85 marker:text-cream">{children}</li>,
  a: ({ href, children }) => (
    <a href={href} className="text-cream underline underline-offset-2 hover:text-ink">{children}</a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l-2 border-cream pl-5 font-display text-xl leading-snug text-ink">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-line" />,
  img: ({ src, alt }) => <img src={src} alt={alt} className="mt-7 w-full rounded-card border border-line" />,
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-cream">{children}</code>
  ),
};

export default function Lesson({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const meta = lessonBySlug[slug];

  const { session, loading: sessionLoading } = useSession();
  const { entitled, checking } = useEntitlement(session);

  const [body, setBody] = useState(null);
  const [state, setState] = useState('idle'); // idle | loading | ready | locked | error

  const canAccess = meta?.is_free || entitled;

  useEffect(() => {
    if (!meta) return;
    if (sessionLoading || checking) return;
    if (!canAccess) {
      setState('locked');
      return;
    }
    if (!supabase) {
      setState('error');
      return;
    }
    let active = true;
    setState('loading');
    supabase
      .from('lessons')
      .select('body_md')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        if (!active) return;
        if (error || !data) {
          setState(canAccess ? 'error' : 'locked');
        } else {
          setBody(data.body_md);
          setState('ready');
        }
      });
    return () => {
      active = false;
    };
  }, [slug, meta, canAccess, sessionLoading, checking]);

  if (!meta) {
    return (
      <>
        <LearnNav />
        <div className="wrap py-32 text-center">
          <p className="text-muted">Lesson not found.</p>
          <Link to="/learn/" className="mt-4 inline-block text-cream">← Course home</Link>
        </div>
      </>
    );
  }

  const idx = lessons.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <>
      <Seo
        title={`${meta.title} · ${site.name}`}
        description={meta.summary}
        path={`/learn/${slug}/`}
        origin={LEARN_ORIGIN}
        type="article"
      />
      <LearnNav />

      <article className="mx-auto w-full max-w-prose px-5 pb-24 pt-16 sm:pt-20">
        <Link to="/learn/" className="text-sm text-muted transition-colors hover:text-ink">
          ← {meta.moduleTitle}
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-micro uppercase text-muted">
            <span>Lesson {meta.number}</span>
            <span className="text-faint">·</span>
            <span>{meta.duration}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{meta.summary}</p>
        </header>

        <div className="mt-10">
          {state === 'loading' || state === 'idle' ? (
            <p className="text-muted">Loading lesson…</p>
          ) : state === 'locked' ? (
            <Paywall heading={`Unlock "${meta.title}"`} signedIn={!!session?.user} />
          ) : state === 'error' ? (
            <p className="text-muted">This lesson isn't available right now. Please try again shortly.</p>
          ) : (
            <Prose>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                {body || ''}
              </ReactMarkdown>
            </Prose>
          )}
        </div>

        {/* Prev / next */}
        {state === 'ready' && (
          <nav className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-6 text-sm">
            {prev ? (
              <Link to={`/learn/${prev.slug}/`} className="text-muted transition-colors hover:text-ink">
                ← {prev.title}
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/learn/${next.slug}/`} className="text-right text-cream transition-colors hover:text-ink">
                {next.title} →
              </Link>
            ) : <span />}
          </nav>
        )}
      </article>
    </>
  );
}
