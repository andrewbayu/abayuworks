# adityabayu.io · venture builder portfolio

One-page operator portfolio for Aditya Indra Bayu.

Static `index.html`, no build step. Deploys to Netlify on push.

## Live

- **Production:** https://adityabayu.com

## Stack

- Plain HTML, Inter via Google Fonts, inline CSS + JS
- WebGL fluid hero shader (no library, ~2 KB of GLSL)
- Inline SVG icon sprite
- IntersectionObserver scroll reveals (respects `prefers-reduced-motion`)

## Local preview

Any static server works. Example:

```bash
npx http-server . -p 8088 -c-1
```

Then open http://localhost:8088
