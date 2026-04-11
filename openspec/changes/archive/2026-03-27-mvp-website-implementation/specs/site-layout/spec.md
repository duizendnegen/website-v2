## ADDED Requirements

### Requirement: Base HTML layout wraps all pages
The system SHALL provide a `base.njk` template that renders valid HTML5, includes the page `<title>`, loads the Literata font from Google Fonts, links `style.css`, and renders a `<nav>` and a `<main>` block that child templates fill.

#### Scenario: Navigation renders on every page
- **WHEN** any page is rendered
- **THEN** the navigation contains links to Home (`/`), Writing (`/writing/`), and displays the site name

#### Scenario: Page title is set per page
- **WHEN** a page defines a `title` in its frontmatter
- **THEN** the `<title>` tag renders as `<page title> — <site title>`

#### Scenario: Fallback title when no page title
- **WHEN** a page does not define a `title`
- **THEN** the `<title>` tag renders only the site title

### Requirement: CSS design system enforces typographic aesthetics
The system SHALL have a single `public/style.css` that defines: Literata as the body font, a max content width of ~640px centered, generous line-height (1.7–1.8), dark text (`#111` or similar) on white background, and minimal nav styling with no decorative elements.

#### Scenario: Content column is readable width
- **WHEN** the page is rendered at desktop viewport
- **THEN** the main content area is constrained to approximately 640px and centered

#### Scenario: Mobile layout works without media query overrides
- **WHEN** the page is rendered at a narrow viewport (≤480px)
- **THEN** the content fills the viewport with appropriate padding and no horizontal scrolling

### Requirement: Site metadata is centrally defined
The system SHALL provide `src/_data/site.js` exporting at minimum `title` and `author` fields used across templates.

#### Scenario: Site title is available in templates
- **WHEN** any template references `site.title`
- **THEN** the correct site name is rendered
