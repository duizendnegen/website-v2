## 1. Project Scaffold

- [x] 1.1 Initialize `package.json` with Eleventy as a dev dependency
- [x] 1.2 Create `.eleventy.js` config: set input to `src/`, output to `_site/`, copy `public/` passthrough
- [x] 1.3 Create `src/_data/site.js` with `title` and `author` fields
- [x] 1.4 Add `.gitignore` entries for `node_modules/` and `_site/`

## 2. Base Layout and CSS

- [x] 2.1 Create `src/_includes/base.njk` with HTML5 shell, Google Fonts (Literata) link, `style.css` link, nav with Home/Writing links, and a `content` block
- [x] 2.2 Create `public/style.css` with: Literata body font, max-width ~640px centered, line-height 1.75, `#111` text on white background, minimal nav styling (no decoration)
- [x] 2.3 Verify `<title>` renders as `<page title> — <site title>` when title is set and falls back to site title alone

## 3. Home Page

- [x] 3.1 Create `src/index.njk` extending `base.njk` with two to three sentences of intro text
- [x] 3.2 Query the writing collection and render up to five article titles as links on the home page
- [x] 3.3 Confirm home page renders without error when no articles exist

## 4. Writing Index

- [x] 4.1 Create `src/writing/writing.json` with shared frontmatter (`layout: post.njk`, `tags: writing`)
- [x] 4.2 Create `src/writing/index.njk` extending `base.njk` that lists all articles sorted by date descending, titles only, as plain links
- [x] 4.3 Confirm writing index renders without error when no articles exist

## 5. Article Page Template

- [x] 5.1 Create `src/_includes/post.njk` extending `base.njk` that renders article `<h1>` title and `{{ content | safe }}`
- [x] 5.2 Add a "← Writing" link back to `/writing/` in the article layout

## 6. Sample Content

- [x] 6.1 Create at least two sample `.md` articles in `src/writing/` with `title` and `date` frontmatter and a few paragraphs of body text
- [x] 6.2 Verify the full site builds (`npx @11ty/eleventy`) and all pages render correctly

## 7. GitHub Pages Deployment

- [x] 7.1 Create `.github/workflows/deploy.yml` using the official `actions/upload-pages-artifact` + `actions/deploy-pages` actions to build and deploy `_site/` on push to `main`
- [x] 7.2 Enable GitHub Pages in repository settings (source: GitHub Actions)
- [x] 7.3 Confirm a push to `main` triggers the workflow and the site is accessible
