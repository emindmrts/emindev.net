# Requirements Document

## Introduction

Transform the astro-micro blog theme to visually match the aesthetic of itspolar.dev — a dark-first, minimal, single-column developer portfolio. The transformation is purely visual/stylistic: no new routing, integrations, or npm packages. All changes land within the existing source files.

---

## Requirements

### 1. Dark-First Color Palette

**User Story**: As a visitor, I want the site to default to a very dark theme so the aesthetic matches itspolar.dev's quiet, professional look.

#### Acceptance Criteria

- 1.1 The page background color must be `#0c0c0c` (near-black) in dark mode.
- 1.2 Body text must be rendered at approximately 70% white opacity (`rgba(255,255,255,0.70)`) for a muted tone.
- 1.3 Headings (`h1`, `h2`, `h3`) must render in full white (`#ffffff`).
- 1.4 Secondary / timestamp text must be at approximately 40% white opacity (`rgba(255,255,255,0.40)`).
- 1.5 The site must default to dark mode when no user preference is stored in `localStorage` (i.e., `preloadTheme()` defaults to dark rather than reading system preference).
- 1.6 The `color-scheme: dark` property must be set on `<html>` in dark mode to prevent browser-chrome flash.
- 1.7 Borders throughout the site must use very low-opacity white (`rgba(255,255,255,0.08)` or `border-white/8`) to be subtle dividers rather than strong visual separators.

---

### 2. Typography

**User Story**: As a visitor, I want the typography to feel clean, geometric, and minimal so it reinforces the developer-portfolio aesthetic.

#### Acceptance Criteria

- 2.1 Geist Sans must remain the primary font family (already installed via `@fontsource/geist-sans`).
- 2.2 The `<h1>` greeting on the homepage must be rendered at `text-2xl` (24px) with `font-semibold` weight.
- 2.3 Body paragraph text must use the default `text-base` size (16px) with normal weight.
- 2.4 Heading weights across the site must use `font-semibold` (600) consistently.
- 2.5 Section labels (e.g., "writing", "projects", "contact") must be `text-sm font-semibold text-white/50` — subdued but readable.

---

### 3. Minimal Transparent Header

**User Story**: As a visitor, I want the header to be visually minimal and non-obtrusive so the content takes focus rather than a heavy navigation bar.

#### Acceptance Criteria

- 3.1 The `header` element must have a transparent (or near-transparent) background — the current `bg-neutral-900/75 + backdrop-blur` styling must be removed.
- 3.2 The site title link in the header must render without an emoji suffix (e.g., "polar" not "Astro Micro 🔬").
- 3.3 Navigation link text (blog, projects) must render at a muted opacity (`text-white/50`) with a hover state that brightens to `text-white`.
- 3.4 The search button must use a ghost/border-only style (`border-white/10`) with no filled background.
- 3.5 The header must remain `position: fixed` at the top of the viewport.

---

### 4. Slim Footer

**User Story**: As a visitor, I want the footer to be minimal — just a copyright notice and email — so it doesn't distract from the content above it.

#### Acceptance Criteria

- 4.1 The footer must display `© {year} · {SITE.TITLE}` on the left side.
- 4.2 The `SITE.EMAIL` value must be rendered as a clickable `mailto:` link on the right side of the footer.
- 4.3 The light-theme, dark-theme, and system-theme toggle buttons must be removed from the footer.
- 4.4 Footer text must use muted white (`text-white/40`) to keep it visually recessive.
- 4.5 The `BackToTop` component must be retained in the footer.
- 4.6 Removing the theme toggle buttons must not cause any JavaScript errors in `Head.astro`'s inline scripts (all `getElementById` calls for the removed buttons must safely handle `null` via optional chaining).

---

### 5. Low-Contrast ArrowCard

**User Story**: As a visitor, I want blog post and project cards to feel integrated with the dark background, not visually heavy, so the list of posts feels like a natural part of the page.

#### Acceptance Criteria

- 5.1 The card border must use `border-white/8` (very low opacity) instead of the current `dark:border-white/20`.
- 5.2 The hover background must be `hover:bg-white/5` — a very subtle tint.
- 5.3 The hover text color must brighten to `text-white` on hover.
- 5.4 The card border radius must be `rounded-md` (slightly less rounded than the current `rounded-lg`).
- 5.5 The card title must render at `text-white/90` and the description at `text-white/50`.

