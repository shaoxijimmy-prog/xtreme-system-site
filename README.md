# XtremeSystem Astro Site

A production-ready Astro website for XtremeSystem: company tech blog, project showcase, lab updates, and contact routing to `xtremesystems.co.nz`.

## Stack

- Astro static site
- Markdown content collections for blog posts and projects
- Responsive light/dark design with local theme preference
- SEO metadata, robots endpoint, and sitemap endpoint
- No database, login, or server runtime

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Cloudflare Pages

Use these settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20` or newer

## Content

- Blog posts: `src/content/blog/*.md`
- Project pages/cards: `src/content/projects/*.md`
- Lab updates: `src/data/labUpdates.ts`

## Guide

See `docs/website-build-guide.md` for a rough guide to how this website is structured, updated, and deployed.
