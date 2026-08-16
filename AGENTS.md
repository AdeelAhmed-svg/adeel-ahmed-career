# AGENTS.md

Guidance for AI agents (and humans) working on this repository.

## What this project is

A static-ish personal portfolio site for Adeel Ahmed, built with TanStack Start and deployed on Netlify, for the FlyRank AI Fluency internship assignment (PF 04 — personal website live on a FlyRank domain). It is a real, factual portfolio: every piece of content (internship, education, certifications, projects) reflects information Adeel actually provided. Do not invent achievements, metrics, testimonials, or credentials when editing this project.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes, no component library) |
| Content | Content Collections (type-safe Markdown) |
| Forms | Netlify Forms (contact form, no backend) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

There is no database and no server-side API route in this project — content is static Markdown compiled at build time, and the contact form posts directly to Netlify's forms endpoint.

## Directory structure

```
content/
  jobs/               One Markdown file per role (currently: FlyRank internship only)
  education/          One Markdown file per school/program
  projects/           One Markdown file per project (category field groups them)
  certifications/     One Markdown file per credential (category field groups them)
  blog/               Placeholder notes for future FlyRank/capstone write-ups
content-collections.ts  Zod schemas for every content type above
src/
  components/          One file per portfolio section, each pulling its data from content-collections
    SiteNav.tsx         Sticky nav bar + mobile menu
    Hero.tsx            Hero section, primary CTAs
    About.tsx           About section (static copy)
    Experience.tsx       FlyRank role + education, from content-collections
    Projects.tsx         Project cards + category filter, from content-collections
    Skills.tsx            Skill category grid (static data, defined in the component)
    Workflows.tsx        Practical AI Workflows, SEO/AEO/GEO, Career Goals (static copy)
    Credentials.tsx      Certification cards + category filter, from content-collections
    Contact.tsx           Contact form (Netlify Forms) + direct links
    Footer.tsx
  routes/
    __root.tsx           HTML shell, SEO meta tags
    index.tsx             Assembles the one-page portfolio from the components above
    blog/index.tsx        Notes listing page
    blog/$slug.tsx         Individual note page
  styles.css             Tailwind entrypoint + CSS variable design tokens
public/
  __forms.html           Static skeleton so Netlify's build bot can detect the contact form (see below)
  robots.txt, sitemap.xml, favicon.ico
netlify.toml             Build command (`vite build`) and publish dir (`dist/client`)
DNS-WALKTHROUGH.md       DNS/CNAME explainer for the FlyRank subdomain step
```

## Key concepts

### File-based routing

Routes are files under `src/routes/`. `index.tsx` is `/`, `blog/index.tsx` is `/blog`, `blog/$slug.tsx` is `/blog/:slug`. `__root.tsx` wraps every page.

### Content Collections

Each content type (`jobs`, `education`, `projects`, `certifications`, `blog`) is a folder of Markdown files with frontmatter validated against a Zod schema in `content-collections.ts`. Components import typed arrays like `allProjects` from `'content-collections'` — there is no manual JSON or database fetch involved. When adding a field to a content type, update the schema first, then the Markdown files, then the component that reads it.

### Netlify Forms

The contact form (`src/components/Contact.tsx`) is client-rendered, so Netlify's build-time HTML scanner can't see it directly. `public/__forms.html` is a hidden static duplicate of the same form fields, present purely so Netlify registers the form during build. The live form submits via `fetch('/__forms.html', ...)` rather than a full page POST, since this is a single-page app. Do not delete `public/__forms.html` without also removing the form, or submissions will silently fail.

### Styling

Plain Tailwind utility classes, no `cn()` helper or component library. Dark sections use `bg-neutral-950`/white text; light sections use `bg-white`/`neutral` text, to create the editorial contrast called for in the design brief. Keep this alternating pattern when adding sections.

## Conventions

- Components: PascalCase, one section per file in `src/components/`.
- Content: kebab-case filenames in `content/*/`.
- No comments explaining what code does — only for non-obvious constraints.
- No emojis, no em dashes, no unverified statistics or testimonials anywhere in copy.

## Environment variables

None required. This project has no AI API calls, no database, and no paid integrations.
