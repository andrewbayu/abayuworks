import Layout from './components/Layout';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Links from './pages/Links';
import PreflightChecklist from './pages/PreflightChecklist';
import PreflightThankYou from './pages/PreflightThankYou';
import LearnHome from './pages/LearnHome';
import Lesson from './pages/Lesson';
import { postSlugs } from './posts';
import { lessonSlugs } from './course/curriculum';

// Full route tree, used for SSG prerender (Node has no `window`, so the course
// pages are generated under /learn/*) and for the apex site on the client.
const siteRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'blog',
        children: [
          { index: true, element: <BlogIndex /> },
          {
            path: ':slug',
            element: <BlogPost />,
            // Enumerate concrete paths for static generation.
            getStaticPaths: () => postSlugs.map((s) => `/blog/${s}`),
          },
        ],
      },
    ],
  },
  // Standalone link-in-bio page — no shared nav/footer chrome.
  { path: '/links', element: <Links /> },
  // Standalone lead-magnet landing page (Meta Ads pre-flight checklist) +
  // post-opt-in thank-you page where the download link lives.
  { path: '/preflight-checklist', element: <PreflightChecklist /> },
  { path: '/preflight-checklist/thank-you', element: <PreflightThankYou /> },
  // Paid course. On adityabayu.com it lives at /learn/*; the learn.* subdomain
  // serves the same prerendered HTML via the Vercel Edge Middleware rewrite.
  {
    path: '/learn',
    children: [
      { index: true, element: <LearnHome /> },
      {
        path: ':slug',
        element: <Lesson />,
        getStaticPaths: () => lessonSlugs.map((s) => `/learn/${s}`),
      },
    ],
  },
];

// On the learn.adityabayu.com host, the middleware rewrites "/" -> "/learn/" and
// "/<slug>/" -> "/learn/<slug>/" at the server, so the prerendered course HTML is
// served. But the browser URL stays at "/" — so the CLIENT router must also map
// the root to the course, otherwise React Router matches "/" to the apex Home
// and repaints the homepage over the course. These routes mirror what the
// middleware does, keeping the in-page links (/learn/...) working too.
const learnHostRoutes = [
  { path: '/', element: <LearnHome /> },
  { path: '/:slug', element: <Lesson /> },
  { path: '/learn', element: <LearnHome /> },
  { path: '/learn/:slug', element: <Lesson /> },
];

const onLearnHost =
  typeof window !== 'undefined' && window.location.host.startsWith('learn.');

export const routes = onLearnHost ? learnHostRoutes : siteRoutes;
