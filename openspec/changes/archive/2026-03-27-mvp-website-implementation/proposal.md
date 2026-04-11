## Why

The personal site eliandor.com doesn't exist yet. This change builds the MVP: a working Eleventy-based static site with the core pages and design system in place, deployable to GitHub Pages, so the site can go live.

## What Changes

- Scaffold Eleventy project with all configuration and build pipeline
- Implement base HTML layout and CSS design system (typography, spacing, column, navigation)
- Build Home page (brief intro + links to recent writing)
- Build Writing index page (plain list of article titles)
- Build Article page template
- Add sample article content to validate the full flow
- Wire up GitHub Pages deployment via git push to `main`

## Capabilities

### New Capabilities

- `site-layout`: Base HTML structure, navigation, and CSS design system (typography, spacing, color)
- `home-page`: Home page with intro text and links to recent writing
- `writing-index`: Writing index listing all article titles as plain links
- `article-page`: Individual article template (title, body, back link)

### Modified Capabilities

## Impact

- New Eleventy project files (`package.json`, `.eleventy.js`, `src/`, `public/`)
- New GitHub Actions workflow (or existing Pages config) for deployment
- No existing code modified — this is greenfield
