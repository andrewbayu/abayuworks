import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import PostCover from '../components/PostCover';
import { Prose } from '../components/Prose';
import OperatorBridge from '../components/OperatorBridge';
import { DesktopStickyRail, MobileBookmarkDrawer } from '../components/BlogSidebar';
import { postBySlug } from '../posts';
import { site } from '../data/site';
import { fadeUp } from '../lib/motion';

export default function BlogPost({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const post = postBySlug[slug];

  // Language switcher state: 'en' | 'id'
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('abayu_article_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const handleLangChange = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('abayu_article_lang', newLang);
    } catch {}
  };

  if (!post) {
    return (
      <div className="wrap py-32 text-center">
        <p className="text-muted">Post not found.</p>
        <Link to="/blog/" className="mt-4 inline-block text-cream">← Writing</Link>
      </div>
    );
  }

  const hasIdVersion = Boolean(post.BodyId);
  const activeLang = hasIdVersion ? lang : 'en';

  const CurrentBody = activeLang === 'id' && post.BodyId ? post.BodyId : post.Body;
  const currentTitle = activeLang === 'id' && post.titleId ? post.titleId : post.title;
  const currentStandfirst = activeLang === 'id' && post.standfirstId ? post.standfirstId : post.standfirst;

  const path = `/blog/${post.slug}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: currentTitle,
    description: post.description,
    image: post.img || site.url + '/og-image.png',
    datePublished: post.date,
    dateModified: post.date,
    url: site.url + path,
    mainEntityOfPage: { '@type': 'WebPage', '@id': site.url + path },
    author: { '@type': 'Person', name: site.name, url: site.url + '/' },
    publisher: { '@type': 'Person', name: site.name, url: site.url + '/' },
  };

  return (
    <>
      <Seo
        title={`${currentTitle} · ${site.name}`}
        description={post.description}
        path={path}
        type="article"
        image={post.img || '/og-image.png'}
        published={post.date}
        jsonLd={jsonLd}
      />

      <div className="blog-light">
        <article className="wrap pb-[50px] pt-20 sm:pt-24">
          {/* Top Back Nav & Optional Language Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 flex flex-wrap items-center justify-between gap-4"
          >
            <Link to="/blog/" className="text-sm text-muted transition-colors hover:text-ink">← Writing</Link>

            {/* Language Switcher Pill */}
            {hasIdVersion && (
              <div className="inline-flex items-center rounded-full border border-[#dfe4eb] bg-[#f8fafc] p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => handleLangChange('en')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-semibold transition-all ${
                    activeLang === 'en'
                      ? 'bg-[#1C3D73] !text-white shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                  style={activeLang === 'en' ? { color: '#ffffff' } : {}}
                  aria-label="Read in English"
                >
                  <span>🇬🇧</span>
                  <span>EN</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange('id')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-xs font-semibold transition-all ${
                    activeLang === 'id'
                      ? 'bg-[#1C3D73] !text-white shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                  style={activeLang === 'id' ? { color: '#ffffff' } : {}}
                  aria-label="Baca dalam Bahasa Indonesia"
                >
                  <span>🇮🇩</span>
                  <span>ID</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* 70/30 Grid Layout: Sticky Rail on the Left, Article on the Right */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:items-start">
            {/* Left Column (Sticky rail on desktop: Author & Offers) */}
            <aside className="hidden lg:col-span-4 lg:block" aria-label="Author & Operating Tools">
              <DesktopStickyRail />
            </aside>

            {/* Right Column (Reading content: Cover, Header, Body, Bridge) */}
            <div className="lg:col-span-8 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="overflow-hidden rounded-card"
              >
                <PostCover kind={post.kind} category={post.category} img={post.img} tall />
              </motion.div>

              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-micro uppercase text-muted">
                  <span>{post.kind}</span>
                  <span className="text-faint">·</span>
                  <span>{post.category}</span>
                  <span className="text-faint">·</span>
                  <time dateTime={post.date}>{post.dateLabel}</time>
                </div>
                <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl lg:text-[2.5rem]">
                  {currentTitle}
                </h1>
                <p className="mt-5 font-serif text-lg leading-relaxed text-muted text-pretty">{currentStandfirst}</p>
              </motion.header>

              <div className="mt-10">
                <Prose>
                  <CurrentBody />
                </Prose>
                <OperatorBridge />
              </div>
            </div>
          </div>

          {/* Floating Bookmark Drawer on mobile (< lg) */}
          <MobileBookmarkDrawer />
        </article>
      </div>
    </>
  );
}
