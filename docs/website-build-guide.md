# XtremeSystem Website Build Guide

This is a rough guide for how the XtremeSystem lab website was built and how to keep it updated.

## Goal

The site is a simple Astro-powered company tech blog and project showcase for:

- Refurbished computers
- IT retail workflows
- Homelab infrastructure
- AI automation experiments
- Lab notes and project writeups

The site intentionally avoids a database, login system, CMS, or server runtime for now. It is built as a static website and deployed through Cloudflare Pages.

## Stack

- Astro for static site generation
- Markdown content collections for blog posts and projects
- Plain CSS for the design system
- Cloudflare Pages for hosting
- GitHub as the source repository

## Main Structure

```text
src/
  components/       Reusable UI pieces
  content/blog/     Markdown blog posts
  content/projects/ Markdown project pages
  data/             Lab update data
  layouts/          Shared page layout and SEO metadata
  lib/              Site config and navigation
  pages/            Astro routes
  styles/           Global CSS

public/
  images/           Static visual assets
  _headers          Cloudflare security headers
```

## Pages

The site currently has these top-level pages:

- Home: `/`
- Blog: `/blog/`
- Projects: `/projects/`
- Lab: `/lab/`
- About: `/about/`
- Contact: `/contact/`

Blog posts and project detail pages are generated from Markdown files.

## Adding a Blog Post

Create a new file in:

```text
src/content/blog/
```

Example:

```md
---
title: Example Blog Post
description: Short SEO description for the post.
pubDate: 2026-06-01
categories:
  - Hardware
---

Write the article content here.
```

The URL will be based on the filename. For example:

```text
src/content/blog/example-blog-post.md
```

becomes:

```text
/blog/example-blog-post/
```

## Adding a Project

Create a new file in:

```text
src/content/projects/
```

Example:

```md
---
title: New Lab Project
summary: Short summary shown on project cards.
status: Prototype
stack:
  - Astro
  - Automation
order: 6
featured: false
---

Project notes go here.
```

The `order` value controls sorting on the Projects page. Set `featured: true` for a larger card on the home page.

## Updating Lab Notes

Lab updates are stored in:

```text
src/data/labUpdates.ts
```

Add new updates to the top of the array so the newest notes appear first.

## Site Metadata

The main site settings live in:

```text
src/lib/site.ts
astro.config.mjs
```

The current production URL is:

```text
https://lab.xtreme-systems.com
```

If the domain changes, update both files so canonical URLs, sitemap URLs, and social sharing metadata stay correct.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build locally:

```bash
npm run build
```

## Cloudflare Pages Deployment

Cloudflare Pages should be connected to the GitHub repository:

```text
shaoxijimmy-prog/xtreme-system-site
```

Use these build settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: leave blank
Production branch: main
Node.js version: 20 or newer
```

Every push to `main` should trigger a new Cloudflare Pages deployment.

## Current Notes

- The hero image is an SVG asset at `public/images/hero-lab.svg` so it stays lightweight and easy to deploy.
- The contact page links to `https://xtremesystems.co.nz`.
- The site is ready for static deployment, but local build checks should still be run after larger changes.
- Do not add database or login features until the site actually needs them.
