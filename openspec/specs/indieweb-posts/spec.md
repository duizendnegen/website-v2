## ADDED Requirements

### Requirement: Article pages are marked up as h-entry
The system SHALL apply microformat2 `h-entry` markup to every article page so that IndieWeb parsers can identify and consume post content.

Required properties:
- `h-entry` class on the `<article>` element
- `p-name` on the `<h1>` title element
- `e-content` on the element wrapping the post body
- `dt-published` as a `<time>` element with `datetime` set to the post's ISO 8601 date (`YYYY-MM-DD`) and `class="dt-published"`
- `u-url` as an `<a>` element with `href` set to the canonical post URL and `class="u-url"`
- `p-author` as an `<a>` element with `href` pointing to the homepage (`https://eliandor.com`) and `class="p-author"`, containing the author's name

#### Scenario: h-entry is parseable on an article page
- **WHEN** an article page HTML is parsed by a microformat2 parser
- **THEN** exactly one h-entry is found with `name`, `content`, `published`, `url`, and `author` properties populated

#### Scenario: dt-published reflects the article's frontmatter date
- **WHEN** an article with a `date` frontmatter field is rendered
- **THEN** the `<time class="dt-published">` element's `datetime` attribute contains the date in `YYYY-MM-DD` format

#### Scenario: u-url reflects the canonical article URL
- **WHEN** an article at `/writing/<slug>/` is rendered
- **THEN** the `<a class="u-url">` element's `href` is `https://eliandor.com/writing/<slug>/`

#### Scenario: h-entry markup does not affect visual rendering
- **WHEN** an article page is viewed in a browser
- **THEN** the layout and typography are unchanged; the `dt-published`, `u-url`, and `p-author` elements are visually present but unobtrusive (small, subdued metadata line)
