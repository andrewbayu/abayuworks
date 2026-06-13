import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  ssr: {
    // framer-motion ships ESM; let Vite bundle it for the SSG render pass.
    noExternal: ['framer-motion'],
  },
});
