## 1. Fonts and External Assets

- [x] 1.1 Replace Literata Google Fonts link in `base.njk` with Playfair Display, Merriweather, and Material Symbols Outlined
- [x] 1.2 Add a portrait image to `public/img/portrait.jpg` (placeholder or real photo)

## 2. Navigation

- [x] 2.1 Rewrite nav markup in `base.njk` to include italic brand name link, Home/Articles/About links, and Material Symbols search icon
- [x] 2.2 Add `position: fixed`, `backdrop-filter: blur`, semi-transparent background, and `z-index` to nav styles in `style.css`
- [x] 2.3 Add `padding-top` to `<main>` to compensate for fixed nav height

## 3. Design Tokens and Base Styles

- [x] 3.1 Define CSS custom properties in `style.css`: `--color-navy`, `--color-sage`, `--color-teal`, `--color-bg`, `--color-bg-alt`, `--color-border`
- [x] 3.2 Update `body` styles: background to `--color-bg`, color to `--color-navy`, font-family to Merriweather
- [x] 3.3 Remove all `max-width: 640px` column constraints; replace container max-width with `80rem`
- [x] 3.4 Set all border-radius to `0` globally

## 4. Home Page Hero

- [x] 4.1 Rewrite `src/index.njk` hero section: 12-column CSS Grid, headline in col-span-8/7, portrait in col-span-4/3
- [x] 4.2 Add sage accent bar (`<div>` with `background: var(--color-sage)`) below headline
- [x] 4.3 Style hero headline as Playfair Display, large (4–5rem), navy, normal weight
- [x] 4.4 Style hero description as Merriweather light, muted navy, comfortable line-height
- [x] 4.5 Style portrait: `aspect-ratio: 3/4`, white border/padding, grayscale + slight contrast filter

## 5. Home Page Articles Section

- [x] 5.1 Add "Articles" section below hero in `index.njk` with white background, top border, generous top/bottom padding
- [x] 5.2 Render each article as title link + excerpt blurb; skip blurb if `post.data.excerpt` is absent
- [x] 5.3 Style article titles as Playfair Display, large; add teal hover color transition
- [x] 5.4 Style article excerpt as Merriweather light, muted navy

## 6. Article Frontmatter

- [x] 6.1 Add `excerpt` field to `src/writing/on-writing-in-public.md`
- [x] 6.2 Add `excerpt` field to `src/writing/the-constraints-are-the-design.md`

## 7. Footer

- [x] 7.1 Update footer in `base.njk` to match mockup: white text on navy background (or light text on bg-main), uppercase tracking, copyright line
