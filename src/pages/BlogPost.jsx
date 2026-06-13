import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { Prose } from '../components/Prose';
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
    image: site.url + '/og-image.png',
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
        published={post.date}
        jsonLd={jsonLd}
      />

      <article className="wrap pt-20 sm:pt-24">
        <motion.header initial="hidden" animate="show" variants={fadeUp} className="mx-auto max-w-prose">
          <Link to="/blog/" className="text-sm text-muted transition-colors hover:text-ink">← Writing</Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-micro uppercase text-muted">
            <span>{post.kind}</span>
            <span className="text-faint">·</span>
            <span>{post.category}</span>
            <span className="text-faint">·</span>
            <time dateTime={post.date}>{post.dateLabel}</time>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">{post.standfirst}</p>
        </motion.header>

        <div className="mt-10">
          <Prose>
            <Body />
          </Prose>
        </div>
      </article>
    </>
  );
}
