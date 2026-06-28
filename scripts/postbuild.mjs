// Postbuild: normalize blog output to folder-style clean URLs + generate sitemap.
import { readdirSync, mkdirSync, renameSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const blogDir = join(dist, 'blog');
const SITE = 'https://adityabayu.com';
const LEARN_SITE = 'https://learn.adityabayu.com';

const slugs = [];
const learnSlugs = [];

// Fold dist/<section>/<slug>.html -> dist/<section>/<slug>/index.html, returning
// the list of foldered slugs.
function foldSection(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.html')) continue;
    const slug = f.replace(/\.html$/, '');
    const src = join(dir, f);
    if (!statSync(src).isFile()) continue;
    const sub = join(dir, slug);
    mkdirSync(sub, { recursive: true });
    renameSync(src, join(sub, 'index.html'));
    out.push(slug);
  }
  return out;
}

// 1. Move dist/blog/<slug>.html -> dist/blog/<slug>/index.html
slugs.push(...foldSection(blogDir));

// 1b. Same for the course: dist/learn/<slug>.html -> dist/learn/<slug>/index.html
learnSlugs.push(...foldSection(join(dist, 'learn')));

// 1c. Fold nested standalone subpages, e.g. /preflight-checklist/thank-you.html
// -> /preflight-checklist/thank-you/index.html (the landing page's own index is
// foldered by the standalone-pages step below).
foldSection(join(dist, 'preflight-checklist'));

// 2. Move dist/blog.html -> dist/blog/index.html
const blogHtml = join(dist, 'blog.html');
if (existsSync(blogHtml)) {
  mkdirSync(blogDir, { recursive: true });
  renameSync(blogHtml, join(blogDir, 'index.html'));
}

// 2b. Fold standalone top-level pages: dist/<name>.html -> dist/<name>/index.html
for (const name of ['links', 'preflight-checklist', 'learn']) {
  const f = join(dist, `${name}.html`);
  if (existsSync(f) && statSync(f).isFile()) {
    const dir = join(dist, name);
    mkdirSync(dir, { recursive: true });
    renameSync(f, join(dir, 'index.html'));
  }
}

// 3. Sitemap
// Public course URLs only: the landing + free-preview lessons. Paid lessons are
// auth-gated, so they're excluded from the sitemap.
const FREE_LESSON_SLUGS = ['operators-first-30-days'];
const publicLearnLessons = learnSlugs.filter((s) => FREE_LESSON_SLUGS.includes(s));
const urls = [
  { loc: `${SITE}/`, freq: 'monthly', pri: '1.0' },
  { loc: `${SITE}/blog/`, freq: 'weekly', pri: '0.8' },
  { loc: `${SITE}/links/`, freq: 'monthly', pri: '0.5' },
  { loc: `${SITE}/preflight-checklist/`, freq: 'monthly', pri: '0.6' },
  ...slugs.sort().map((s) => ({ loc: `${SITE}/blog/${s}/`, freq: 'monthly', pri: '0.7' })),
  { loc: `${LEARN_SITE}/`, freq: 'monthly', pri: '0.7' },
  ...publicLearnLessons.sort().map((s) => ({ loc: `${LEARN_SITE}/${s}/`, freq: 'monthly', pri: '0.6' })),
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

console.log(
  `[postbuild] ${slugs.length} posts + ${learnSlugs.length} lessons foldered, sitemap with ${urls.length} urls.`
);
