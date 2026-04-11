## 1. Self-host Fonts (manual download step)

- [x] 1.1 Go to https://gwfh.mranftl.com/ and download Playfair Display woff2 files for weights 400 (normal + italic), 500 (normal), 600 (normal) — select "Modern Browsers" (woff2 only)
- [x] 1.2 Go to https://gwfh.mranftl.com/ and download Merriweather woff2 files for weights 300 (normal + italic), 400 (normal + italic), 700 (normal) — select "Modern Browsers" (woff2 only)
- [x] 1.3 Place all downloaded woff2 files in `public/fonts/`

## 2. Wire Up Self-hosted Fonts in CSS

- [x] 2.1 Add `@font-face` rules to `public/style.css` for all Playfair Display variants (400 normal, 400 italic, 500 normal, 600 normal) pointing to `/fonts/<filename>.woff2` with `font-display: swap`
- [x] 2.2 Add `@font-face` rules to `public/style.css` for all Merriweather variants (300 normal, 300 italic, 400 normal, 400 italic, 700 normal) pointing to `/fonts/<filename>.woff2` with `font-display: swap`
- [x] 2.3 Remove the three Google Fonts `<link>` preconnect and stylesheet tags from `src/_includes/base.njk`
- [ ] 2.4 Build and verify fonts render correctly (`npm start`, check Playfair Display on headlines and Merriweather on body)

## 3. Footer Profile Links (rel=me)

- [x] 3.1 Add footer profile links section to `src/_includes/base.njk` with `<a rel="me" href="https://github.com/duizendnegen/">` containing an inline SVG GitHub mark (20×20, `fill="currentColor"`)
- [x] 3.2 Add `<a rel="me" href="https://www.linkedin.com/in/eliandor/">` with an inline SVG LinkedIn "in" mark (20×20, `fill="currentColor"`) in the same footer section
- [x] 3.3 Add footer icon styles to `public/style.css` — flex row, subdued opacity, hover to full opacity, consistent with footer text color

## 4. h-card on Homepage

- [x] 4.1 Wrap the `.hero-text` div in `src/index.njk` with `class="h-card"` (or add the class to the existing container element)
- [x] 4.2 Add `class="p-name"` to the element containing "Pepijn Schoen"
- [x] 4.3 Add `class="p-note"` to the bio description paragraph
- [x] 4.4 Add a `<a class="u-url" href="https://eliandor.com">` element inside the h-card (can be visually hidden or a subtle "eliandor.com" link)
- [ ] 4.5 Verify with https://indiewebify.me/validate-h-card/ — paste the homepage URL and confirm h-card parses correctly

## 5. h-entry on Article Pages

- [x] 5.1 Add `class="h-entry"` to the `<article>` element in `src/_includes/post.njk`
- [x] 5.2 Add `class="p-name"` to the `<h1>` title element in `post.njk`
- [x] 5.3 Add `class="e-content"` to the element wrapping `{{ content | safe }}`
- [x] 5.4 Add a post metadata line to `post.njk` containing: `<time class="dt-published" datetime="{{ date | date: 'YYYY-MM-DD' }}">{{ date | readable }}</time>`, `<a class="u-url" href="{{ site.url }}{{ page.url }}">Permalink</a>`, and `<a class="p-author" href="{{ site.url }}">{{ site.author }}</a>`
- [x] 5.5 Add a Nunjucks date filter to `.eleventy.js` if one does not already exist (for formatting `dt-published`)
- [x] 5.6 Style the metadata line in `public/style.css` — small text, subdued color, sits below the title
- [ ] 5.7 Verify with https://indiewebify.me/validate-h-entry/ — paste an article URL and confirm h-entry parses correctly

## 6. Atom Feed

- [x] 6.1 Create `src/feed.njk` as an Atom 1.0 feed template with `permalink: /feed.xml` and `eleventyExcludeFromCollections: true` in frontmatter
- [x] 6.2 Populate the feed `<feed>` element with `<title>`, `<link rel="self">`, `<link rel="alternate">`, `<id>`, and `<updated>` (date of most recent post)
- [x] 6.3 Loop over `collections.writing` to generate `<entry>` elements with `<title>`, `<link>`, `<id>`, `<updated>`, and `<content type="html">` (full post content)
- [x] 6.4 Add `<link rel="alternate" type="application/atom+xml" href="/feed.xml" title="{{ site.title }}">` to the `<head>` in `src/_includes/base.njk`
- [ ] 6.5 Build and verify `_site/feed.xml` is valid XML (open in browser or paste into https://validator.w3.org/feed/)
