# Writing (/blog)

Hand-authored, no build step. Every page is plain HTML that links the shared
stylesheet `/blog/style.css` and shared `/blog/nav.js`, so you never copy CSS or
nav code into a post.

## How to add a post

The full, canonical playbook lives in **[`/GUIDELINES.md`](../GUIDELINES.md) → §2 "Add a new article"**.

Quick version:
1. `cp -r blog/wall-street-english-turnaround blog/<your-slug>` (this is the template).
2. Update the `<head>`: title, description, canonical, OG/Twitter, JSON-LD.
3. Write the body inside `<article>`.
4. Add a `<li class="post-item">` to `blog/index.html` (newest on top).
5. Add the URL to `/sitemap.xml`.
6. `git add -A && git commit -m "Post: <title>" && git push` → live in ~10s.

## Conventions
- URLs are folder-style: `/blog/<slug>/`. Slugs lowercase, hyphenated, stable.
- If you rename a slug, add a redirect in `netlify.toml` so the old URL doesn't 404.
- Reusable building blocks are in `style.css` (`.figure-grid`, `.callout`, `.tags`, `blockquote`).
- Voice, SEO, and honesty rules: see `/GUIDELINES.md`.
