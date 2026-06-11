# LASTMEM — Project Memory for AI Agents

> If you're an AI agent opening this repo cold, **read this file first.** It's the handoff doc Aditya leaves himself between sessions. Skim the top, then read sections that match the task.
>
> For the stable **rules and step-by-step playbooks** (how to add an article, edit the homepage, SEO/honesty checklists), see **`GUIDELINES.md`**. This file (LASTMEM) is current *state + history*; GUIDELINES is the *rulebook*.

Last updated: 2026-06-11 by Codex (session SK690). Added Growth Curve Method 2026 and Xniper HBSM blog posts locally. Both Google Docs were later opened and both articles were aligned to source: Xniper to the May 2026 product whitepaper, Growth Curve to the original Growthlab framework with a public 2026 update.

---

## ⚡ 60-second briefing

**Owner.** Aditya (Andrew) Indra Bayu. Venture Builder & Fractional CMO. South Tangerang, Indonesia. Email: `hi.andrewbayu@gmail.com` (work). Personal: `andrew.bayu23@gmail.com` (legacy, don't use on the site).

**What this is.** An operator portfolio. Homepage is `index.html` (single page). There is now also a **Writing/blog section** at `/blog/` (case studies). Static HTML, no build step. Goal: inbound for **operator-seat engagements** (Fractional CMO, co-build, agency work) from CEO/founder-level peers.

**Voice is now THIRD person.** "Aditya builds companies," not "I build companies." This reversed the original first-person rule (Aditya asked for it mid-session; the first-person voice read as cringe to him). Most of the homepage is converted; a few spots may remain (see pending).

**Live.** https://adityabayu.com
**Repo.** https://github.com/andrewbayu/abayuworks (public)
**Netlify admin.** https://app.netlify.com/projects/aditya-bayu
**Local path.** `C:\Users\andre\Website-1`

**Deploy = push to `main`.** Pushing to `main` auto-deploys to Netlify in ~10 seconds. No CI, no build step. (This session work happened on a feature branch with PRs/merges, but the deploy trigger is still `main`.)

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
1. **Hero.** Animated colored-gradient block + cursor spotlight. White text. Third-person lede ("Aditya (Andrew) Indra Bayu builds companies..."), inline receipts row.
2. **Now status board.** 4 cards (Gentem, IMI, Calibreworks+WAI, Available · Fractional CMO).
3. **How I work.** Two paragraphs. *(May still contain first-person — check when sweeping.)*
4. **The venture portfolio.** `<details>` accordion, 9 rows / 10 ventures. Expand/collapse all.
5. **Receipts.** Now an **8-card boxed 2-column grid** (metric + context per card), written neutrally. Footnoted to the disclaimer.
6. **Tools and frameworks.** Heading is "Tools and frameworks." (dropped "I built"). Now a **12-card boxed 2-column grid** with teal SVG icons + kind label + name + note. First-person copy neutralized.
7. **Brands in the lab.** Inline prose.
8. **Contact.** Email CTA + 3 socials, then Netlify Forms inquiry form.
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
- **Still open — WSE revenue framing.** Deck says **>$10M revenue / 300K leads**; homepage says **Rp156B**. Same account, different framings. Pick the canonical number with Aditya.
- **All 5 blog drafts need Aditya's fact review** before being treated as final.
- **Netlify form email notification** (still not done). Dashboard step: Forms → `contact` → Settings & usage → Outgoing notifications → Add Email → `hi.andrewbayu@gmail.com`. Can't be done from the code sandbox (no Netlify token, no dashboard access). Aditya said he'd set it up.
- **Per-article OG images** (currently reuse the shared one), an **RSS feed** + **llms.txt** for the blog (good for AEO) — nice-to-haves.
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

## 🔖 Session log
| ID    | Date       | Agent  | Summary |
|-------|------------|--------|---------|
| SK690 | 2026-06-11 | Codex | Added 2 local blog drafts. Xniper source Google Doc access was opened and article was rewritten against Product Whitepaper v1.0 as public-safe HBSM/XRE article. Growth Curve source access was also opened and article was rewritten against the original Growthlab framework with 2026 digital marketing updates. |
| VE137 | 2026-06-10 | Antigravity | Ignore local-only skill directories in .gitignore, commit and push to main. |
| RK847 | 2026-06-10 | Claude | Context handoff close. No code changes. Last live commit: JW581 (hero+nav pack). |
| JW581 | 2026-06-09 | Claude | Hero + nav improvement pack: @property spotDrift auto-spotlight, mesh gradient aurora blobs, noise texture, kinetic shimmer on h1 em, scroll-cue chevron, floating pill nav after hero, active section nav links, mobile menu rounded blur, nav scroll-shrink via pill. |
| CT692 | 2026-06-09 | Claude | Visual design + UX pack: spring card-hover lift (receipt + built cards), hero CTA button, larger receipt metrics (clamp 1.8–2.4rem), native dark mode, built grid 3-col desktop, smooth accordion expand (interpolate-size), cursor-pointer on CTA card, reading progress bar CSS restored for blog. |
| NH693 | 2026-06-09 | Claude | Installed ui-ux-pro-max skill (committed to repo). Ran its a11y audit. Fixes: skip-link now reveals on focus (homepage + all 7 blog pages, with `#main` targets); `--faint`-as-text (3.63:1, fails AA) swapped to `--muted` (7:1) everywhere it was used for labels/captions/footnotes/footer. Contrast rule added to GUIDELINES §1. |
| CF198 | 2026-06-09 | Claude | New blog post: Jakarta dental clinic 6→10 branches case study. Listed on /blog/, added to sitemap. Brand kept generic (source did not name the clinic). |
| AA018 | 2026-06-09 | Claude | Third-person sweep (h1, meta, "How he works", ventures, contact). Inquiry ref ID `AB123` on contact form. Session ID rule added to GUIDELINES §9. |

---

## 📜 Recent commits (most recent first)

```
d021190  Post: HypeBuzz trend-media brand-from-zero case study
0981402  Merge: Hacktiv8 and BPR Triastra case studies
9802f53  Merge: add GUIDELINES.md rulebook and playbooks
42e469f  Merge: update LASTMEM handoff doc
6a7595c  Merge: consistent nav across homepage and blog
a8ad02a  Merge: add Writing/blog section + KicauFest case study
e84aeba  Merge: animated colored gradient hero with cursor spotlight
d1f43f9  Merge: third-person hero, boxed receipts + tools grids, burger menu
23d4e15  Ship SEO pack (earlier session)
```
Blog now has 5 case studies (HypeBuzz, Hacktiv8, BPR Triastra, Aboitiz/KicauFest, WSE). See `GUIDELINES.md` for how to add more.

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
