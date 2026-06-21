import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  server: { port: 5181, host: true },
  devToolbar: { enabled: false },
  site: 'https://gts-hitech.com'
});
