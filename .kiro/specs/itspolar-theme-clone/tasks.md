# Implementation Plan: itspolar-theme-clone

## Overview

Implement the itspolar.dev visual design clone on the astro-micro Astro theme. All tasks are pure styling/markup changes — no new dependencies, no routing changes.

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "tasks": ["1", "2", "5", "6", "7"],
      "description": "Independent tasks — consts, CSS, ArrowCard, Link, Head theme default"
    },
    {
      "wave": 2,
      "tasks": ["3", "4"],
      "description": "Header and Footer — depend on consts.ts (Task 1)"
    },
    {
      "wave": 3,
      "tasks": ["8"],
      "description": "Homepage rework — depends on Header, Footer, ArrowCard, Link being done"
    },
    {
      "wave": 4,
      "tasks": ["9"],
      "description": "Final verification — depends on all previous tasks"
    }
  ]
}
```

---

## Tasks

- [x] 1. Update `src/consts.ts` — remove emoji from SITE.TITLE
  - Change `TITLE: "Astro Micro"` to a clean title without the 🔬 emoji suffix
  - Update `SITE.EMAIL` to a real email address placeholder
  - **Requirements**: 9.1, 9.4

- [x] 2. Restyle `src/styles/global.css` — polar dark palette and base styles
  - [x] 2.1 Change default `color-scheme` in `html` to `dark` (not `light`)
  - [x] 2.2 Replace `body` background from `bg-neutral-100 dark:bg-neutral-900` to `#0c0c0c` (dark-only baseline)
  - [x] 2.3 Replace `body` text from `text-black/75 dark:text-white/75` to `rgba(255,255,255,0.70)` in dark mode
  - [x] 2.4 Make `header` fully transparent — remove `bg-neutral-100/75 dark:bg-neutral-900/75`, `saturate-200`, `backdrop-blur-xs`
  - [x] 2.5 Update `pre` code block border to `border-white/8`
  - [x] 2.6 Update dark-mode Shiki CSS variables: set `--astro-code-background: #111111` and `--astro-code-foreground: #f0f0f0`
  - [x] 2.7 Update `.copy-code` button to use `dark:bg-[#111111]` and `border-white/8`
  - [x] 2.8 Update `article a` link styles to use blue accent (`text-blue-400`, `decoration-blue-400/40`, hover to `text-blue-300`)
  - **Requirements**: 1.1, 1.2, 1.3, 1.6, 1.7, 3.1, 6.4, 8.1, 8.2, 8.3, 8.4

- [x] 3. Update `src/components/Header.astro` — minimal transparent nav
  - Remove emoji from site title link text
  - Change nav link classes to `text-white/50` with `hover:text-white` transition
  - Remove `border` and filled background from search button; apply ghost style with `border-white/10`
  - **Requirements**: 3.2, 3.3, 3.4

- [x] 4. Update `src/components/Footer.astro` — slim copyright-only footer
  - Remove the three theme toggle buttons (light, dark, system)
  - Replace footer content with: copyright text on left + `SITE.EMAIL` mailto link on right
  - Apply `text-white/40` to footer text
  - Keep the `BackToTop` component
  - **Requirements**: 4.1, 4.2, 4.3, 4.4, 4.5

- [x] 5. Update `src/components/ArrowCard.astro` — low-contrast dark card
  - Change border from `dark:border-white/20` to `border-white/8`
  - Change hover bg from `dark:hover:bg-white/5` to `hover:bg-white/5` (dark-only baseline)
  - Change hover text to `hover:text-white`
  - Change rounded from `rounded-lg` to `rounded-md`
  - Set title to `text-white/90` and description to `text-white/50`
  - **Requirements**: 5.1, 5.2, 5.3, 5.4, 5.5

- [x] 6. Update `src/components/Link.astro` — blue accent links
  - Replace `text-current` with `text-blue-400`
  - Replace `hover:text-black dark:hover:text-white` with `hover:text-blue-300`
  - Replace `decoration-black/30 dark:decoration-white/30` with `decoration-blue-400/40`
  - Replace hover decoration with `hover:decoration-blue-300/60`
  - **Requirements**: 6.1, 6.2, 6.3

- [x] 7. Update `src/components/Head.astro` — default to dark mode
  - In `preloadTheme()`, change the `else` fallback branch to call `toggleTheme(true)` instead of `toggleTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)` so the site defaults to dark when no preference is stored
  - **Requirements**: 1.5

- [x] 8. Rework `src/pages/index.astro` — polar-style personal homepage
  - [x] 8.1 Replace the `<h1>` intro with a friendly greeting (e.g., `hiya! i'm polar`) in `text-2xl font-semibold text-white`
  - [x] 8.2 Add a subtitle/bio line below the greeting in `text-white/70`
  - [x] 8.3 Remove the `.animate` class from the intro section so it appears immediately
  - [x] 8.4 Rename the "Latest posts" section heading to "writing" (lowercase, `text-sm font-semibold text-white/50`)
  - [x] 8.5 Rename the "Recent projects" section heading to "projects" (lowercase, same style)
  - [x] 8.6 Rename the "Let's Connect" section heading to "contact" (lowercase, same style)
  - [x] 8.7 Keep `.animate` on all sections below the intro for staggered fade-in
  - **Requirements**: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 2.2, 2.4, 2.5

- [x] 9. Verify build and visual output
  - Run `astro check` — confirm zero TypeScript errors
  - Run `astro build` — confirm build completes with no errors
  - Run `astro preview` and visually verify: dark background, white headings, blue links, minimal header, slim footer, low-contrast cards
  - Confirm no JavaScript console errors on page load (verify theme toggle button removal is graceful)
  - **Requirements**: 10.3, 10.4, 4.6

## Notes

- All tasks are confined to existing source files — `package.json` must not change.
- Tasks 2–7 are largely independent and can be worked in any order; Task 8 benefits from seeing Tasks 3–6 complete so the visual result can be assessed together.
- Task 7 (default-dark behavior) changes the fallback from system-preference-based to always-dark. This is intentional and matches itspolar.dev's design intent.
- The theme toggle buttons in the footer are removed but the `toggleTheme()` and `updateThemeButtons()` functions in `Head.astro` remain — they're harmless when their target DOM elements don't exist because of existing optional chaining (`?.`).
- Typography sizes (`text-2xl`, `text-sm`, etc.) use Tailwind v4 utilities and do not require custom CSS.
- All color values in tasks reference Tailwind v4 utility classes where possible; raw hex is used only where Tailwind utilities don't cover the exact value (e.g., `background-color: #0c0c0c` in global.css body override).
