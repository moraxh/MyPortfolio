// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui': ['lucide-react', 'sonner']
          }
        }
      }
    }
  },

  build: {
    inlineStylesheets: 'auto'
  },

  integrations: [react()],
  
  compressHTML: true
});