## ADDED Requirements

### Requirement: Home page displays a brief personal introduction
The system SHALL render a home page at `/` with a hero section containing a large editorial headline (the author's name and role), a sage-green accent bar, and a descriptive paragraph, laid out in a two-column grid alongside a portrait photograph. The hero bio block SHALL carry microformat2 `h-card` markup per the `indieweb-identity` capability spec.

#### Scenario: Home page loads at root URL
- **WHEN** a user visits `/`
- **THEN** the page renders the hero headline, accent bar, description paragraph, portrait image, and the site navigation

#### Scenario: Portrait image renders in hero
- **WHEN** the home page is rendered
- **THEN** an `<img>` element with a local portrait path is displayed in the right column of the hero grid, with grayscale and slight contrast treatment

#### Scenario: h-card wraps the hero bio block
- **WHEN** the homepage HTML is parsed by a microformat2 parser
- **THEN** exactly one h-card is found with name, note, and url properties matching the author's details

### Requirement: Home page links to recent writing with excerpts
The system SHALL display a section titled "Articles" on the home page listing the most recent articles, each showing the article title as a link and the article's `excerpt` field as a short blurb beneath the title.

#### Scenario: Article titles and excerpts appear on home page
- **WHEN** the home page is rendered and articles exist in `src/writing/`
- **THEN** up to five articles are shown, each with a title link and the `excerpt` text rendered beneath it

#### Scenario: Articles with no excerpt render title only
- **WHEN** an article has no `excerpt` frontmatter field
- **THEN** the article's title link is displayed and no blurb appears beneath it

#### Scenario: Home page renders when no articles exist
- **WHEN** the home page is rendered and no articles exist
- **THEN** the page renders without error, showing only the hero section and an empty or absent articles section
