## ADDED Requirements

### Requirement: Home page displays a brief personal introduction
The system SHALL render a home page at `/` with two to three sentences introducing the author and the site's purpose.

#### Scenario: Home page loads at root URL
- **WHEN** a user visits `/`
- **THEN** the page renders the intro text and the site navigation

### Requirement: Home page links to recent writing
The system SHALL display a short list of links to the most recent or most notable articles on the home page, showing only titles (no dates, no excerpts).

#### Scenario: Article titles appear as links on home page
- **WHEN** the home page is rendered and articles exist in `src/writing/`
- **THEN** up to five article titles are shown as links pointing to their respective URLs

#### Scenario: Home page renders when no articles exist
- **WHEN** the home page is rendered and no articles exist
- **THEN** the page renders without error and shows only the intro text
