# Portfolio

A single-page portfolio with a blog, built with **Astro 5** and **Tailwind CSS 4**.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Make it yours

| What | Where |
|---|---|
| Name, roles, bio, stats, skills, jobs, projects, links | `src/data/site.ts` |
| Colors, fonts, light/dark theme | `src/styles/global.css` (`:root` tokens) |
| Your photo | replace `public/portrait.svg` (and update `site.portrait`) |
| Project screenshots | add images to `public/` and set each project's `image` |
| Blog posts | add `.md` files to `src/content/blog/` |
| Social share image | add `public/og-image.png` (1200×630) |
| Résumé | add `public/resume.pdf` |
| Real domain | `site` in `astro.config.mjs` |

## Structure

```
src/
  data/site.ts          ← all content
  layouts/Base.astro    ← <head>, SEO tags, fonts, scroll-reveal
  components/           ← Header, Hero, About, Skills, Experience,
                          Background, Projects, Journal, Contact, Footer
  pages/                ← index, blog/, blog/[slug], thanks, 404
  content/blog/         ← Markdown posts
```

## Deploy (Netlify)

1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git**. `netlify.toml` already sets the build.
3. The contact form uses **Netlify Forms**: submissions appear under *Forms* in your Netlify dashboard (enable form detection the first time).
4. Add a custom domain under *Domain management*.
