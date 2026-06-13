import { Head } from 'vite-react-ssg';
import { site } from '../data/site';

// Renders SEO head tags. Pre-rendered into static HTML by vite-react-ssg.
export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image = '/og-image.png',
  jsonLd,
  published,
}) {
  const url = site.url + path;
  const fullTitle = title;
  const img = image.startsWith('http') ? image : site.url + image;

  return (
    <Head>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      {published && <meta property="article:published_time" content={published} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
