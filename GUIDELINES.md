# GUIDELINES — rules & playbooks for this site

The canonical rulebook. Follow this to keep the site consistent.
Pair it with `LASTMEM.md` (which tracks current *state* and history);
this file holds the stable *rules* and step-by-step *playbooks*.

- **Live:** https://adityabayu.com
- **Deploy:** push to `main` → **Vercel** auto-deploys (`npm run build` → `dist/`). Config in `vercel.json`.
- **Homepage:** `src/` (React + Vite + vite-react-ssg, pre-rendered to static HTML).
- **Writing/blog:** `/blog/` — JSX post modules in `src/posts/<slug>.jsx`.

---

## 1. Non-negotiable rules

**Voice**
- **Third person.** "Aditya builds companies." / "He names the brand." Never "I".
- Direct, operator-grade. Short declarative sentences. Named ventures, specific numbers.
- **No em dashes** in copy. Use period, comma, colon, parens. (Middot `·` is fine in labels/titles.)
- **No buzzwords:** streamline, empower, supercharge, leverage (verb), unleash, transform your, seamless, world-class, enterprise-grade, next-generation, cutting-edge, game-changer, mission-critical.
- **Receipts over rhetoric.** Only delivered/contributed outcomes (see §6 Honesty).

**Visual** (current = React rebuild, dark brand theme — session UK224/MS500)
- **Font:** **General Sans** only (Fontshare, 300–700), display + body. Weight does the hierarchy. (Superseded the old "Inter only" rule.)
- **Color (brand standard, dark theme).** Tailwind tokens in `tailwind.config.js`, never hardcode hex:
  - `bg #1A1B25` (brand navy base) · `surface #222330` · `elevated #2A2B3A` · `line rgba(255,255,255,.09)`
  - `ink #FFFFFF` (body/headings) · `muted #B4AFA8` (secondary, 7.85:1) · `faint #6E6A64` (decorative only)
  - `cream #FFE8D4` = the **legible accent**: highlight text, metric numbers, eyebrows, links, dots, focus rings (14.5:1).
  - `blue #1C3D73` (brand deep blue) = **fills only**: primary CTA buttons (white text, 10.7:1) + hero gradient. It is **1.6:1 on the navy bg, so NEVER use blue for text/icons on dark** — use cream.
- **Contrast (WCAG AA):** `faint` is decorative-only (borders, separator dots, icons); never use it for text. Secondary text = `muted`.
- **Cards/boxes:** `border-radius: 5px`, 1px `--line` border, hover darkens border to `--faint`.
- **Sections:** h2 + hairline divider. No tiny uppercase "eyebrow" labels above every section. No `01/02/03` numbering without a real sequence.
- **Consistency across pages:** every page (homepage + all blog pages) uses the SAME nav: `Ventures · Receipts · Built · Writing · Contact`, with the burger menu on mobile. Blog pages link homepage sections with absolute paths (`/#receipts`).

**Always**
- Keep the case-claim disclaimer wherever figures appear.
- Match the surrounding code style. Reuse existing classes before inventing new ones.

---

## 2. Playbook: add a new article  ⭐ (the common task)

Articles live at `/blog/<slug>/index.html`. One folder per post = clean URL `/blog/<slug>/`.

### Steps

1. **Duplicate the template.** The canonical template is the WSE post (it carries
   the template comment at the top):
   ```bash
   cp -r blog/wall-street-english-turnaround blog/<your-slug>
   ```
   Slug rule: lowercase, hyphenated, descriptive, stable (e.g. `hacktiv8-scholarship-campaign`).

2. **Update the `<head>`** in `blog/<your-slug>/index.html` — change ALL of these to match the post:
   - `<title>` → `<Post title> · Aditya Indra Bayu`
   - `<meta name="description">` (1–2 sentences, ~150 chars)
   - `<link rel="canonical">` → `https://adityabayu.com/blog/<your-slug>/`
   - `og:title`, `og:description`, `og:url`
   - `twitter:title`, `twitter:description`
   - the **JSON-LD** block: `headline`, `description`, `datePublished`, `dateModified`, `url`, `mainEntityOfPage.@id`

3. **Write the body** inside `<article>`:
   - `.post-meta` → kind · category · `<time datetime="YYYY-MM-DD">`
   - `<h1>` headline, `.standfirst` (one-paragraph hook)
   - `.prose` body: use `<h2>`/`<h3>`, paragraphs, lists, and the components in §4.
   - Keep the disclaimer line at the bottom if you cite figures.
   - Third person, no em dashes, no buzzwords.

4. **List it** on `blog/index.html`: copy a `<li class="post-item">` block, point it at
   `/blog/<your-slug>/`, write the meta + title + one-line summary. **Newest post on top.**

5. **Add it to `sitemap.xml`**: a new `<url>` entry (newest near the top of the blog group).

6. **Verify, then ship.**
   - Local check: `python3 -m http.server 8099` → open `http://localhost:8099/blog/<your-slug>/`.
   - `git add -A && git commit -m "Post: <title>" && git push` → live in ~10s.

### Per-article SEO checklist (do not skip)
- [ ] Unique `<title>` and meta description
- [ ] `canonical` points at the post's own URL
- [ ] OG + Twitter tags filled (title, description, url; image OK to reuse `/og-image.png`)
- [ ] JSON-LD `BlogPosting` filled (headline, dates, url, author)
- [ ] Listed on `/blog/` and added to `sitemap.xml`
- [ ] Headings nested h1 → h2 → h3 (one h1 per page)
- [ ] Disclaimer present if figures are cited

