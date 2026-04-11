# eliandor.com — Personal Site

A personal website for Pepijn Schoen. Built with Eleventy. Deployed via GitHub Pages. Edited by publishing Markdown files.

- One typeface
- Dark text on white background, subtle accents.
- No sidebar, no hero, no footer clutter
- Navigation: Home · About · Writing
- Works on mobile without a separate mobile design — simplicity makes it naturally responsive

---

## Page Structure

```
/                     → Home (brief intro + links to recent writing)
/about                → About page (longer)
/writing              → Index of all articles
/writing/[slug]       → Individual article
```

### Home (`/`)

Two or three sentences about who I am and what this site is. Links to the most recent or most notable articles. No dates, no excerpts — just titles as invitations. The sparseness is intentional.

### About (`/about`)

A personal and professional page.

### Writing (`/writing`)

A plain list of article titles. No categories, no tags, no excerpts. Trust the reader to be curious.

### Article (`/writing/[slug]`)

Title, body. A link back to Writing. That's it.

---

## Technical Stack

| Concern | Choice |
|---|---|
| Static site generator | [Eleventy (11ty)](https://www.11ty.dev/) |
| Templating | Nunjucks or Liquid |
| Content | Markdown files in `/writing/` |
| Styling | Plain CSS (no framework) |
| Hosting | GitHub Pages |
| Domain | eliandor.com |
| Deploy trigger | Git push to `main` |

---

## Project Structure

```
/
├── .eleventy.js          # Eleventy config
├── package.json
├── src/
│   ├── _includes/
│   │   ├── base.njk      # Base HTML layout
│   │   └── post.njk      # Article layout
│   ├── _data/
│   │   └── site.js       # Site-wide metadata (title, author, etc.)
│   ├── index.njk         # Home page
│   ├── about.md          # About page (edit this to update /about)
│   ├── writing/
│   │   ├── writing.json  # Shared frontmatter for all articles
│   │   ├── index.njk     # Article list
│   │   └── *.md          # Individual articles ← this is where you write
└── public/
    └── style.css         # All styling, kept minimal
```

---

## Writing Workflow

To publish a new article:

1. Create a new `.md` file in `src/writing/`
2. Add frontmatter:
   ```yaml
   ---
   title: Your Title Here
   date: 2026-03-27
   ---
   ```
3. Write in Markdown below the frontmatter
4. Commit and push — Github Pages deploys automatically
