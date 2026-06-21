// Postbuild: normalize output to folder-style clean URLs + generate sitemap.
// Two targets (see src/routes.jsx): the apex marketing site, or the course build
// (VITE_COURSE_BUILD=1) where the course lives at the deployment root.
import { readdirSync, mkdirSync, renameSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const SITE = 'https://adityabayu.com';
const LEARN_SITE = 'https://learn.adityabayu.com';
const COURSE_BUILD =
  process.env.VITE_COURSE_BUILD === '1' || process.env.VITE_COURSE_BUILD === 'true';

// Fold dist/<base>/<slug>.html -> dist/<base>/<slug>/index.html. Skips index.html
// (the section landing). Returns the list of foldered slugs.
function foldHtml(baseDir) {
  const out = [];
  if (!existsSync(baseDir)) return out;
  for (const f of readdirSync(baseDir)) {
    if (!f.endsWith('.html') || f === 'index.html') continue;
    const src = join(baseDir, f);
    if (!statSync(src).isFile()) continue;
    const slug = f.replace(/\.html$/, '');
    const dir = join(baseDir, slug);
    mkdirSync(dir, { recursive: true });
    renameSync(src, join(dir, 'index.html'));
    out.push(slug);
  }
  return out;
}

function writeSitemap(urls) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;
  writeFileSync(join(dist, 'sitemap.xml'), xml);
}

if (COURSE_BUILD) {
  // Course deployment (learn.adityabayu.com): landing at dist/index.html, lessons
  // at dist/<slug>.html -> fold to dist/<slug>/index.html.
  const learnSlugs = foldHtml(dist);

  // Sitemap: landing + free-preview lessons only (paid lessons are auth-gated).
  const FREE_LESSON_SLUGS = ['operators-first-30-days'];
  const publicLessons = learnSlugs.filter((s) => FREE_LESSON_SLUGS.includes(s));
  writeSitemap([
    { loc: `${LEARN_SITE}/`, freq: 'monthly', pri: '1.0' },
    ...publicLessons.sort().map((s) => ({ loc: `${LEARN_SITE}/${s}/`, freq: 'monthly', pri: '0.7' })),
  ]);

  console.log(`[postbuild:course] ${learnSlugs.length} lessons foldered, sitemap for ${LEARN_SITE}.`);
} else {
  // Apex marketing site.
  const blogDir = join(dist, 'blog');
  const slugs = foldHtml(blogDir);

  // Move dist/blog.html -> dist/blog/index.html
  const blogHtml = join(dist, 'blog.html');
  if (existsSync(blogHtml)) {
    mkdirSync(blogDir, { recursive: true });
    renameSync(blogHtml, join(blogDir, 'index.html'));
  }

  // Fold standalone top-level pages: dist/<name>.html -> dist/<name>/index.html
  for (const name of ['links']) {
    const f = join(dist, `${name}.html`);
    if (existsSync(f) && statSync(f).isFile()) {
      const dir = join(dist, name);
      mkdirSync(dir, { recursive: true });
      renameSync(f, join(dir, 'index.html'));
    }
  }

  writeSitemap([
    { loc: `${SITE}/`, freq: 'monthly', pri: '1.0' },
    { loc: `${SITE}/blog/`, freq: 'weekly', pri: '0.8' },
    { loc: `${SITE}/links/`, freq: 'monthly', pri: '0.5' },
    ...slugs.sort().map((s) => ({ loc: `${SITE}/blog/${s}/`, freq: 'monthly', pri: '0.7' })),
  ]);

  console.log(`[postbuild] ${slugs.length} posts foldered, apex sitemap written.`);
}
