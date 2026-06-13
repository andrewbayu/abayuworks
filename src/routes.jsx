import Layout from './components/Layout';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import { postSlugs } from './posts';

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
];
