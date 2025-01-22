// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  env: {
    schema: {
      BASE_URL: envField.string({ context:'server', access:'public' }),
      GITHUB_USERNAME: envField.string({ context: 'server', access: 'public' }),
      FIGMA_LINK: envField.string({ context: 'server', access: 'public' }),
      LOOKING_FOR_JOB: envField.boolean({ default: true, context: 'server', access: 'public' }),
      WORKING_SINCE: envField.string({ context: 'server', access: 'public' }),
      EMAIL: envField.string({ context: 'server', access: 'public' }),
      LINKEDIN: envField.string({ context: 'server', access: 'public' }),
    }
  }
});