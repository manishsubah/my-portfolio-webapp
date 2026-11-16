// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Change to your real domain once you have one (used for SEO/canonical URLs).
  site: 'https://your-domain.dev',
  vite: { plugins: [tailwindcss()] },
});
