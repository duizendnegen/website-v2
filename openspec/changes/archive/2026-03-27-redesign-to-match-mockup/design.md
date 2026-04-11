## Context

The site is an Eleventy static site using a hand-written `public/style.css` and Nunjucks templates. The current design is minimal monochrome: Literata font, 640px centered column, plain black-on-white, simple flat nav. The mockup (`mockup/index.html`) defines a richer editorial identity: Playfair Display + Merriweather fonts, a navy/sage/teal palette, a `max-w-7xl` full-width grid, a fixed nav with backdrop blur, a two-column portrait-hero layout, and article listings that show excerpts. The implementation target is matching the mockup's look as closely as possible within the existing Eleventy/CSS stack — without introducing Tailwind or a JS framework.

## Goals / Non-Goals

**Goals:**
- Rewrite `public/style.css` to implement the mockup's design tokens, typography, layout grid, and component styles using vanilla CSS custom properties and CSS Grid
- Update `src/_includes/base.njk` to load Playfair Display, Merriweather, and Material Symbols from Google Fonts and render the fixed nav with brand name, nav links (Home, Articles, About), and search icon
- Rewrite `src/index.njk` with the hero section (headline, accent bar, description, portrait) and articles-with-excerpt listing
- Add `excerpt` frontmatter to existing article Markdown files

**Non-Goals:**
- Introducing Tailwind, a CSS framework, or a JS build step
- Implementing the mobile hamburger menu (structure present, no JS logic)
- Implementing a working search feature (icon renders, no functionality)
- Creating an `/about/` page (nav link renders, page not built)
- Dark mode (the mockup's `html.light` class is noted but not implemented)

## Decisions

### CSS approach: vanilla CSS custom properties over Tailwind CDN

The mockup uses Tailwind CDN for rapid prototyping. The production site uses a single hand-authored `style.css`. We replicate the mockup's design tokens as CSS custom properties (`--color-navy`, `--color-sage`, etc.) and component classes, keeping the build pipeline unchanged.

*Alternatives considered:* Adding Tailwind CDN to the base template — rejected because it introduces an external runtime dependency and conflicts with existing CSS.

### Layout: CSS Grid with `max-width: 80rem` replacing the 640px column

The hero section uses a 12-column grid (`grid-template-columns: repeat(12, 1fr)`) to replicate the mockup's `grid-cols-12` layout. The articles section uses a centered `max-width: 56rem` column for readability. The nav uses `max-width: 80rem` to match `max-w-7xl`.

### Portrait image: local asset path

The mockup references an external Google CDN image URL. We use a local path (`/img/portrait.jpg`) so the site doesn't depend on an external asset. The portrait file must be placed at `public/img/portrait.jpg`.

### Fixed nav: CSS `position: fixed` + `backdrop-filter: blur`

Matches the mockup's `fixed top-0 ... backdrop-blur-sm` directly. A `padding-top` on `<main>` compensates for the nav height.

### Excerpt field: frontmatter on Markdown articles

Each article exposes an `excerpt` field in its YAML frontmatter. The home page template reads `post.data.excerpt` to render the blurb beneath each article title, matching the mockup's article-listing style.

## Risks / Trade-offs

- **`backdrop-filter` browser support** → Supported in all modern browsers; no mitigation needed for this audience.
- **Portrait image missing** → If `public/img/portrait.jpg` is absent the `<img>` renders broken; a placeholder must be committed alongside template changes.
- **Existing articles lack `excerpt`** → Must be added manually to `src/writing/*.md`; if omitted, the home page listing simply shows no blurb beneath the title.
- **About page 404** → The "About" nav link will 404 until the page is built; acceptable given Non-Goals scope.
