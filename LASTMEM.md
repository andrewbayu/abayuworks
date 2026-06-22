# LASTMEM — Project Memory for AI Agents

> If you're an AI agent opening this repo cold, **read this file first.** It's the handoff doc Aditya leaves himself between sessions. Skim the top, then read sections that match the task.
>
> For the stable **rules and step-by-step playbooks** (how to add an article, edit the homepage, SEO/honesty checklists), see **`GUIDELINES.md`**. This file (LASTMEM) is current *state + history*; GUIDELINES is the *rulebook*.

Last updated: 2026-06-22 by Claude (session QF208). Built the paid course "The Operator Playbook" at `learn.adityabayu.com` (Xendit + Supabase, Edge Middleware + host-aware client routes, single Vercel project). Code deployed & verified at `abayuworks.vercel.app/learn/`. **#1 TODO: re-add `learn.adityabayu.com` to the `abayuworks` Vercel project (currently detached → 404), then wire Supabase + Xendit + env vars.** See session log + the course details below.

---

## ⚡ 60-second briefing

**Owner.** Aditya (Andrew) Indra Bayu. Venture Builder & Fractional CMO. South Tangerang, Indonesia. Email: `hi.andrewbayu@gmail.com` (work). Personal: `andrew.bayu23@gmail.com` (legacy, don't use on the site).

**What this is.** An operator portfolio. Homepage is `index.html` (single page). There is now also a **Writing/blog section** at `/blog/` (case studies). Static HTML, no build step. Goal: inbound for **operator-seat engagements** (Fractional CMO, co-build, agency work) from CEO/founder-level peers.

**Voice is now THIRD person.** "Aditya builds companies," not "I build companies." This reversed the original first-person rule (Aditya asked for it mid-session; the first-person voice read as cringe to him). Most of the homepage is converted; a few spots may remain (see pending).

**Live.** https://adityabayu.com
**Repo.** https://github.com/andrewbayu/abayuworks (public)
**Host = Vercel** (migrated from Netlify, session GJ899). Manage at https://vercel.com/dashboard. Set `VITE_WEB3FORMS_KEY` in Project → Settings → Environment Variables.
**Local path.** `C:\Users\andre\Website-1`

**Deploy = push to `main`.** Pushing to `main` auto-deploys to **Vercel** (`npm run build` → `dist/`, config in `vercel.json`). Migrated off Netlify in session GJ899. **Contact form + /links lead-magnet now run on a same-origin serverless function** `api/contact.js` (Node runtime, nodemailer over Gmail SMTP) — moved off Web3Forms in QF207 because Web3Forms' Cloudflare bot-protection 403'd browser submissions. Env vars in Vercel: `SMTP_HOST` (smtp.gmail.com), `SMTP_PORT` (465), `SMTP_USER`, `SMTP_PASS` (Gmail **App Password**, requires 2FA), `CONTACT_TO`. `VITE_WEB3FORMS_KEY` is now unused. See `.env.example`.

**The single source of truth for design decisions is `DESIGN.md` and `PRODUCT.md`** (local-only, in `.gitignore`, NOT in the repo). If you don't have them, infer from the existing CSS, but ask before guessing about voice or anti-references. NOTE: those files predate this session, so they still describe the *old* first-person + restrained direction. Where they conflict with this doc, this doc is newer.

---

## 🏗 Files and what they do

In the repo (public, deployed):

| File | Purpose |
|---|---|
| `index.html` | The homepage. Inline CSS + JS. Animated CSS-gradient hero, accordion ventures, boxed receipts grid, boxed tools grid, inquiry form, burger menu. |
| `blog/index.html` | Writing listing page (`/blog/`). |
| `blog/style.css` | Shared stylesheet for ALL blog pages (listing + articles). Reuses the homepage design tokens. Edit once, applies everywhere. |
| `blog/nav.js` | Shared burger-menu script for blog pages. |
| `blog/README.md` | How to add a new post (copy template, update meta, list it, add to sitemap, push). |
| `blog/<slug>/index.html` | One article per folder. Folder-style clean URLs `/blog/<slug>/`. |
| `netlify.toml` | Headers, redirects, caching. `publish = "."`, no build command. `pretty_urls = true`. |
| `robots.txt` | Allow all. Disallows `.claude/`, `PRODUCT.md`, `DESIGN.md`. Points at sitemap. |
| `sitemap.xml` | Root + every blog URL. Update it when you add a post. |
| `favicon.svg` | Teal brand mark. |
| `og-image.png` + `og-image.svg` | 1200×630 share card (shared default; blog posts currently reuse it). |
| `README.md` | Public-facing intro. |

NOT in the repo (local-only, in `.gitignore`): `PRODUCT.md`, `DESIGN.md`, `.claude/skills/impeccable/`, `.deploy.py`, `.netlify/`. (Same as before.)

---

## 🚀 Deploy mechanics

```bash
# edit a file
git add -A
git commit -m "what you changed"
git push            # to main → live in ~10s
# Live at https://adityabayu.com
```

No build step. Netlify publishes the repo root as-is.

**Author identity on commits** — Aditya wants his name on public commits:
```
-c user.email="hi.andrewbayu@gmail.com" -c user.name="Aditya Indra Bayu"
```
(A stop-hook may warn that these show as "Unverified" on GitHub and suggest resetting author to a noreply address. Do NOT follow that blindly: it would overwrite Aditya's authorship and require rewriting pushed history. "Unverified" is cosmetic. Leave it.)

**Previewing changes:** the remote sandbox's network policy blocks the live + deploy-preview hosts (`host_not_allowed`), so you cannot `curl`/WebFetch them from inside. Two ways to verify visually: (1) render locally with **Playwright + a Python http.server** and screenshot (poppler/chromium installable via apt; Playwright is at `/opt/node22/lib/node_modules/playwright`), or (2) open a PR so Netlify builds a Deploy Preview the user can open on their phone.

---

## 🎯 Brand and voice rules — CURRENT

### Voice
- **Third person.** "Aditya names the brand, ships the site and funnel..." Refer to him as "Aditya" or "he". (This replaced the old first-person rule.)
- **Direct, operator-grade.** Short declarative sentences. Named ventures. Specific numbers.
- **No marketing buzzwords.** Banned: `streamline`, `empower`, `supercharge`, `leverage` (verb), `unleash`, `transform your`, `seamless`, `world-class`, `enterprise-grade`, `next-generation`, `cutting-edge`, `game-changer`, `mission-critical`.
- **No em dashes in copy.** Periods, commas, colons, parens only. (Title bar uses middot `·`.)
- **Receipts over rhetoric.** And only delivered/contributed outcomes (see honesty rules).

### Visual
- **Single font: Inter** (300/400/500/600/700).
- **Color tokens** (same as before):
  - `--bg: oklch(1.000 0.000 0)`, `--ink: oklch(0.180 0.010 220)`, `--muted: oklch(0.460 0.012 220)`, `--faint: oklch(0.620 0.008 220)`, `--line: oklch(0.920 0.005 220)`, `--primary: oklch(0.420 0.095 200)`, `--primary-h: oklch(0.345 0.100 200)`.
- **Hero is now an animated CSS gradient** (teal → blue → indigo/violet, drifting via `background-position`) with a **cursor-following spotlight** (`header.hero::after`, position set from `--mx/--my` updated by a small pointermove script; opacity rises on hover via `--hover`). Reduced-motion pauses the drift. The old WebGL canvas/shader was fully removed.

### Direction note (Aditya is steering toward more "designed", less austere)
This session Aditya repeatedly chose flashier/more-structured over the original ultra-restrained Naval/PG aesthetic. Boxed card grids and a colored animated hero are now wanted. Don't reflexively re-impose the old minimalism. When in doubt, build it, screenshot it, let him react.

### Patterns that are now OK (previously banned — reversed this session)
- **Boxed metric grids ARE used now.** Receipts and Tools are both **2-column boxed card grids** with `border-radius: 5px`, hairline borders, hover border-darken. The old "no metric-tile receipts grid" / "no identical card grids" bans are lifted for these deliberate uses.

### Still avoid
- No SaaS-cream tiny uppercase eyebrows on every section (sections are h2 + hairline).
- No `01 / 02 / 03` numbered scaffolding without a real sequence.
- No glass, gradient text, side-stripe borders, decorative drop caps.
- No agency-template energy (carousels, stock teamwork photos, "#1 agency").

---

## 📋 Current site state (as of last push)

### Homepage sections (in order)
1. **Hero.** Looping cinematic video backdrop (`public/hero.mp4`, ~1.08MB, cityscape; Gemini watermark cropped out via ffmpeg). Scroll parallax + mouse parallax + navy legibility scrim + film grain. Video loads on desktop + motion-allowed only; gradient mesh is the mobile/reduced-motion/JS-off fallback. Cursor spotlight kept. White text, third-person lede. Headline stat + profile badge show **$12M** ("Accumulated revenue across all clients handled"). Built in `src/sections/Hero.jsx`.
2. **Now status board.** 4 cards (Gentem, IMI, Calibreworks+WAI, Available · Fractional CMO).
3. **How I work.** Two paragraphs. *(May still contain first-person — check when sweeping.)*
4. **The venture portfolio.** `<details>` accordion, 9 rows / 10 ventures. Expand/collapse all.
5. **Receipts.** Now an **8-card boxed 2-column grid** (metric + context per card), written neutrally. Footnoted to the disclaimer.
6. **Tools and frameworks.** Heading is "Tools and frameworks." (dropped "I built"). Now a **12-card boxed 2-column grid** with teal SVG icons + kind label + name + note. First-person copy neutralized.
7. **Brands in the lab.** Inline prose.
8. **Contact.** Email CTA + 3 socials, then an inquiry form posting to the same-origin `/api/contact/` SMTP function (crypto ref ID per submission, e.g. `AB123`). Shared helper `submitContact` in `src/lib/forms.js`.
9. **Footnotes** (case-claim disclaimer).
10. **Footer.**

**Nav** (all pages, consistent): Ventures · Receipts · Built · **Writing** · Contact. Mobile = burger menu (`#nav-toggle` → `nav.top.menu-open`, animates to X, closes on link/Escape). Homepage nav also color-flips white over the hero.

### Writing / blog
- `/blog/` listing + articles at `/blog/<slug>/`. Hand-authored, no build step, shared `blog/style.css` + `blog/nav.js`.
- Articles live so far (8, drafts unless noted otherwise — **facts need Aditya's review**):
  - `xniper-hybrid-behavioral-synthetic-modeling` — public-safe paper-style adaptation of the Xniper Product Whitepaper v1.0 (May 2026): HBSM formula, XRE context layer, 100 digital humans, 200 Monte Carlo trials each, 20,000 data points, 9 calibrated tools, Xniper Boost, and roadmap. Sensitive implementation details omitted.
  - `growth-curve-method-2026` — public 2026 adaptation of Aditya's original Growthlab Growth Curve Method: Content Pillar, Supporting Content, Content Route/Guideways, cadence, analytics and optimization, with source-result framing (3X traffic, 5-7X touchpoints, CPC down 60-80%, CPL down 28%).
  - `dental-clinic-multi-branch-growth` — Jakarta dental clinic 6→10 branches via Meta+Google ads, website funnel, Cekat.ai CS, Calibreworks CRM. 120→421 leads/month, Rp300M/month, 6-7x ROAS. **NDA: keep the clinic name generic.** Period: November 2025.
  - `hypebuzz-brand-from-zero` — HypeBuzz trend-media brand built from zero (3.1M views, 5.2M reach, 670K engagement).
  - `hacktiv8-scholarship-pr-campaign` — Hacktiv8 data-science scholarship, PR + performance, 8X ROAS.
  - `bpr-triastra-rebrand` — BPR Hisobhan → BPR Triastra rebrand, #BeraniBerubah.
  - `aboitiz-gold-coin-kicaufest` — Gold Coin / KicauFest community case study.
  - `wall-street-english-turnaround` — WSE strategy/metrics rebuild.
- Each post has: unique title/description, canonical, OG + Twitter, **BlogPosting JSON-LD**, disclaimer line. Listing has CollectionPage JSON-LD.
- To add a post: see `blog/README.md`.

### Ventures (10) — unchanged
Calibreworks (CEO), We Are Infiniti (Founder), Growthlab Academy (Founder), PT Inovasi Maritim (CMO), Gentem Lifelong Learning (Acting Head of DM), Genstarkids (Founder), Kinema (Founder), Vantara Boat (Founder), Street Talk · UrbanLuxe Atelier · Skelup (incubating, bundled).

### Tools & Frameworks (12) — unchanged set
William 3.0 · Andrew Bayu Agent System v1 · Level Ads Framework · Ad-in-a-Box Kit · ContentStrategist Toolkit · Growth Curve Method · AEO / AIO Strategy · Revenue Engine Model · PeakMind · CharaGen2 · Xniper · Arxea · Skelup.

### Receipts figures on the page
WSE Rp156B / Hacktiv8 +200% / Aboitiz·KicauFest 10M+ reach + 30K+ community / HypeBuzz 3.1M views + 670K engagement / Calibreworks Clutch Top 100 / We Are Infiniti 300+ / Growthlab 50+. **Disclaimer applies to all; don't remove it.**

### Things explicitly removed (don't re-add)
- Kata.ai growth proposal (never executed).
- Engineer/Singapore/Enderworks backstory paragraph.
- "Andromeda Ads Engine" (renamed to Level Ads Framework).
- The entire **WebGL fluid hero shader + `<canvas id="hero-canvas">`** (replaced by the CSS gradient this session).

---

## 📌 Pending / open items

- **Finish the third-person sweep.** Still likely first-person: the hero **h1** ("I start, operate, and scale ventures…"), the **How I work** section, and **Contact** copy. The receipts + tools grids are already neutralized.
- **More case studies from the deck.** Source: `Aditya Indra Bayu - Projects & Campaign.pdf` (21-page deck Aditya uploaded). Still to write: **We Are Infiniti** (the agency itself — use the "brand/agency from zero, 300+ business owners" angle, NOT the HypeBuzz numbers, see resolved conflict below). A "Selected work" roundup could cover Bank Jateng, GermKiller, SilkyGirl (Genmatte launch), CIMB Niaga. (Done already: HypeBuzz, Hacktiv8, BPR Triastra, Aboitiz/KicauFest, WSE.)
- **RESOLVED — 3.1M views / 670K engagement = HypeBuzz.** Aditya confirmed these are HypeBuzz's, not We Are Infiniti's. The deck's "We Are Infiniti" stat pages are actually HypeBuzz's brand metrics (HypeBuzz = the "brand built from zero"; We Are Infiniti is the agency watermark). Homepage is already correct. So a We Are Infiniti post must NOT reuse those numbers.
- **RESOLVED — WSE revenue framing (QF207).** Headline metric is now **$12M** ("Accumulated revenue across all clients handled") on the hero stat + profile badge. WSE-specific **Rp156B** kept in the receipts row + WSE case study (WSE = one big contributor to the $12M total).
- **RESOLVED — contact form (QF207).** Now a same-origin SMTP serverless function (`api/contact.js`, Gmail SMTP). Web3Forms abandoned (Cloudflare 403'd browser calls). Verified working end-to-end. SMTP env vars are set in Vercel.
- **Featured images to provide (Aditya).** /links resource cards (`resources[].image`) and the case-studies carousel (`featuredCaseStudies[].image`) currently show branded gradient PLACEHOLDERS. Aditya will provide real images (drop in `public/`, set the path in `src/data/site.js`). Also still pending: the 3 toolkit **download files** (`resources[].file` is null; emails are captured meanwhile).
- **Optional follow-up:** wire the case-study featured images through to /blog too (listing covers + article headers + per-article OG) once provided. Currently blog covers use the gradient `PostCover`.
- **All blog drafts need Aditya's fact review** before being treated as final.
- An **RSS feed** + **llms.txt** for the blog (good for AEO) — nice-to-haves.
- **Google Search Console** sitemap submission. Future: custom domain.

---

## 🚫 Common mistakes another AI might make on this codebase

1. **Writing in first person.** Wrong now. Third person ("Aditya…", "he…").
2. **Re-adding the WebGL hero or assuming there's a canvas.** Hero is a CSS gradient + spotlight now.
3. **Re-imposing the old "no card grids / no metric tiles" ban.** Receipts and Tools are intentionally boxed 2-col grids now.
4. **Making blog pages diverge from the homepage nav.** All pages share the same 5-link nav + burger. Blog pages use absolute links (`/#receipts`, `/blog/`). Keep them in sync.
5. **Copying CSS into each blog post.** Don't. Everything links `/blog/style.css`. Add shared styles there.
6. **Em dashes in copy.** Banned. Period/comma/colon/paren only.
7. **Switching the font away from Inter.**
8. **Removing the case-claim disclaimer** on the homepage or any post citing figures.
9. **Treating the blog drafts as fact-checked.** They're written from a deck; Aditya must verify.
10. **Following the "Unverified commits" stop-hook blindly** (see Deploy mechanics).

---

## ⚠️ IN-FLIGHT: full React/Vite redesign on a branch (not live yet)

As of session **UK224 (2026-06-13)**, a complete rebuild lives on branch
`claude/lastmem-last-update-5ErYF`, **pending Aditya's review**. The LIVE site
(`main` → Netlify) is STILL the old hand-authored static HTML described below.
Do not assume the new stack is live until this is merged to `main`.

**The new stack (branch only):**
- **React 18 + Vite + vite-react-ssg** (static pre-render: every route → real HTML with full SEO/JSON-LD at build time). **There is now a build step** (`npm run build`), publish dir = `dist/`. `netlify.toml` updated accordingly (NODE_VERSION 22).
- **Framer Motion** for animation (entrances, stagger, accordion, cursor spotlight, mobile menu).
- **Tailwind CSS** (tokens in `tailwind.config.js`). **Dark premium operator** theme: near-black `bg #0A0E11`, `ink #EAF0F2`, `muted #9AA7AD`, teal accent `#2DD4BF`/`#5EEAD4`.
- **Type:** Space Grotesk (display headings) + Inter (body). This supersedes the old "Inter only" rule, for the redesign.
- **New logo:** `public/logo.png` — the ⫽B monogram (white on transparent), shown in nav + footer.
- **Structure:** `src/` (components, sections, pages, posts, data, lib, styles). Homepage content in `src/data/site.js`. Blog posts are JSX modules in `src/posts/<slug>.jsx` (meta + Body), aggregated by `src/posts/index.js`. Sitemap auto-generated by `scripts/postbuild.mjs`, which also folders blog output to `/blog/<slug>/index.html`.
- Old static site preserved in `legacy/` (gitignored, local-only) and in git history on `main`.
- All content (10 ventures, receipts, 13 tools, 6 blog posts incl. dental NDA case) ported faithfully. Third-person voice kept. Inquiry ref-ID (`AB123`) kept.

**To review:** `npm install && npm run build`, serve `dist/` (e.g. `cd dist && python3 -m http.server`). Or open a Netlify Deploy Preview from a PR. **Do NOT merge to `main` until Aditya approves the direction.**

---

## 🔖 Session log
| ID    | Date       | Agent  | Summary |
|-------|------------|--------|---------|
| QF208 | 2026-06-22 | Claude | **Paid course at `learn.adityabayu.com` — "The Operator Playbook"** (one-time/lifetime). Stack adds: **Xendit** Invoice API (`api/checkout.js` → creates invoice + `pending` enrollment; `api/xendit-webhook.js` → verifies `x-callback-token`, flips to `paid` via Supabase service-role) + **Supabase** (Auth magic-link/OTP + Postgres + RLS) for entitlements & paid lesson content. **Repo is PUBLIC → paid lesson bodies live ONLY in Supabase** (`lessons.body_md`, RLS); repo carries public-safe `src/course/curriculum.js`, free preview `operators-first-30-days`, landing. New UI: `src/pages/{LearnHome,Lesson}.jsx`, `src/components/{Paywall,LearnAuth,LearnNav}.jsx`, `src/lib/{supabase,course-access}.js`; lessons via `react-markdown`+`remark-gfm` in `<Prose>`. **Subdomain served by Edge Middleware** (`middleware.js`, `@vercel/edge`) rewriting `learn.*` `/`→`/learn/`, **PLUS host-aware client routes** in `src/routes.jsx` (`window.location.host` `learn.` → `/`→LearnHome) — without the client piece React repainted the homepage over the course (curl=course, browser=homepage; the session's main rabbit hole). Single Vercel project (NOT two; a `VITE_COURSE_BUILD` two-project attempt was reverted). **Gotcha burned 2 deploys: `vercel.json` must have NO `comment`/non-schema keys or the build ERRORs.** SQL: `supabase/schema.sql`; gitignored draft bodies `course-content/seed.sql` (need Aditya fact-review). Env (Vercel): `XENDIT_SECRET_KEY`, `XENDIT_CALLBACK_TOKEN`, `COURSE_PRICE_IDR`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `VITE_SUPABASE_*`, `VITE_COURSE_PRICE_LABEL` (`.env.example`). Build `789c5af` READY; verified course live at `abayuworks.vercel.app/learn/` + `www.adityabayu.com/learn/`. **#1 TODO: user must RE-ADD `learn.adityabayu.com` to the `abayuworks` Vercel project** (was detached during the abandoned two-project plan → currently 404s; DNS still points). Then create Supabase project + run schema/seed, set Xendit + env vars, confirm IDR price. Plan: `~/.claude/plans/zazzy-hatching-axolotl.md`. |
| QF207 | 2026-06-20 | Claude | (1) **Contact form migrated off Web3Forms.** Web3Forms' browser API was blocked by its Cloudflare bot-protection (CORS preflight + 403 from ID IPs, reproduced in incognito). Built same-origin `api/contact.js` (Vercel Node fn, nodemailer over Gmail SMTP). Helper renamed `submitWeb3Forms`→`submitContact` (`src/lib/forms.js`), posts to `/api/contact/`. SMTP_* env vars set in Vercel (SMTP_PASS = Gmail App Password, needs 2FA; App Passwords are hidden — get at myaccount.google.com/apppasswords). Verified email delivered. (2) **Hero video backdrop.** Looping cityscape clip → `public/hero.mp4` (1.08MB; Gemini watermark cropped via `ffmpeg crop=1080:720:0:0`) + `public/hero-poster.jpg`. Scroll + mouse parallax, navy scrim, grain, desktop+motion-only with gradient fallback (`src/sections/Hero.jsx`). ffmpeg installed via winget (Gyan.FFmpeg). (3) **/links overhaul.** Same video backdrop via new `VideoBg.jsx` (desktop ≥1024 only; mobile/tablet get gradient). Equal-height resource cards (removed `h-full`, rely on `align-items:stretch`; new `CardImage.jsx`). Featured-image placeholders on resource cards (`resources[].image`). New `CaseStudyCarousel.jsx` (top 3: WSE, dental clinic, HypeBuzz; data in `featuredCaseStudies`, site.js). Removed the old "Case studies" link button. (4) **Revenue metric** Rp156B → **$12M** "Accumulated revenue across all clients handled" (hero stat + profile badge); WSE Rp156B kept in receipts + WSE case study. |
| GJ899 | 2026-06-16 | Claude | (1) Visual pass: gradient PostCover for blog cards/headers; hero split layout with desktop profile card (now uses real photo `public/aditya-bayu.webp`) + floating stat badges; BlogIndex → 2-col grid. (2) MIGRATED Netlify → **Vercel**: `vercel.json` (clean URLs, trailing slash, headers), removed `netlify.toml`. Contact form → **Web3Forms** (key in `VITE_WEB3FORMS_KEY`, see `.env.example`). (3) Favicon → //B brand mark (favicon.png/ico + apple-touch-icon). (4) Link-in-bio page at **/links** (standalone, no nav/footer) for social bios: photo, intro, contact CTA, social row. (5) Lead-magnet **funnel** on /links: `ResourceCarousel` swipe cards (intent-segmented), `type: download` = email-gated via Web3Forms (instant on-page delivery once `file` set; until then email captured + Aditya delivers manually), `type: guide` = ungated blog links. Data in `resources` (site.js). Shared form helpers in `src/lib/forms.js`. NOTE: 3 toolkit download files still pending from Aditya (file: null). |
| MS500 | 2026-06-13 | Claude | Rebrand of the React site: fonts → General Sans (Fontshare), colors → Aditya's brand palette applied DARK. Tokens: bg #1A1B25, ink #FFFFFF, muted #B4AFA8, accent cream #FFE8D4 (text/highlights), brand blue #1C3D73 (CTA fills + hero gradient only; too dark for text on navy). All teal removed. Contrast verified (cream 14.5:1, muted 7.85:1, white-on-blue CTA 10.7:1). |
| UK224 | 2026-06-13 | Claude | LIVE: full redesign merged to main. React + Vite + Framer Motion + Tailwind + vite-react-ssg, dark premium theme, new ⫽B logo, Space Grotesk + Inter. Homepage + blog (8 posts, incl. ported Growth Curve 2026 + Xniper HBSM from SK690) rebuilt. Netlify now build-based (npm run build → dist). Old static site in git history; JW581/CT692 visual packs superseded by the rebuild. |
| SK690 | 2026-06-11 | Codex | Added 2 local blog drafts. Xniper source Google Doc access was opened and article was rewritten against Product Whitepaper v1.0 as public-safe HBSM/XRE article. Growth Curve source access was also opened and article was rewritten against the original Growthlab framework with 2026 digital marketing updates. |
| VE137 | 2026-06-10 | Antigravity | Ignore local-only skill directories in .gitignore, commit and push to main. |
| RK847 | 2026-06-10 | Claude | Context handoff close. No code changes. Last live commit: JW581 (hero+nav pack). |
| JW581 | 2026-06-09 | Claude | Hero + nav improvement pack (static site, superseded by UK224 rebuild). |
| CT692 | 2026-06-09 | Claude | Visual design + UX pack (static site, superseded by UK224 rebuild). |
| NH693 | 2026-06-09 | Claude | Installed ui-ux-pro-max skill (committed to repo). Ran its a11y audit. Fixes: skip-link now reveals on focus (homepage + all 7 blog pages, with `#main` targets); `--faint`-as-text (3.63:1, fails AA) swapped to `--muted` (7:1) everywhere it was used for labels/captions/footnotes/footer. Contrast rule added to GUIDELINES §1. |
| CF198 | 2026-06-09 | Claude | New blog post: Jakarta dental clinic 6→10 branches case study. Listed on /blog/, added to sitemap. Brand kept generic (source did not name the clinic). |
| AA018 | 2026-06-09 | Claude | Third-person sweep (h1, meta, "How he works", ventures, contact). Inquiry ref ID `AB123` on contact form. Session ID rule added to GUIDELINES §9. |

---

## 📜 Recent commits (most recent first)

```
83b3f00  Hero: headline revenue metric -> $12M accumulated (was Rp156B/WSE)
b6f972a  links: fix equal card heights; gate video backdrop to desktop only
669c4ff  links: video backdrop, featured-image resource cards, case-studies carousel
e1fefc6  Hero: swap to cinematic cityscape clip (Gemini watermark cropped), mp4-only
9d43f85  Hero: looping video backdrop with scroll + mouse parallax, scrim, grain
c49a7d3  Revert temporary SMTP error exposure in /api/contact
65af3ae  Contact form: replace Web3Forms with same-origin /api/contact SMTP fn
f24bf88  (earlier attempt) Web3Forms as FormData to dodge CORS preflight
```
Blog has 8 posts (incl. Growth Curve 2026 + Xniper HBSM). See `GUIDELINES.md`/`blog/README.md` for how to add more. Contact form is now SMTP via `api/contact.js` (not Web3Forms).

---

## 🔧 Useful commands

```bash
# Local preview (any static server)
python3 -m http.server 8099   # then http://localhost:8099
# or: npx http-server . -p 8088 -c-1

# Screenshot a page from the sandbox (since live/preview hosts are blocked here)
#   serve with python http.server, then drive Playwright (chromium) and .screenshot()

# Re-generate the OG image PNG from the SVG source
node -e "const sharp=require('sharp');const fs=require('fs');sharp(Buffer.from(fs.readFileSync('og-image.svg')),{density:200}).resize(1200,630).png({quality:95,compressionLevel:9}).toFile('og-image.png').then(()=>console.log('rebuilt'));"
```

---

## 🤝 Working with Aditya

- **Language.** Mixes Indonesian and English freely. Reply in English unless he writes a whole message in Indonesian (then reply Indonesian).
- **Decisive.** "No, forget it" = drop it. "Ganti aja" = just do the substitution.
- **Iteration style.** Small focused requests, fast ship. He reacts to *seeing* things — screenshot or deploy-preview after each change rather than describing. He overrode several brand rules this session by reacting to results.
- **Receipts honesty.** He will correct overclaims (Kata.ai removal, Andromeda rename came from him). Match that standard; that's why the two data conflicts above must be reconciled.
- **Deploy.** He's happy pushing to `main` for live changes (gave explicit go-ahead repeatedly this session). Still, default to a branch + ask before pushing to `main` unless he says go.

---

End of LASTMEM. Update this file when you ship anything material. It's committed to the public repo by design, so no secrets.
