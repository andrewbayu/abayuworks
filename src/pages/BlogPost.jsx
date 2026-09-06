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

  if (!post) {
    return (
      <div className="wrap py-32 text-center">
        <p className="text-muted">Post not found.</p>
        <Link to="/blog/" className="mt-4 inline-block text-cream">← Writing</Link>
      </div>
    );
  }

  const { Body } = post;
  const path = `/blog/${post.slug}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
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
              title={`${post.title} · ${site.name}`}
              description={post.description}
              path={path}
              type="article"
              image={post.img || '/og-image.png'}
              published={post.date}
              jsonLd={jsonLd}
            />

      <div className="blog-light">
        <article className="wrap pb-[50px] pt-20 sm:pt-24">
          {/* Top Back Nav */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <Link to="/blog/" className="text-sm text-muted transition-colors hover:text-ink">← Writing</Link>
          </motion.div>

          {/* 70/30 Grid Layout starting from the top */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-start">
            {/* Left Column (70% reading content: Cover, Header, Body, Bridge) */}
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
                  {post.title}
                </h1>
                <p className="mt-5 font-serif text-lg leading-relaxed text-muted text-pretty">{post.standfirst}</p>
              </motion.header>

              <div className="mt-10">
                <Prose>
                  <Body />
                </Prose>
                <OperatorBridge />
              </div>
            </div>

            {/* Right Column (30% sticky rail on desktop) */}
            <aside className="hidden lg:col-span-4 lg:block" aria-label="Author & Operating Tools">
              <DesktopStickyRail />
            </aside>
          </div>

          {/* Floating Bookmark Drawer on mobile (< lg) */}
          <MobileBookmarkDrawer />
        </article>
      </div>
    </>
  );
}
