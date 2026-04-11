## MODIFIED Requirements

### Requirement: Base HTML layout wraps all pages
The system SHALL provide a `base.njk` template that renders valid HTML5, includes the page `<title>`, loads Playfair Display and Merriweather from Google Fonts and Material Symbols Outlined from Google Fonts, links `style.css`, and renders a fixed `<nav>` and a `<main>` block that child templates fill.

#### Scenario: Navigation renders on every page
- **WHEN** any page is rendered
- **THEN** the navigation contains an italic brand name linking to `/`, links to Home (`/`), Articles (`/writing/`), and About (`/about/`), and a search icon rendered via Material Symbols

#### Scenario: Nav is fixed and blurred
- **WHEN** the user scrolls down any page
- **THEN** the nav remains fixed at the top of the viewport with a semi-transparent background and backdrop blur effect

#### Scenario: Page title is set per page
- **WHEN** a page defines a `title` in its frontmatter
- **THEN** the `<title>` tag renders as `<page title> — <site title>`

#### Scenario: Fallback title when no page title
- **WHEN** a page does not define a `title`
- **THEN** the `<title>` tag renders only the site title

### Requirement: CSS design system enforces typographic aesthetics
The system SHALL have a single `public/style.css` that defines: Playfair Display as the headline font, Merriweather as the body font, a `max-width: 80rem` centered container for nav and article sections, CSS custom properties for all design tokens (navy `#110E38`, sage green `#9DD1A7`, teal `#16a085`, background blue-gray `#f2f6ff`, white `#ffffff`, border `#d5dce3`), a 12-column CSS Grid for the hero layout, fixed-nav compensation via `padding-top` on `<main>`, and no border-radius on any element except pill shapes.

#### Scenario: Content grid is editorial width
- **WHEN** the page is rendered at desktop viewport
- **THEN** the nav and content container are constrained to `max-width: 80rem` and centered

#### Scenario: Mobile layout works without breakpoint overrides
- **WHEN** the page is rendered at a narrow viewport (≤768px)
- **THEN** the hero columns stack vertically, the portrait is hidden or stacks below the headline, and no horizontal scrolling occurs

### Requirement: Site metadata is centrally defined
The system SHALL provide `src/_data/site.js` exporting at minimum `title` and `author` fields used across templates.

#### Scenario: Site title is available in templates
- **WHEN** any template references `site.title`
- **THEN** the correct site name is rendered
