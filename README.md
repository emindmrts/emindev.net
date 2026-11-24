<div align="center">

# emindev.net

A blog & portfolio built with **Astro**, **Sanity CMS**, and **Tailwind CSS** — open source and ready to fork.

[Live site](https://emindev.net) · [Deploy your own](#deploy-to-vercel) · [Open an issue](https://github.com/emindmrts/emindev.net/issues)

<img width="1919" height="1079" alt="emindev.net homepage" src="https://github.com/user-attachments/assets/772ac7b5-4d95-4f23-92a0-0cd0d672da61">

[![CI](https://github.com/emindmrts/emindev.net/actions/workflows/ci.yml/badge.svg)](https://github.com/emindmrts/emindev.net/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)](https://astro.build)

</div>

## Features

- **Sanity-powered content** — posts and projects managed in a visual CMS, no code needed to publish
- **Built-in admin panel** — Sanity Studio served at `/admin`, prebuilt and committed
- **Full-text search** — client-side search via [Pagefind](https://pagefind.app), no backend required
- **Blog, projects & tags** — index, detail, and tag pages with prev/next navigation
- **RSS feed & sitemap** — generated automatically
- **Comments** — [Giscus](https://giscus.app) integration for post discussions
- **Now-playing widget** — Spotify preview endpoint that works without API keys
- **Tailwind CSS v4** — fast styling with the new engine
- **SSR on Vercel** — server output with the Vercel adapter

## Stack

| Layer | Tech |
| --- | --- |
| Framework | [Astro 5](https://astro.build) (server output, Vercel adapter) |
| CMS | [Sanity v3](https://www.sanity.io) with embedded Studio |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Rich text | [Portable Text](https://portabletext.org) rendered with React |
| Search | [Pagefind](https://pagefind.app) |
| Comments | [Giscus](https://giscus.app) |
| Hosting | [Vercel](https://vercel.com) |

## Quick start

```bash
git clone https://github.com/emindmrts/emindev.net.git
cd emindev.net
npm install
```

Create a `.env` file in the project root:

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

Then start the dev server:

```bash
npm run dev
```

The site is now running at `http://localhost:4321`. Without a `.env`, the site falls back to the demo Sanity project — create your own at [sanity.io/manage](https://www.sanity.io/manage) to use your own content.

## Content & admin panel

All posts and projects live in Sanity. The Studio (admin UI) is served at `/admin`. To rebuild it:

```bash
npm run build:admin
```

This builds the Studio into `public/admin/` and fixes asset paths. The output is committed so Vercel can serve it without rebuilding.

Content schemas are defined in [`sanity/schemas`](sanity/schemas).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Femindmrts%2Femindev.net&env=SANITY_PROJECT_ID,SANITY_DATASET&project-name=emindev-blog)

Or push the repo to GitHub, import it in Vercel, add `SANITY_PROJECT_ID` and `SANITY_DATASET` as environment variables, and deploy.

## Project structure

```
src/
├── assets/          # images
├── components/      # astro components + react (portable text)
├── layouts/         # layout
├── lib/             # sanity client, queries, utils
├── pages/           # routes
│   ├── blog/        # /blog, /blog/:slug
│   ├── projects/    # /projects, /projects/:slug
│   ├── tags/        # /tags, /tags/:tag
│   └── api/         # /api/spotify (now-playing preview)
├── styles/          # global.css
└── consts.ts        # site config — title, socials, page sizes
sanity/
├── schemas/         # sanity content types
├── config.ts
└── cli.ts
scripts/             # admin build path fix
public/admin/        # prebuilt sanity studio (committed)
```

## Contributing

Found a bug or want to suggest an improvement? [Open an issue](https://github.com/emindmrts/emindev.net/issues) — pull requests are welcome.

## License

[MIT](LICENSE) © [emindmrts](https://github.com/emindmrts)
