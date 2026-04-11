## ADDED Requirements

### Requirement: Footer displays rel=me profile links with SVG icons
The system SHALL render two `<a rel="me">` links in the site footer — one to the author's GitHub profile and one to the author's LinkedIn profile — each containing an inline SVG icon using the platform's brand mark (GitHub mark, LinkedIn "in" mark). Icons SHALL use `fill="currentColor"` and be sized at 20×20px. No icon font or external icon dependency SHALL be used.

#### Scenario: GitHub link renders in footer with rel=me
- **WHEN** any page is rendered
- **THEN** the footer contains an `<a>` element with `href="https://github.com/duizendnegen/"` and `rel="me"` containing an inline SVG GitHub mark

#### Scenario: LinkedIn link renders in footer with rel=me
- **WHEN** any page is rendered
- **THEN** the footer contains an `<a>` element with `href="https://www.linkedin.com/in/eliandor/"` and `rel="me"` containing an inline SVG LinkedIn mark

#### Scenario: Icons are styled consistently with footer
- **WHEN** any page is rendered
- **THEN** the profile icon links are visually subdued (reduced opacity) and respond to hover with full opacity, matching the footer's typographic color

### Requirement: Homepage bio is marked up as h-card
The system SHALL apply microformat2 `h-card` markup to the homepage hero bio block so that IndieWeb parsers can identify the page owner.

Required properties:
- `h-card` class on the container element wrapping the bio
- `p-name` on the element containing the author's full name
- `p-note` on the descriptive bio paragraph
- `u-url` as an `<a>` element with `href` pointing to the canonical site URL (`https://eliandor.com`)

#### Scenario: h-card is parseable on homepage
- **WHEN** the homepage HTML is parsed by a microformat2 parser
- **THEN** exactly one h-card is found with `name`, `note`, and `url` properties populated

#### Scenario: h-card does not affect visual rendering
- **WHEN** the homepage is viewed in a browser
- **THEN** the layout and typography are unchanged from before the h-card markup was added
