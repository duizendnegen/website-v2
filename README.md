# eliandor.com — Personal Site

A personal website for Pepijn Schoen. Built with Eleventy. Deployed via GitHub Pages. Edited by publishing Markdown files.

---

## Goal

This site should read like a person.

The focus shifts from professional history to presence: who I am, what I think about, what I want to say. A short "about" and a handful of carefully chosen articles. Nothing more, nothing that needs maintaining beyond the writing itself.

---

## Design Philosophy

Typography is the design. Not an accent — the whole thing.

No hero images. No cards. No gradients. No icons. The reading experience *is* the experience. Inspired by sites like [davidcole.me](http://davidcole.me) and [hugo.blog](https://hugo.blog): a strong typeface, generous line spacing, a narrow readable column, and a lot of white space do more than any visual flourish could. The constraint is the aesthetic.

**Rules:**
- One typeface (or two at most — body and mono for code, if needed)
- Dark text on white background, subtle accents.
- No sidebar, no hero, no footer clutter
- Navigation: Home · About · Writing — nothing else
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

No CMS. No dashboard. No database. Just files.

---

## Typography Candidates

These are starting points — one should be chosen and committed to.

| Typeface | Character | Source |
|---|---|---|
| [Literata](https://fonts.google.com/specimen/Literata) | Warm serif, designed for reading | Google Fonts |
| [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) | Classical, literary | Google Fonts |
| [iA Writer Quattro](https://github.com/iaolo/iA-Fonts) | Clean, editorial, mono-adjacent | Free/open source |
| [Newsreader](https://fonts.google.com/specimen/Newsreader) | Editorial serif, excellent at small sizes | Google Fonts |

Recommendation: **Literata** for body, nothing else. It's warm without being decorative, and designed for long-form reading.

---

## Milestones

- [ ] Set up Eleventy project and deploy a blank page to Github Pages
- [ ] Implement base layout and CSS (typography, column width, spacing)
- [ ] Build Home, About, Writing index, and Article templates
- [ ] Write About page content
- [ ] Select and publish 3–5 initial articles
- [ ] Point eliandor.com to new site
- [ ] Retire old site