---

### 6. Accent-Colored Links

**User Story**: As a visitor, I want hyperlinks to be visually distinct from body text using a subtle blue accent, matching the itspolar.dev link style.

#### Acceptance Criteria

- 6.1 All `Link` component instances must render with `text-blue-400` (`#60a5fa`) as the base color.
- 6.2 On hover and focus, link color must transition to `text-blue-300` (`#93c5fd`).
- 6.3 Link underline decoration must use `decoration-blue-400/40` at rest, transitioning to `decoration-blue-300/60` on hover.
- 6.4 Inline links inside `article` prose content must also follow the blue accent color scheme.
- 6.5 The color contrast ratio of `#60a5fa` on `#0c0c0c` must be ≥ 4.5:1 (WCAG AA) — approximately 5.9:1.

---

### 7. Polar-Style Homepage

**User Story**: As a visitor, I want the homepage to open with a personal greeting and structured sections (writing, projects, contact) that feel like a developer portfolio rather than a blog index.

#### Acceptance Criteria

- 7.1 The homepage must open with a large greeting heading (e.g., `hiya! i'm polar`) in full white at `text-2xl font-semibold`.
- 7.2 Below the greeting must be a short bio/role description in muted text (`text-white/70`).
- 7.3 The "Latest posts" section heading must be renamed to "writing" in the polar-style lowercase format.
- 7.4 The "Recent projects" section heading must be renamed to "projects" in lowercase.
- 7.5 A "contact" section must exist at the bottom of the homepage featuring the social links and email.
- 7.6 All homepage sections below the intro must use the `.animate` class for staggered fade-in on load.
- 7.7 The intro (greeting + bio) must appear immediately without the `.animate` delay.

---

### 8. Code Block Dark Palette

**User Story**: As a reader of blog posts, I want code blocks to be styled consistently with the dark theme, using appropriate dark-mode Shiki colors.

#### Acceptance Criteria

- 8.1 The code block background (`--astro-code-background`) must be `#0a0a0a` or `#111111` in dark mode.
- 8.2 The code block foreground (`--astro-code-foreground`) must be `#f0f0f0` or `#fafafa` in dark mode.
- 8.3 The `pre` element border must use `border-white/8` to match the low-contrast border style.
- 8.4 The copy-code button must use `dark:bg-[#111111]` background to blend with the code block.

---

### 9. Site Title Update

**User Story**: As the site owner, I want the site title and branding to be configurable so I can update it to match a personal portfolio identity.

#### Acceptance Criteria

- 9.1 `SITE.TITLE` in `src/consts.ts` must be updated to remove the "Astro Micro" default and the 🔬 emoji from all rendered locations.
- 9.2 The header must render the site title without any emoji characters.
- 9.3 The footer copyright line must render the site title without emoji characters.
- 9.4 `SITE.EMAIL` must be set to a real email address in `src/consts.ts` for the footer link to be functional.

---

### 10. No New Dependencies

**User Story**: As the developer maintaining this project, I want the theme change to introduce no new npm packages so the dependency footprint stays minimal.

#### Acceptance Criteria

- 10.1 No new entries must be added to `dependencies` or `devDependencies` in `package.json`.
- 10.2 All styling must be achieved using existing Tailwind v4 utilities, `@theme` CSS custom properties, and inline CSS within component files.
- 10.3 The `astro build` command must complete without errors after all changes.
- 10.4 The `astro check` TypeScript validation must pass with no new type errors.


---

## Glossary

| Term | Definition |
|---|---|
| Dark-first | The site defaults to dark mode regardless of the user's OS/system color-scheme preference |
| Accent color | The blue highlight color (`#60a5fa` / `text-blue-400`) used for links and interactive elements |
| Muted text | Body text rendered at reduced opacity (70% white) to create visual hierarchy without full contrast |
| ArrowCard | The Astro component rendering a clickable card for blog posts and projects |
| SITE consts | Configuration values exported from `src/consts.ts` (title, email, post counts, etc.) |
| `@theme` | Tailwind v4 CSS directive for defining design tokens as CSS custom properties |
| `@custom-variant dark` | Tailwind v4 mechanism for enabling class-based dark mode via `html.dark` |
| Shiki | Syntax highlighter used by Astro for code blocks; theme colors controlled via CSS custom properties |
