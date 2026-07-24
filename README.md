# emindev.net
<img width="1919" height="1079" alt="Ekran görüntüsü 2026-07-25 001236" src="https://github.com/user-attachments/assets/772ac7b5-4d95-4f23-92a0-0cd0d672da61" />

my personal website. blog, projects, that sort of thing.

built with [Astro](https://astro.build/), cms [Sanity](https://www.sanity.io/), deployed on [Vercel](https://vercel.com/).

## stack

- astro 5, server mode, vercel adapter
- sanity cms for content
- tailwind css v4
- react for portable text rendering
- pagefind for search

## running locally

```bash
npm install
npm run dev
```

you'll need a `.env` file:
examplle
```env
SANITY_PROJECT_ID=xxxxxxxx
SANITY_DATASET=production
```

## admin panel

the sanity studio lives at `/admin`. to rebuild it:

```bash
npm run build:admin
```

this builds to `public/admin/` and fixes the asset paths. the output is committed so vercel can serve it without rebuilding.

## building

```bash
npm run build
```

runs type check then builds for vercel.

## structure

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
│   └── admin.astro  # redirects to /admin/index.html
├── styles/          # global.css
└── consts.ts        # site config
sanity/
├── schemas/         # sanity content types
├── config.ts
└── cli.ts
```


