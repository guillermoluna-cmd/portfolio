// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://guillermoluna-cmd.github.io/portfolio
// Si más adelante usas dominio propio, cambia `site` y elimina `base`.
export default defineConfig({
  site: 'https://guillermoluna-cmd.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
