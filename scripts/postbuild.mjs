// Postbuild: normalize blog output to folder-style clean URLs + generate sitemap.
import { readdirSync, mkdirSync, renameSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const blogDir = join(dist, 'blog');
const SITE = 'https://adityabayu.com';

const slugs = [];

// 1. Move dist/blog/<slug>.html -> dist/blog/<slug>/index.html
if (existsSync(blogDir)) {
  for (const f of readdirSync(blogDir)) {
    if (!f.endsWith('.html')) continue;
    const slug = f.replace(/\.html$/, '');
    const src = join(blogDir, f);
    if (!statSync(src).isFile()) continue;
    const dir = join(blogDir, slug);
    mkdirSync(dir, { recursive: true });
    renameSync(src, join(dir, 'index.html'));
    slugs.push(slug);
  }
}

// 2. Move dist/blog.html -> dist/blog/index.html
const blogHtml = join(dist, 'blog.html');
if (existsSync(blogHtml)) {
  mkdirSync(blogDir, { recursive: true });
  renameSync(blogHtml, join(blogDir, 'index.html'));
}

// 3. Sitemap
const urls = [
  { loc: `${SITE}/`, freq: 'monthly', pri: '1.0' },
  { loc: `${SITE}/blog/`, freq: 'weekly', pri: '0.8' },
  ...slugs.sort().map((s) => ({ loc: `${SITE}/blog/${s}/`, freq: 'monthly', pri: '0.7' })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`[postbuild] ${slugs.length} posts foldered, sitemap with ${urls.length} urls.`);
