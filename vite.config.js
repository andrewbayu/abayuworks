import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    // These ship ESM-only; let Vite bundle them for the SSG render pass.
    noExternal: ['framer-motion', 'react-markdown', 'remark-gfm'],
  },
});
