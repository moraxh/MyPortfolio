// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      BLOB_READ_WRITE_TOKEN: envField.string({ context: 'server', access: 'public' }),
      GITHUB_USERNAME: envField.string({ context: 'server', access: 'public' }),
      FIGMA_LINK: envField.string({ context: 'server', access: 'public' }),
      LOOKING_FOR_JOB: envField.boolean({ default: true, context: 'server', access: 'public' }),
      WORKING_SINCE: envField.string({ context: 'server', access: 'public' }),
      EMAIL: envField.string({ context: 'server', access: 'public' }),
      LINKEDIN: envField.string({ context: 'server', access: 'public' }),
    }
  },
});