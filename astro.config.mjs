import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lab.xtreme-systems.com',
  prefetch: true,
  build: {
    format: 'directory'
  }
});