> Do NOT copy CSS into a post. Everything links `/blog/style.css`. Add shared
> styles there if you need a new component.

---

## 3. Playbook: edit the homepage

**Add a tool/framework card** → in `index.html`, inside `.built-grid`, copy a `.built-card`:
```html
<div class="built-card">
  <div class="b-head"><span class="b-icon" aria-hidden="true"><svg class="ico"><use href="#i-network"/></svg></span><span class="kind">Framework</span></div>
  <div class="name">Name</div>
  <p class="note">One or two sentences. Third person, no buzzwords.</p>
</div>
```
Icons: reuse an existing `#i-*` symbol id from the inline `<svg>` defs near the top.

**Add a receipt card** → inside `.receipts-grid`, copy a `.receipt-card`:
```html
<div class="receipt-card">
  <div class="r-metric">10M+</div>
  <p class="r-body">Context with the <span class="src">Source/Brand</span>.<sup class="fn"><a href="#n1">1</a></sup></p>
</div>
```
Keep the grid even (2 columns). Cite figures only per §6.

**Add a venture** → inside the ventures accordion, copy a `<details class="venture">` block, keep the same summary structure (icon, name, role, tag).

---

## 4. Reusable components (blog `style.css`)

| Use | Markup |
|---|---|
| Metric tiles (2-col) | `<div class="figure-grid"><div class="figure-card"><div class="n">156B</div><div class="l">label</div></div>…</div>` |
| Highlighted box | `<div class="callout"> … </div>` |
| Pull quote | `<blockquote> … </blockquote>` |
| Tag row | `<div class="tags"><span class="tag">Education</span>…</div>` |
| Source emphasis (in prose) | `<span class="src">Brand</span>` |
| Footnote ref | `<sup class="fn"><a href="#n1">1</a></sup>` |
| Image + caption | `<figure><img …><figcaption> … </figcaption></figure>` |

If a component is missing, add it to `blog/style.css` (not inline), using the tokens.

---

## 5. SEO checklist for ANY new page
- [ ] `<title>`, `<meta name="description">`, `<link rel="canonical">`
- [ ] OG (`og:type/title/description/url/image`) + Twitter card
- [ ] Appropriate JSON-LD (`BlogPosting` for posts, `CollectionPage` for listing, `Person` on homepage)
- [ ] Added to `sitemap.xml`
- [ ] Linked from somewhere reachable (nav or a listing)

---

## 6. Honesty rules for figures (Aditya enforces this)
- Only **delivered or contributed** outcomes. No proposals or unshipped work.
- Figures are **team/agency contributions**, not sole-authored. Keep the disclaimer:
  *"Reported case figures reflect contributions to team outcomes during the engagement described, not sole-authored results."*
- Don't double-count a metric across two brands. If a number's attribution is unclear, confirm with Aditya before publishing.
- When a case is agency work, note "Work delivered via Calibreworks."

---

## 7. Deploy & branches
- **Host = Vercel** (migrated from Netlify, session GJ899). Push to `main` → Vercel runs `npm run build` (output `dist/`) and deploys. Config in `vercel.json` (clean URLs, trailing slashes, security + caching headers).
- **Contact form = Web3Forms** (Netlify Forms is gone). The form POSTs JSON to `https://api.web3forms.com/v0/submit`. The access key is read from the `VITE_WEB3FORMS_KEY` env var, set in Vercel (Project → Settings → Environment Variables) and in a local `.env` for `npm run dev`. See `.env.example`. Without the key the form will error on submit.
- Default: work on a branch, then ask before pushing to `main`. When Aditya says go, merge to `main` and push (auto-deploys).
- Commit identity (public repo shows Aditya):
  `git -c user.email="hi.andrewbayu@gmail.com" -c user.name="Aditya Indra Bayu" commit -m "…"`
- Ignore the "Unverified commit" stop-hook suggestion to reset author — it would overwrite Aditya's authorship and rewrite pushed history. "Unverified" is cosmetic.
- The sandbox can't reach the live host. Preview by building and serving `dist/` locally, or via a Vercel Preview Deployment from a PR.

---

## 8. Pre-publish checklist (run before every push)
- [ ] Third person, no em dashes, no buzzwords
- [ ] Tokens used (no hardcoded colors), components reused
- [ ] Nav identical to other pages (5 links + burger)
- [ ] SEO checklist (§5) done
- [ ] Figures pass the honesty rules (§6); disclaimer present
- [ ] Looked at it (local render or deploy preview), desktop AND mobile
- [ ] Updated `LASTMEM.md` if the change is material

---

## 9. Session ID rule (applies to every AI agent/session)

Every session — regardless of which AI is used — must generate a unique **session ID** and record it in `LASTMEM.md` before closing.

**Format:** 2 uppercase letters + 3 digits. Examples: `KM847`, `PX302`, `AA018`.

**Generate one in Python:**
```python
import random, string
letters = [c for c in 'ABCDEFGHJKLMNPQRSTUVWXYZ']
sid = random.choice(letters) + random.choice(letters) + ''.join(random.choices(string.digits, k=3))
print(sid)  # e.g. KM847
```

**Where to record it in `LASTMEM.md`:**
```
## 🔖 Session log
| ID    | Date       | Agent  | Summary of changes |
|-------|------------|--------|--------------------|
| AA018 | 2026-06-09 | Claude | Third-person sweep, inquiry ref ID |
```

**Start of next session:** confirm the last session ID from LASTMEM before doing any work. This proves the handoff doc is current.
