// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      GITHUB_USERNAME: envField.string({ context: 'server', access: 'public' }),
      FIGMA_LINK: envField.string({ context: 'server', access: 'public' }),
      LOOKING_FOR_JOB: envField.boolean({ default: true, context: 'server', access: 'public' }),
      WORKING_SINCE: envField.string({ context: 'server', access: 'public' }),
      EMAIL: envField.string({ context: 'server', access: 'public' }),
      LINKEDIN: envField.string({ context: 'server', access: 'public' }),
    }
  },
});