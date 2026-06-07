# Writing (/blog) — how to add a post

Hand-authored, no build step. Every page is plain HTML linking the shared
stylesheet at `/blog/style.css`, so you never copy CSS into a post.

## Add a new post

1. **Create the folder + page**

   Copy the template:
   ```
   cp -r blog/wall-street-english-turnaround blog/<your-slug>
   ```
   Open `blog/<your-slug>/index.html` and update, near the top:
   - `<title>` and `<meta name="description">`
   - `<link rel="canonical">` → `https://aditya-bayu.netlify.app/blog/<your-slug>/`
   - the `og:*` and `twitter:*` tags (title, description, url)
   - the **JSON-LD** block: `headline`, `description`, `datePublished`,
     `dateModified`, `url`, `mainEntityOfPage.@id`
   Then write the body inside `<article>`.

2. **List it** on `blog/index.html` — copy a `<li class="post-item">` block,
   point it at `/blog/<your-slug>/`, newest on top.

3. **Add it to the sitemap** — add a `<url>` entry in `/sitemap.xml`.

4. **Ship it**
   ```
   git add -A && git commit -m "Post: <title>" && git push
   ```
   Live in ~10s (Netlify auto-deploy).

## Conventions
- URLs are folder-style: `/blog/<slug>/` (clean, no `.html`).
- Slugs: lowercase, hyphenated, stable. If you must rename, add a redirect
  in `netlify.toml` so the old URL doesn't 404.
- Voice + brand rules follow the homepage (see `LASTMEM.md`).
- Keep the case-claim disclaimer line on any post citing figures.
- Reusable building blocks in `style.css`: `.figure-grid`/`.figure-card`
  (metric tiles), `.callout`, `.tags`, `blockquote`.

## Optional upgrades later
- Per-article OG image instead of the shared `/og-image.png`.
- An RSS feed at `/blog/rss.xml` (good for distribution + AEO).
- An `llms.txt` pointing at your articles.
