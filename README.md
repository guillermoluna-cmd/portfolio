# Portfolio · Guillermo Luna

Web personal y de servicios freelance: desarrollo de software, automatización e IA y closer de ventas. Bilingüe (español en `/`, inglés en `/en/`), con modo claro/oscuro.

Hecha con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # genera la web estática en dist/
```

## Editar contenido

- **Textos (ES/EN):** `src/i18n/content.ts`. Cada texto aparece dos veces, una por idioma.
- **Email, LinkedIn, GitHub, Calendly:** objeto `profile` al inicio de `src/i18n/content.ts`. Los enlaces vacíos no se muestran; si `calendly` está vacío, "Agenda una llamada" abre un email.
- **Diseño y secciones:** `src/components/Page.astro`. Colores en `src/styles/global.css`.
- **Foto:** pon la imagen en `public/` y sustituye el bloque "GL" de la sección *Sobre mí* (hay un comentario indicándolo).

## Publicación (GitHub Pages)

Cada push a `main` publica la web con `.github/workflows/deploy.yml`.
Una sola vez: en GitHub, **Settings → Pages → Source → GitHub Actions**.

URL: https://guillermoluna-cmd.github.io/portfolio/

Para usar un dominio propio, cambia `site` y elimina `base` en `astro.config.mjs`.
