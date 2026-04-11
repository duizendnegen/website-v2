## Why

The site is owned and hosted on a personal domain but lacks the semantic markup, identity verification, and feed infrastructure that make it a genuine participant in the IndieWeb ecosystem. The goal is to assert ownership and self-reliance: machine-readable identity and content, verifiable profile links, a subscribable feed, and no unnecessary third-party dependencies (specifically Google Fonts).

## What Changes

- Add `rel="me"` links to GitHub and LinkedIn in the site footer, using inline SVG brand icons
- Add `h-card` microformat2 markup to the homepage bio block
- Add `h-entry` microformat2 markup to article pages
- Self-host Playfair Display and Merriweather fonts (remove Google Fonts dependency)
- Add an Atom/RSS feed at `/feed.xml`

## Capabilities

### New Capabilities

- `indieweb-identity`: `rel="me"` footer links + `h-card` on homepage establishing machine-readable personal identity
- `indieweb-posts`: `h-entry` microformat2 markup on article pages making posts machine-readable
- `rss-feed`: Atom feed at `/feed.xml` listing all writing posts
- `self-hosted-fonts`: Playfair Display and Merriweather served from `/fonts/` instead of Google Fonts

### Modified Capabilities

- `home-page`: `h-card` classes added to existing bio block
- `site-layout`: Footer gains profile links; Google Fonts `<link>` tags replaced by self-hosted `@font-face`
- `article-page`: `h-entry` classes added to existing article template

## Impact

- `src/_includes/base.njk`: Remove Google Fonts links, add footer profile links
- `src/index.njk`: Add `h-card` microformat2 classes
- `src/_includes/post.njk`: Add `h-entry` microformat2 classes
- `public/style.css`: Add `@font-face` declarations, footer icon styles
- `public/fonts/`: New directory with `.woff2` font files (must be added manually before build)
- `src/feed.njk`: New Atom feed template
- No breaking changes to existing URLs or markup
