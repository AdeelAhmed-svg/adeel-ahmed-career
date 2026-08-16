# Adeel Ahmed — Portfolio

A real, working personal portfolio for Adeel Ahmed, built for the FlyRank AI Fluency internship assignment "Personal Website Live on the FlyRank Domain" (PF 04).

## What this is

A single scrolling portfolio page (Home, About, Experience, Projects, Skills, Credentials, Contact) plus a small `/blog` section reserved for future write-ups and capstone work. All content — internship details, education, certifications and projects — is drawn from information Adeel provided directly; nothing is invented.

## Tech stack

- **TanStack Start** (React 19 + TanStack Router) — file-based routing, server rendering
- **Vite 7** — build tool
- **Tailwind CSS 4** — styling
- **Content Collections** — type-safe Markdown content for jobs, education, projects and certifications
- **Netlify Forms** — serverless contact form handling (no backend code)
- **Netlify** — hosting and HTTPS

No database, no API keys, and no paid services are required.

## Project structure

```
content/                  Markdown content, one file per item
  jobs/                    Work experience (currently: FlyRank internship)
  education/               Diploma and SSC entries
  projects/                Project case studies (Data Analytics, AI Marketing, FlyRank, Accounting)
  certifications/          Credentials (Anthropic, Google, LinkedIn Learning, DigiSkills.pk, other)
  blog/                    Placeholder for future notes and capstone posts
content-collections.ts    Schemas that validate the frontmatter of every content file
src/
  routes/                  One file per page/route (TanStack Router file-based routing)
    __root.tsx             Root HTML shell + SEO meta tags
    index.tsx              Assembles the one-page portfolio from the section components
    blog/index.tsx         Notes listing
    blog/$slug.tsx         Individual note page
  components/              One component per portfolio section (Hero, About, Experience, ...)
  styles.css               Tailwind setup and design tokens
public/                    Static files served as-is (favicon, robots.txt, sitemap.xml, form skeleton)
netlify.toml               Build command and publish directory for Netlify
DNS-WALKTHROUGH.md         Plain-language explanation of DNS/CNAME for the FlyRank assignment
```

## How the content works

Every section of the site (experience, education, projects, certifications) is a folder of Markdown files under `content/`. Each file has frontmatter (the `---` block at the top) with structured fields, and a body with free-text detail.

**To edit content:** open the relevant Markdown file and change the frontmatter fields or body text. No code changes are needed. `content-collections.ts` defines what fields are required for each type — if a required field is missing, the build will fail with a clear error.

**To add a new project or certification:** copy an existing file in `content/projects/` or `content/certifications/`, give it a new filename, and fill in the frontmatter.

## How the site is organized

- `src/routes/index.tsx` renders the whole one-page portfolio by importing and stacking the section components in `src/components/` (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Workflows`, `Credentials`, `Contact`, `Footer`).
- Each section component reads its data from the content collections (e.g. `Projects.tsx` reads `allProjects`) rather than hardcoding content in JSX, so content edits never require touching component code.
- `SiteNav.tsx` is the sticky navigation bar. On desktop it shows all links; on mobile it collapses into a menu button that toggles a full-width dropdown.

## Responsive design

The layout uses Tailwind's responsive utility classes (`sm:`, `md:`, `lg:`) throughout. Sections stack to a single column on small screens and expand to multi-column grids on larger screens. The navigation switches from a horizontal link row to a collapsible mobile menu below the `md` breakpoint. There is no fixed-width content that could force horizontal scrolling.

## Certificate and credential links

Each credential card in the Credentials section links to its real public verification page, where one exists (Coursera, Google Digital Garage/Skillshop, Anthropic's Skilljar verification, LinkedIn Learning, Credly). Credentials without a public verification link (e.g. DigiSkills.pk, World English Institute) show a note instead of a broken or fabricated link.

## CV download

No CV file has been added to the project yet. The hero section shows a clearly marked placeholder instead of a fake download link. To enable it: add `cv.pdf` to the `public/` folder, then update the placeholder `<span>` in `src/components/Hero.tsx` to a real `<a href="/cv.pdf" download>` link.

## Running locally

```bash
npm install
npm run dev
```

This starts a local dev server (see `netlify.toml` for the configured port).

## Building

```bash
npm run build
```

Outputs a static/server bundle to `dist/client`, which is what Netlify publishes.

## Deploying to Netlify

1. Push this repository to GitHub (or connect it directly from your local machine using the Netlify CLI).
2. In Netlify, create a new site from this repository. Netlify will read `netlify.toml` automatically: build command `vite build`, publish directory `dist/client`.
3. Deploy. Netlify provisions a public HTTPS URL immediately (`https://<your-site-name>.netlify.app`).
4. Once FlyRank provides a subdomain on their domain, follow `DNS-WALKTHROUGH.md` to point it at this Netlify site.

No environment variables or secrets are required for this project.
