## ADDED Requirements

### Requirement: Writing index lists all articles by title
The system SHALL render a writing index page at `/writing/` that displays a plain list of all article titles, each linking to its article page, with no excerpts, categories, tags, or dates shown.

#### Scenario: All published articles appear in the index
- **WHEN** the writing index is rendered and Markdown files exist in `src/writing/`
- **THEN** each article title appears as a link in the list

#### Scenario: Articles are ordered by date descending
- **WHEN** multiple articles exist with different dates
- **THEN** the most recently dated article appears first

#### Scenario: Writing index renders when no articles exist
- **WHEN** the writing index is rendered and no article files exist
- **THEN** the page renders without error
