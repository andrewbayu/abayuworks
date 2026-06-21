import Layout from './components/Layout';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Links from './pages/Links';
import LearnHome from './pages/LearnHome';
import Lesson from './pages/Lesson';
import { postSlugs } from './posts';
import { lessonSlugs } from './course/curriculum';

export const routes = [
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
  // Paid course (learn.adityabayu.com -> /learn via Vercel host-rewrite).
  // Standalone chrome (LearnNav), outside the marketing-site Layout.
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
