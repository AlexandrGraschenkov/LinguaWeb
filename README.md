# Lingua Player Website

This is the public website for Lingua Player, built with Astro as a static site generator. Source files are component-based, while `npm run build` generates plain static HTML, CSS, and JavaScript in `dist/` for GitHub Pages.

## Structure

- `src/pages/` - route files for the English site.
- `src/pages/ru/` - route files for the Russian site.
- `src/components/` - shared layout, navigation, CTA, FAQ, legal, and research components.
- `src/data/` - editable page content, translations, FAQ items, research entries, legal text, links, and app metadata.
- `src/styles/global.css` - shared visual system and responsive layout.
- `public/images/` - static images copied directly into the built site.
- `.github/workflows/deploy.yml` - GitHub Pages build and deploy workflow.

## Commands

Install dependencies:

```bash
npm install
```

Run a local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content Editing

Most editable text is in `src/data/`:

- `home.ts` - home page sections, feature pills, and CTA copy.
- `faq.ts` - FAQ questions and answers for English and Russian.
- `research.ts` - research page intro and study cards.
- `legal.ts` - Terms and Privacy Policy content.
- `site.ts` - App Store URL, support email, navigation, and legal links.

The English version is the canonical root (`/`). The Russian version lives under `/ru/`.

## Adding a New Page

1. Add an English route in `src/pages/`, for example `src/pages/about.html.astro`.
2. Add the Russian route in `src/pages/ru/`, for example `src/pages/ru/about.html.astro`.
3. Wrap both pages in `Layout`.
4. Add navigation links in `src/data/site.ts` if the page should appear in the header.
5. Set `currentPath` correctly so the language switch can map between EN and RU.

## Adding or Editing Research

Research entries live in `src/data/research.ts`. Add a new object with:

- `title`
- `authors`
- `year`
- `publication`
- `url`
- `doi`
- `en`
- `ru`

The research page intentionally says that studies support the broader learning approach, not that they directly prove Lingua Player's effectiveness.

## Replacing Images

Images are in `public/images/`. Keep the same file names if you want to replace visuals without changing code:

- `app-icon.jpg`
- `splash-logo.png`
- `translate-example.png`
- `onboarding-offline.jpg`
- `onboarding-series.jpg`
- `onboarding-subtitles.jpg`
- `onboarding-flashcards.jpg`

If you add new images, reference them with root-relative paths such as `/images/new-image.jpg`. The `withBase()` helper will make paths work under a GitHub Pages project URL.

## GitHub Pages Deploy

The workflow in `.github/workflows/deploy.yml`:

1. Installs dependencies with `npm ci`.
2. Builds the site with `npm run build`.
3. Uploads `dist/` as a Pages artifact.
4. Deploys it using GitHub's official Pages action.

For a GitHub Pages project site, the workflow automatically sets `BASE_PATH` to `/<repository-name>` so assets and links work under `https://<user>.github.io/<repo>/`.

For a user or organization site named `<user>.github.io`, `BASE_PATH` is empty.

For a custom domain, set `SITE_URL` to the custom domain and keep `BASE_PATH` empty. You can do this by editing the workflow env values or setting repository/environment variables and reading them in `astro.config.mjs`.
