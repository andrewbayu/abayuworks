# LASTMEM — Project Memory for AI Agents

> If you're an AI agent opening this repo cold, **read this file first.** It's the handoff doc Aditya leaves himself between sessions. Skim the top, then read sections that match the task.

Last updated: 2026-06-07 by Claude (Sonnet) in a session ending after the SEO pack ship.

---

## ⚡ 60-second briefing

**Owner.** Aditya (Andrew) Indra Bayu. Venture Builder & Fractional CMO. South Tangerang, Indonesia. Email: `hi.andrewbayu@gmail.com` (work). Personal: `andrew.bayu23@gmail.com` (legacy, don't use on the site).

**What this is.** A single-page operator portfolio at `index.html`. Static HTML, no build step. Goal: produce inbound for **operator-seat engagements** (Fractional CMO, co-build, agency work) from CEO/founder-level peers. Reference aesthetic: Naval, Paul Graham, Pieter Levels — text-forward, restrained, low-chrome.

**Live.** https://aditya-bayu.netlify.app
**Repo.** https://github.com/andrewbayu/abayuworks (public)
**Netlify admin.** https://app.netlify.com/projects/aditya-bayu
**Local path.** `C:\Users\andre\Website-1`

**Deploy = `git push`.** Pushing to `main` auto-deploys to Netlify in ~10 seconds. No CI, no build step.

**The single source of truth for design decisions is `DESIGN.md` and `PRODUCT.md`** (local-only, in `.gitignore`, NOT in the repo). If you don't have them, look at the existing `index.html` head and CSS variables to infer the system, but ask the user before guessing about voice or anti-references.

---

## 🏗 Files and what they do

In the repo (public, deployed):

| File | Purpose |
|---|---|
| `index.html` | The entire site. Inline CSS + JS. WebGL fluid hero, accordion ventures, inquiry form, etc. ~2000 lines. |
| `netlify.toml` | Headers, redirects, caching. `publish = "."`, no build command. |
| `robots.txt` | Allow all. Disallows `.claude/`, `PRODUCT.md`, `DESIGN.md`. Points at sitemap. |
| `sitemap.xml` | One URL: the root. |
| `favicon.svg` | Teal brand mark on dark teal background. |
| `og-image.png` + `og-image.svg` | 1200×630 share card. Deep teal, white name, mint hero line. PNG is what gets served (broader platform support). SVG is the source. |
| `README.md` | Public-facing intro. |
| `.gitignore` | Excludes `.claude/`, `PRODUCT.md`, `DESIGN.md`, `.deploy.py`, `.netlify/`, `node_modules/`. |

NOT in the repo (local-only, in `.gitignore`):

| File / dir | Purpose |
|---|---|
| `PRODUCT.md` | Strategic brief: register, users, voice, anti-references, design principles. **Read first if editing copy.** |
| `DESIGN.md` | Visual system: OKLCH tokens, type scale, motion rules, component conventions. **Read first if editing visual layer.** |
| `.claude/skills/impeccable/` | Impeccable design system skill. Has commands like `craft`, `polish`, `audit`, `critique`, `animate`. Invoke with `/impeccable <command> <target>` if available. |
| `.deploy.py` | Manual API-based deploy fallback (rarely needed since auto-deploy works). |
| `.netlify/` | Netlify CLI local state. |

---

## 🚀 Deploy mechanics

**Normal workflow:**

```bash
# edit index.html (or any file in the repo)
git add -A
git commit -m "what you changed"
git push
# Live at https://aditya-bayu.netlify.app in ~10 seconds
```

**No build step.** Netlify just publishes what's at the repo root. The `[build]` block in `netlify.toml` says `publish = "."` with no command.

**Auto-deploy is wired** via Netlify ↔ GitHub OAuth (configured once in Netlify dashboard, see commit `eed36b4`'s discussion).

**Author identity on commits** — use:
```
-c user.email="hi.andrewbayu@gmail.com" -c user.name="Aditya Indra Bayu"
```
(There's no global git user config set on the machine; you must pass these per-commit.)

**If auto-deploy ever breaks**, the manual fallback is `python .deploy.py` with `NETLIFY_AUTH_TOKEN` env var. The script lives locally and is gitignored.

---

## 🎯 Brand and voice rules — DO NOT VIOLATE

Pulled from `PRODUCT.md` and `DESIGN.md`. These are the rules that make this site distinct.

### Voice

- **First person.** "I build companies" not "We craft solutions."
- **Direct, operator-grade.** Short declarative sentences. Named ventures. Specific numbers.
- **No marketing buzzwords.** Banned: `streamline`, `empower`, `supercharge`, `leverage` (as a verb), `unleash`, `transform your`, `seamless`, `world-class`, `enterprise-grade`, `next-generation`, `cutting-edge`, `game-changer`, `mission-critical`.
- **No em dashes in copy.** Use periods, commas, colons, parens. (Title bar uses middot `·` instead.)
- **Receipts over rhetoric.** If a sentence could appear unchanged on another operator's site, rewrite it.

### Visual

- **Single font: Inter** (300/400/500/600/700). One family, weight contrast does the hierarchy.
- **Color: restrained.** Pure white surface, near-black ink, single mineral-teal accent. Teal in under 10% of surface.
  - `--bg: oklch(1.000 0.000 0)`
  - `--ink: oklch(0.180 0.010 220)`
  - `--muted: oklch(0.460 0.012 220)`
  - `--faint: oklch(0.620 0.008 220)`
  - `--line: oklch(0.920 0.005 220)`
  - `--primary: oklch(0.420 0.095 200)` (the teal)
  - `--primary-h: oklch(0.345 0.100 200)` (hover)
- **Hero is the exception.** WebGL fluid teal block with white text. Single dramatic moment.

### Forbidden patterns (impeccable absolute bans — verified by audit)

- **No SaaS-cream eyebrows.** Tiny uppercase tracked labels above every section (`PROFILE`, `WHAT I DO`). The 2026 AI default. Sections are delimited by hairline + h2 only.
- **No 01 / 02 / 03 numbered section scaffolding.** Numbers earn their place only if there's a real sequence.
- **No identical card grids.** Same-sized cards with icon + heading + text repeated. The Now status board has 4 cards but they're a deliberate operating-status moment, not a template.
- **No hero metric tile templates.** The "Rp156B / Big number" template for receipts is banned. Use inline prose with bolded numbers.
- **No glass, no gradient text, no side-stripe borders, no decorative drop caps.**
- **No agency template energy.** Carousels, stock teamwork photos, services tile grid, "#1 agency in Indonesia." This is an operator portfolio, not an agency landing page.

---

## 📋 Current site state (as of last push)

### Sections (in order)

1. **Hero.** WebGL fluid teal canvas + white text. Headline + lede + inline-prose receipts row.
2. **Now status board.** 4 cards. Active operating commitments: Gentem (Head of DM), IMI (CMO), Calibreworks+WAI (CEO/Founder), Available · Fractional CMO (CTA card).
3. **How I work.** Two paragraphs of operator voice. *Engineer/Singapore/Enderworks backstory paragraph was deleted by user request.*
4. **The venture portfolio.** `<details>/<summary>` accordion. 9 rows, 10 ventures (Street Talk + UrbanLuxe + Skelup bundled in one row). Expand all / Collapse all buttons.
5. **Receipts.** Single inline-prose paragraph with bolded numbers + named-brand attribution. Footnoted to the disclaimer.
6. **Tools and frameworks I built.** `<dl>` definition list, 12 items with kind labels (AI Copilot, Agent System, Framework, Creative Kit, Content System, Web App, Generative, Content Generator, Maritime AI, Platform) and inline SVG icons.
7. **Brands in the lab.** Inline prose listing.
8. **Have a venture to build? (Contact).** Email CTA + 3 social icons (LinkedIn/IG/TikTok). Then "Or send a structured inquiry" → Netlify Forms with name/email/company/engagement_type/message.
9. **Footnotes.** Case-claim disclaimer for the receipts.
10. **Footer.** © + Venture Builder · Indonesia + source link to GitHub.

### Ventures (10)

| # | Name | Role | Industry | Status |
|---|---|---|---|---|
| 1 | Calibreworks | CEO | Agency | Owned (Clutch Top 100) |
| 2 | We Are Infiniti | Founder | Agency | Owned (300+ brands served) |
| 3 | Growthlab Academy | Founder | EdTech | Owned |
| 4 | PT Inovasi Maritim | CMO | Maritime | Operator |
| 5 | Gentem Lifelong Learning | Acting Head of DM | Education group | Operator (WSE, CURIOOkids, INDIES) |
| 6 | Genstarkids | Founder | EdTech | Owned |
| 7 | Kinema | Founder & super admin | Film | Owned (service-as-software, jadwalnonton scrape, Gemini analysis) |
| 8 | Vantara Boat | Founder | Maritime | Owned |
| 9 | Street Talk · UrbanLuxe Atelier · Skelup | Founder | Multi | Incubating (bundled in one row) |

### Tools & Frameworks (12)

`William 3.0` · `Andrew Bayu Agent System v1` · `Level Ads Framework` (renamed from "Andromeda" because that's Meta's ML system) · `Ad-in-a-Box Kit` · `ContentStrategist Toolkit` · `Growth Curve Method` · `AEO / AIO Strategy` · `Revenue Engine Model` · `PeakMind` · `CharaGen2` · `Xniper` (live at xniperapp.vercel.app, Vite + React + Firebase + Gemini) · `Arxea` · `Skelup`

### Receipts on the page (case-claim figures)

- **Wall Street English Indonesia**: Rp156B revenue within 1.5 years
- **Hacktiv8**: +200% course registrations
- **Aboitiz / KicauFest**: 10M+ reach, 30K+ community growth, 3 seasons
- **HypeBuzz**: 3.1M TikTok views, 670K engagement
- **Calibreworks**: Clutch.co Top 100
- **We Are Infiniti**: 300+ business owners
- **Growthlab Academy**: 50+ entrepreneurs mentored

**The disclaimer at the page footer applies to all of these** ("Reported case figures reflect contributions to team outcomes during the engagements described, not sole-authored results"). Don't remove it.

### Things explicitly removed (don't re-add by mistake)

- **Kata.ai growth proposal** — was on the page briefly, removed because it was a proposal Aditya wrote but the work never executed. Receipts must only contain delivered/contributed outcomes.
- **Engineer / Singapore / Enderworks backstory paragraph** in How I work — user removed it. Don't re-introduce.
- **"Andromeda Ads Engine"** — renamed to "Level Ads Framework" because Andromeda is Meta's ad ML system, the name collision read as confused.

---

## 📌 Pending / open items

- **Netlify form email notification** is the one open chore. The inquiry form (`<form name="contact">` in `index.html`) submits successfully to Netlify Forms, but Aditya needs to do a one-time dashboard step: https://app.netlify.com/projects/aditya-bayu/forms → click `contact` → Settings & usage → Outgoing notifications → Add Email notification → to `hi.andrewbayu@gmail.com`. Until that's done, submissions land in the Netlify dashboard but no email arrives.
- **Google Search Console** submission for the sitemap. Domain verification + `Sitemaps → submit sitemap.xml`.
- **Future, not yet planned**: custom domain (e.g. `adityabayu.com`). When added, update canonical URL, sitemap.xml, og:url, og-image footer URL, and twitter:image URL in `index.html`.

---

## 🚫 Common mistakes another AI might make on this codebase

1. **Adding a Services / Skills section.** Aditya considered this in a previous session and explicitly decided against it — it tips the page into agency-template territory. The form's `engagement_type` dropdown is the canonical "what can you hire me for" answer.
2. **Adding eyebrow labels above sections.** Tiny uppercase tracked labels (`PROFILE`, `THE VENTURE PORTFOLIO`). This is the SaaS-cream AI default. We deliberately removed them in the polish pass.
3. **Converting the venture rows into a card grid.** The accordion treatment was a deliberate choice for scannability. The previous flat-row list was also fine. Don't make them tiles.
4. **Building a metric-tile receipts grid.** Banned. Inline prose with bold numbers is the operator form here.
5. **Using em dashes in copy.** Banned. Period/comma/colon/paren only.
6. **Switching the font away from Inter.** User specifically chose Inter; the brand reference flags Inter as a reflex-default but identity-preservation wins here.
7. **Adding decorative motion to every section.** The WebGL hero is the one ambitious moment. Other sections use restrained scroll-fade-in reveals with `IntersectionObserver`. Don't add more.
8. **Removing the case-claim disclaimer footnote.** Required for legal/credibility reasons since numbers are team-outcome contributions.

---

## 📜 Recent commits (most recent first)

```
23d4e15  Ship SEO pack: OG + Twitter Card + Person schema + favicon + robots + sitemap
4efe7ac  Accordion ventures, inquiry form, work email
f87f4b9  Add Kinema and Xniper, rename Andromeda to Level Ads Framework
eed36b4  Add GitHub source link to footer
97eba6f  Initial commit: venture builder portfolio
```

---

## 🔧 Useful commands

```bash
# Local preview (any static server works)
npx http-server . -p 8088 -c-1
# then http://localhost:8088

# Re-generate the OG image PNG from the SVG source
node -e "const sharp=require('sharp');const fs=require('fs');sharp(Buffer.from(fs.readFileSync('og-image.svg')),{density:200}).resize(1200,630).png({quality:95,compressionLevel:9}).toFile('og-image.png').then(()=>console.log('rebuilt'));"

# Verify SEO assets live
curl -sS -I https://aditya-bayu.netlify.app/og-image.png | head -3
curl -sS https://aditya-bayu.netlify.app/robots.txt
curl -sS https://aditya-bayu.netlify.app/sitemap.xml

# LinkedIn share preview test (force re-crawl)
# https://www.linkedin.com/post-inspector/  → paste URL → Inspect

# Google rich-results test (verify Schema.org Person markup)
# https://search.google.com/test/rich-results → paste URL
```

---

## 🤝 Working with Aditya

- **Language.** Mixes Indonesian and English freely. He'll often write Indonesian ("bikin", "skrg", "udah", "kemudian", "tambahin") inside otherwise-English direction. Reply in English unless he writes a whole message in Indonesian.
- **Decisions.** He's decisive. When he says "no, forget it" he means drop the idea entirely, not "convince me." When he says "ganti aja" he wants the substitution done, not options.
- **Receipts honesty.** He will correct you if you overclaim. The Kata.ai removal and the Andromeda rename both came from him correcting things on the page that didn't accurately reflect what he shipped. Match that standard.
- **Iteration style.** Small focused requests, expects fast ship. Pushes via `git push` after every meaningful change. The 10-second auto-deploy is part of the rhythm — don't batch up 5 changes before pushing.
- **Tokens he's pasted in chat.** A Netlify PAT and a GitHub PAT were pasted in earlier sessions. Both were one-shot — used once and not saved to any file. Don't request them again unless something's actually broken; the auto-deploy pipeline doesn't need them anymore.

---

End of LASTMEM. Update this file when you ship anything material — append to recent commits, update pending items, add new banned patterns or copy decisions when they come up. The file is committed to the public repo by design, so don't put secrets here.
