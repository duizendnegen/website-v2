## Why

The current site uses a minimal monochrome aesthetic (Literata, 640px column, black-on-white) that diverges significantly from the editorial visual identity defined in the mockup. The redesign brings the site into alignment with the intended design: a navy/sage/teal palette, Playfair Display + Merriweather typography, full-width layout with a 12-column grid, a fixed nav with backdrop blur, a portrait-and-headline hero section, and article listings that include excerpts.

## What Changes

- Replace Literata font with Playfair Display (headlines) and Merriweather (body)
- Replace white/black color scheme with navy (`#110E38`), sage green (`#9DD1A7`), teal (`#16a085`), and light blue-gray background (`#f2f6ff`)
- Expand layout from 640px narrow column to full-width `max-w-7xl` container
- Change nav to fixed-position with backdrop blur, italic brand name, bold active link underline, search icon, and an "About" link
- Redesign home page with a two-column hero (large editorial headline + portrait photo with accent bar) and an articles section that shows title + excerpt
- Redesign article listings to display excerpt text below each title

## Capabilities

### New Capabilities

*(none)*

### Modified Capabilities

- `site-layout`: Nav structure, fonts, color palette, and layout width all change at the requirement level — fixed nav with backdrop blur, Playfair Display + Merriweather fonts loaded from Google Fonts, navy/sage/teal design tokens, full-width `max-w-7xl` grid replace the current narrow-column Literata/monochrome spec
- `home-page`: Hero section requirement changes — must render a two-column layout with a large editorial headline, a sage accent bar, a descriptive paragraph, and a portrait image alongside an articles section that shows title and excerpt for each item

## Impact

- `public/style.css` — complete rewrite of design tokens, typography, layout, and nav styles
- `src/_includes/base.njk` — new Google Fonts links (Playfair Display, Merriweather, Material Symbols), fixed nav markup with search icon and About link
- `src/index.njk` — new hero section markup with portrait, headline, accent bar, and articles-with-excerpts listing
- `src/writing/*.md` — articles need `excerpt` frontmatter field for home page display (existing articles to be updated)
- `src/_data/site.js` — may need to expose additional fields (e.g., author portrait path)
