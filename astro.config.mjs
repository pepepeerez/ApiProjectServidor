// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    server: {
      fs: {
        allow: ['..'] // Asegúrate de que esté solo si realmente lo necesitas
      }
    }
  }
});
