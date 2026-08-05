# Nuvora — Next.js Template

Sustainable architecture & real estate template, converted from the original static
HTML template to **Next.js 16** (App Router) + **React 19** + **TypeScript**. Every
page is faithful to the source design and prerenders to static HTML.

**Live demo:** https://nuvora-nextjs.vercel.app/

## Requirements

- Node.js **20 or newer**
- npm (ships with Node)

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build (all routes prerender static)
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## How it works

- The template's **original stylesheet** (`public/assets/css/styles.css` + `fonts.css`)
  and self-hosted fonts (Mona Sans, Instrument Serif) are used unchanged — no
  utility framework, no build-time CSS pipeline.
- The original markup and class names are reproduced inside React components, so
  every page matches the source pixel-for-pixel.
- All interactivity is a single client component, `src/components/nuvora-scripts.tsx`,
  porting the template's original `main.js`: scroll reveal, full-screen hamburger
  menu, testimonial tabs, slot-roll counters, the image/video lightbox, blog
  category filter, custom checkboxes, autoplay video, and a `localStorage` cart with
  checkout and order confirmation.

## Content

The three CMS collections and the plans are a **content layer** — add or edit a file
and its page updates on the next build:

| Content   | Location                          | Drives                                   |
| --------- | --------------------------------- | ---------------------------------------- |
| Blog      | `src/content/blog/*.mdx`          | `/blog` + `/blog/<slug>`                 |
| Projects  | `src/content/projects/*.mdx`      | `/project` + `/project/<slug>`           |
| Services  | `src/content/services/*.mdx`      | `/service/<slug>`                        |
| Products  | `src/content/products.json`       | `/product/<handle>`, `/pricing` + cart   |

MDX frontmatter holds the structured fields; the Markdown body is the long-form text
and renders inside the template's original rich-text wrappers. Loaders live in
`src/lib/content.ts`. Every other page is a plain `page.tsx` under `src/app/` — edit
text and `<img>` sources directly. Header and footer are shared in
`src/components/layout/`.

## Deployment

Prerenders to static HTML, so it deploys anywhere that runs Next.js. On Vercel, import
the repo at [vercel.com/new](https://vercel.com/new) — no configuration needed.

## License

See [LICENSE.md](LICENSE.md). Use is governed by the license you purchased on the
marketplace where you obtained this template.
