import Layout from './components/Layout';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Links from './pages/Links';
import LearnHome from './pages/LearnHome';
import Lesson from './pages/Lesson';
import { postSlugs } from './posts';
import { lessonSlugs } from './course/curriculum';

// Two build targets from ONE repo:
//   - Default (apex, adityabayu.com): the marketing site + blog + links.
//   - Course build (learn.adityabayu.com): the course AT THE ROOT, so the
//     client router matches "/" -> LearnHome with no rewrite/host hacks.
// The course Vercel project sets VITE_COURSE_BUILD=1; the apex project leaves it
// unset. The flag is read at build time and inlined into the bundle.
const COURSE_BUILD =
  import.meta.env.VITE_COURSE_BUILD === '1' || import.meta.env.VITE_COURSE_BUILD === 'true';

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
];

// Course lives at the root of the learn.* deployment. Clean URLs throughout:
// /  -> landing, /<slug>/ -> lesson.
const courseRoutes = [
  { path: '/', element: <LearnHome /> },
  {
    path: '/:slug',
    element: <Lesson />,
    getStaticPaths: () => lessonSlugs.map((s) => `/${s}`),
  },
];

export const routes = COURSE_BUILD ? courseRoutes : siteRoutes;
