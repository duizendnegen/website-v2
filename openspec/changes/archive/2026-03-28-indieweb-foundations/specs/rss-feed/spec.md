## ADDED Requirements

### Requirement: Site publishes an Atom feed at /feed.xml
The system SHALL generate a valid Atom 1.0 feed at `/feed.xml` containing all articles from `collections.writing`, ordered newest first.

Each feed entry SHALL include:
- `<title>`: article title
- `<link>`: canonical article URL
- `<id>`: canonical article URL (used as unique identifier)
- `<updated>`: article date in ISO 8601 format
- `<content type="html">`: full article HTML content

The feed itself SHALL include:
- `<title>`: site title
- `<link rel="self">`: absolute URL to the feed
- `<link rel="alternate">`: absolute URL to the homepage
- `<id>`: site URL
- `<updated>`: date of the most recent article

#### Scenario: Feed is accessible at /feed.xml
- **WHEN** a request is made to `/feed.xml`
- **THEN** the response is a valid XML document with `Content-Type: application/atom+xml`

#### Scenario: Feed includes all published articles
- **WHEN** the feed is parsed
- **THEN** each article in `collections.writing` appears as an `<entry>` in the feed

#### Scenario: Feed entry contains full content
- **WHEN** a feed entry is read
- **THEN** the `<content>` element contains the full rendered HTML of the article body

### Requirement: Feed is discoverable via <link> in document <head>
The system SHALL include a `<link rel="alternate" type="application/atom+xml">` element in the `<head>` of every page pointing to `/feed.xml`.

#### Scenario: Feed link is in document head on all pages
- **WHEN** any page is rendered
- **THEN** the `<head>` contains `<link rel="alternate" type="application/atom+xml" href="/feed.xml" title="<site title>">`
