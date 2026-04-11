## ADDED Requirements

### Requirement: Fonts are served from the site's own domain
The system SHALL serve Playfair Display and Merriweather as self-hosted woff2 files from `/fonts/`, with `@font-face` declarations in `public/style.css`. No requests SHALL be made to `fonts.googleapis.com` or `fonts.gstatic.com` at page load.

Required font variants:
- Playfair Display: weight 400 normal, weight 400 italic, weight 500 normal, weight 600 normal
- Merriweather: weight 300 normal, weight 300 italic, weight 400 normal, weight 400 italic, weight 700 normal

Each `@font-face` rule SHALL include:
- `font-family` matching the name used in CSS custom properties (`'Playfair Display'`, `'Merriweather'`)
- `src` with `format('woff2')` pointing to the local file path under `/fonts/`
- `font-weight` and `font-style` matching the variant
- `font-display: swap`

#### Scenario: No Google Fonts requests on page load
- **WHEN** any page is loaded in a browser with network monitoring active
- **THEN** no requests are made to `fonts.googleapis.com` or `fonts.gstatic.com`

#### Scenario: Fonts render correctly from self-hosted files
- **WHEN** any page is rendered with the woff2 files present in `/fonts/`
- **THEN** Playfair Display is used for headlines and Merriweather is used for body text, visually identical to the Google Fonts version

#### Scenario: Fallback font is legible when font files are absent
- **WHEN** a page is rendered and the woff2 files are not present
- **THEN** the CSS fallback (`Georgia, serif`) is used and the page remains readable
