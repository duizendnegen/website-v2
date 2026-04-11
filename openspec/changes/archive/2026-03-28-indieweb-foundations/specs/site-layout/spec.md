## MODIFIED Requirements

### Requirement: Base HTML layout wraps all pages
The system SHALL provide a `base.njk` template that renders valid HTML5, includes the page `<title>`, loads Playfair Display and Merriweather via self-hosted `@font-face` declarations (NOT from Google Fonts), links `style.css`, includes a `<link rel="alternate" type="application/atom+xml">` feed discovery element, and renders a fixed `<nav>` and a `<main>` block that child templates fill.

#### Scenario: Navigation renders on every page
- **WHEN** any page is rendered
- **THEN** the navigation contains an italic brand name linking to `/` and links to Home (`/`) and Writing (`/writing/`)

#### Scenario: Nav is fixed and blurred
- **WHEN** the user scrolls down any page
- **THEN** the nav remains fixed at the top of the viewport with a semi-transparent background and backdrop blur effect

#### Scenario: Page title is set per page
- **WHEN** a page defines a `title` in its frontmatter
- **THEN** the `<title>` tag renders as `<page title> — <site title>`

#### Scenario: Fallback title when no page title
- **WHEN** a page does not define a `title`
- **THEN** the `<title>` tag renders only the site title

#### Scenario: No Google Fonts link tags are present
- **WHEN** any page's HTML source is inspected
- **THEN** no `<link>` elements with `href` containing `fonts.googleapis.com` are present

#### Scenario: Feed discovery link is in document head
- **WHEN** any page is rendered
- **THEN** the `<head>` contains a `<link rel="alternate" type="application/atom+xml" href="/feed.xml">`

### Requirement: CSS design system enforces typographic aesthetics
The system SHALL have a single `public/style.css` that defines: Playfair Display as the headline font via `@font-face`, Merriweather as the body font via `@font-face`, a `max-width: 80rem` centered container for nav and article sections, CSS custom properties for all design tokens (navy `#110E38`, sage green `#9DD1A7`, teal `#16a085`, background blue-gray `#f2f6ff`, white `#ffffff`, border `#d5dce3`), a 12-column CSS Grid for the hero layout, fixed-nav compensation via `padding-top` on `<main>`, and no border-radius on any element except pill shapes.

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

### Requirement: Footer displays profile links
The system SHALL render `rel="me"` links to the author's GitHub and LinkedIn profiles in the site footer, using inline SVG icons. No external icon font or dependency SHALL be used for these icons.

#### Scenario: Profile links render in footer on every page
- **WHEN** any page is rendered
- **THEN** the footer contains GitHub and LinkedIn links with `rel="me"` and inline SVG icons
