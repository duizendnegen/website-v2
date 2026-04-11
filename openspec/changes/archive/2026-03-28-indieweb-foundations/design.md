## Context

eliandor.com is a static Eleventy site. Assets in `public/` are passed through directly to `_site/`. Templates live in `src/`. The site uses two Google-hosted fonts (Playfair Display, Merriweather) loaded via `<link>` tags in `base.njk`. The footer currently shows only a copyright line with no profile links.

## Goals / Non-Goals

**Goals:**
- Remove the Google Fonts runtime dependency entirely (self-host woff2 files)
- Add verifiable `rel="me"` identity links to the footer
- Mark up the homepage and posts with microformat2 classes for IndieWeb parsers
- Provide a subscribable Atom feed

**Non-Goals:**
- Webmentions (sending or receiving)
- IndieAuth / Micropub
- POSSE syndication
- Dark mode or visual redesign beyond the footer icons
- Supporting legacy font formats (eot, ttf, svg) — woff2 only

## Decisions

### Font delivery: self-hosted woff2 via @font-face

**Decision:** Download woff2 files for all required variants and serve from `/fonts/`. Replace the three Google Fonts `<link>` tags in `base.njk` with `@font-face` rules in `style.css`.

**Rationale:** Every page load currently pings `fonts.googleapis.com` and `fonts.gstatic.com`, giving Google visibility into site traffic. Self-hosting eliminates this. woff2 is supported by all modern browsers (>96% global); no fallback formats needed.

**Source:** Use [google-webfonts-helper](https://gwfh.mranftl.com/) to download files and generate `@font-face` CSS. This is a one-time manual step — font files are committed to the repo in `public/fonts/`.

**Variants needed (matching current usage in base.njk):**
- Playfair Display: 400, 500, 600 (normal); 400 (italic)
- Merriweather: 300, 400, 700 (normal); 300, 400 (italic)

### Footer profile links: inline SVG, not icon font

**Decision:** Use inline SVG for the GitHub mark and LinkedIn "in" mark rather than Material Symbols or any icon font.

**Rationale:** Icon fonts require an additional external load (another Google Fonts dependency). Inline SVG has zero external dependencies, renders crisply at any size, and lets each icon carry its `rel="me"` attribute directly on the `<a>` tag.

**SVG sources:** GitHub mark and LinkedIn mark are both available as simple, license-free SVGs. Dimensions normalized to 20×20, `fill="currentColor"` so they respond to CSS color.

### Microformats2: class-only, no structural changes

**Decision:** Add mf2 classes to existing HTML elements. Do not restructure templates.

**Rationale:** The existing markup already has the right semantic structure — `<article>`, `<h1>`, author bio paragraph. mf2 is purely additive class names (`h-card`, `p-name`, `p-note`, `h-entry`, `p-author`, `dt-published`, `u-url`). No layout or visual change.

**h-card placement:** Wraps the `.hero-text` div on the homepage. The `p-name` is Pepijn Schoen, `p-note` is the bio paragraph, `u-url` is the canonical site URL.

**h-entry placement:** Wraps the `<article>` in `post.njk`. Adds `dt-published` (ISO date from frontmatter), `u-url` (canonical post URL), `p-author` pointing back to the h-card URL.

### Atom feed: single Nunjucks template, no plugin

**Decision:** Implement the feed as `src/feed.njk` with a permalink of `/feed.xml`, using Eleventy's built-in collection access.

**Rationale:** A feed plugin adds a dependency for what is a single, stable XML template. The existing `collections.writing` collection already provides everything needed (title, url, date, content). The feed will include all posts with no pagination.

## Risks / Trade-offs

- **Font file size committed to repo** → Acceptable; woff2 files are small (~50–100KB total) and binary assets in a personal site repo are fine.
- **Manual font download step** → Documented in tasks.md; must be done before the build will render fonts correctly. The CSS fallback (`Georgia, serif`) ensures readable text even if files are missing.
- **mf2 classes have no visual effect** → Verified correct — all mf2 class names are semantically inert in CSS unless explicitly targeted.
- **Feed content:** Including full post content in the Atom feed (vs. excerpt only) — preferred by IndieWeb norms ("own your full content"), and post volume is low so feed size is not a concern.

## Migration Plan

1. Download font files locally (manual step, see tasks)
2. Apply all template and CSS changes
3. Build and verify locally with `npm start`
4. Deploy — no redirects or URL changes needed
5. Rollback: revert `base.njk` to restore Google Fonts links; font files in `public/fonts/` are inert if `@font-face` rules are absent
