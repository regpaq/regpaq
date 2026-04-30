# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Jekyll 3.8.5 static blog and portfolio site for regpaq.com. Deployed on Netlify. No automated tests or linting.

## Development Commands

```bash
# Serve locally with live reload
bundle exec jekyll serve

# Build static site to _site/
bundle exec jekyll build

# Process and optimize images (watches _src/ for changes)
npx gulp

# Serve including draft posts
bundle exec jekyll serve --drafts
```

## Architecture

### Content Model

- **Posts** — `_posts/YYYY-MM-DD-title.md` with front matter: `layout`, `title`, `description`, `categories` (single string), `image` (filename without extension), `date`
- **Drafts** — `_drafts/` (not published; visible with `--drafts` flag)
- **Recommendations** — custom Jekyll collection in `_recommendations/`, each file is a person profile
- **Category pages** — root-level `.md` files (`philosophy.md`, `money.md`, etc.) using the `category` layout

### Layout Hierarchy

```
default.html
├── home.html        (magazine-style article grid)
├── post.html        (standard article)
├── post-long.html   (extended article with sidebar)
├── casestudy.html   (B2B case study format)
├── category.html    (filtered article listing)
└── resume.html      (resume page)
```

All layouts extend `default.html`. Reusable pieces live in `_includes/`.

### Styling

SASS compiled by Jekyll (no separate build step). Main file: `_sass/theme.scss`.

- **CSS variables** drive the light/dark color themes — add new theme colors there, not as hardcoded values
- **Responsive breakpoints**: 375px, 568px, 768px, 1024px, 1280px, 1440px, 1700px
- **Media query mixin**: `@include media-query(md) { ... }` (defined in `theme.scss`)
- **Fonts**: Overpass (body), Overpass Mono (code)

### Image Pipeline

Source images go in `_src/`. Running `gulp` (or `npx gulp`) processes them into `assets/images/` and `assets/images/webp/`:

- Generates 8 responsive widths per image (250px–4000px)
- Produces both compressed originals and WebP variants
- Only reprocesses files newer than existing output (`gulp-newer`)

Reference images in posts via the `image` front matter key (filename without extension). The `featured-image.html` and `figure.html` includes handle responsive `srcset` markup automatically.

### JavaScript

No build step — JS is embedded as `_includes/js/*.html` snippets and included conditionally in layouts:

- `lightswitch.html` / `lightswitch-after.html` — dark mode toggle (persisted via localStorage)
- `fathom-analytics.html` — primary analytics (privacy-focused)
- `google-analytics.html` — secondary analytics
- `mailerlite.html` — email newsletter widget
- `accordian.html`, `toggle.html` — UI interaction components

### Custom Plugin

`_plugins/file_exists.rb` — Liquid tag `{% file_exists path %}` returns true/false; used to conditionally include images or assets that may not exist for all posts.
