## ADDED Requirements

### Requirement: Article page renders title and body
The system SHALL render individual articles at `/writing/<slug>/` using the `post.njk` layout, displaying the article title and its full Markdown body. The article element SHALL carry microformat2 `h-entry` markup per the `indieweb-posts` capability spec.

#### Scenario: Article renders with title and content
- **WHEN** a user visits `/writing/<slug>/`
- **THEN** the page displays the article title as an `<h1>` and the full article body below it

#### Scenario: h-entry wraps the article
- **WHEN** an article page HTML is parsed by a microformat2 parser
- **THEN** exactly one h-entry is found with name, content, published, url, and author properties

### Requirement: Article page provides navigation back to writing index
The system SHALL display a link back to `/writing/` on every article page.

#### Scenario: Back link is present on article page
- **WHEN** an article page is rendered
- **THEN** a link reading "Writing" or "← Writing" pointing to `/writing/` is visible

### Requirement: Articles are authored as Markdown files with frontmatter
The system SHALL process any `.md` file placed in `src/writing/` with `title` and `date` frontmatter fields as a published article.

#### Scenario: Markdown file becomes a routed page
- **WHEN** a `.md` file with valid frontmatter is placed in `src/writing/`
- **THEN** Eleventy builds it to `/writing/<slug>/index.html` and it appears in the writing index

#### Scenario: Article date is used for ordering
- **WHEN** an article has a `date` field in its frontmatter
- **THEN** that date is used to sort the article relative to others in the index
