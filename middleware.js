// Vercel Edge Middleware — serves the learn.adityabayu.com subdomain from the
// /learn subtree.
//
// Why middleware and not a vercel.json rewrite: vercel.json `rewrites` are
// "afterFiles" — they only fire when no static file matches the path. Since
// dist/index.html exists at "/", visiting learn.adityabayu.com/ would serve the
// apex homepage and the rewrite never runs. Middleware runs BEFORE the
// filesystem, so it can remap "/" correctly.
import { rewrite, next } from '@vercel/edge';

export const config = {
  // Run on page paths only. Skip /api, /assets, and any file with an extension
  // (.css/.js/.png/.xml/...), which must resolve at their real apex path.
  matcher: ['/((?!api/|assets/|.*\\.).*)'],
};

const LEARN_HOST = 'learn.adityabayu.com';

export default function middleware(request) {
  const host = request.headers.get('host') || '';
  if (host !== LEARN_HOST) return next();

  const url = new URL(request.url);
  if (url.pathname.startsWith('/learn')) return next();

  // Trailing slash on purpose (trailingSlash:true) so /learn/ resolves to the
  // prerendered index.html directly without a 308 redirect.
  url.pathname = url.pathname === '/' ? '/learn/' : `/learn${url.pathname}`;
  return rewrite(url);
}
