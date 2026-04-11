## Context

Greenfield personal website for Pepijn Schoen (eliandor.com). No existing code. The design philosophy is typography-first: no hero images, no cards, no gradients, one typeface, dark text on white, narrow readable column. The mockup at `mockup/index.html` shows the visual direction. The stack is Eleventy + Nunjucks + plain CSS + GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Working Eleventy build producing static HTML
- Base layout and CSS matching the design philosophy (Literata, narrow column, minimal nav)
- Home, Writing index, and Article pages functional
- Deployable to GitHub Pages via push to `main`
- Sample article content so all templates are exercised

**Non-Goals:**
- About page (next step)
- Search functionality
- Dark mode toggle
- CMS or admin UI
- Image optimization pipeline

## Decisions

**Eleventy with Nunjucks templating**
Chosen per the README spec. Nunjucks gives good template inheritance (`base.njk` → page templates). Alternative was Liquid — Nunjucks preferred for `extends`/`block` semantics.

**Plain CSS, no framework**
Tailwind was used in the mockup but the README explicitly calls for plain CSS. Tailwind would add build complexity and fight the "no framework" aesthetic goal. One `style.css` in `public/` is simpler and more honest to the design intent.

**Literata from Google Fonts**
README recommends Literata. Loaded via `<link rel="preconnect">` + Google Fonts stylesheet in the base layout. Single weight/style set (400, 400 italic) to keep it lean.

**GitHub Pages deployment**
Eleventy builds to `_site/`. GitHub Pages is configured to serve from `_site/` on the `main` branch, or a `gh-pages` branch populated by a GitHub Actions workflow. Using a GitHub Actions workflow is cleaner (no committed build artifacts).

**Project structure**
Follows the README spec exactly:
```
src/
  _includes/base.njk, post.njk
  _data/site.js
  index.njk
  writing/
    writing.json
    index.njk
    *.md
public/style.css
.eleventy.js
package.json
```

## Risks / Trade-offs

- **Google Fonts dependency** → If fonts are unavailable, fallback to Georgia/serif. Acceptable for MVP.
- **No pagination on Writing index** → Fine for <50 articles. Not worth the complexity now.
- **GitHub Actions secrets/permissions** → `GITHUB_TOKEN` with `pages: write` permission is sufficient; no extra setup needed for public repos.
