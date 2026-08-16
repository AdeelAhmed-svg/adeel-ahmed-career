import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

const LINKEDIN_URL = 'https://www.linkedin.com/adeelahmed-'
const GITHUB_URL = 'https://github.com/AdeelAhmed-svg'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 pt-28 pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Karachi, Pakistan
        </p>

        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          Adeel Ahmed
        </h1>
        <p className="mt-3 max-w-2xl text-xl text-neutral-300 sm:text-2xl">
          AI Marketing and Data Analytics
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Digital marketing and SEO professional building practical skills
          across AI assisted marketing, search visibility, analytics and
          business intelligence.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          >
            View Projects
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Connect on LinkedIn
            <ArrowUpRight size={16} />
          </a>
          <span
            title="A CV file has not been added to the project yet. Add cv.pdf to the public folder and update this button to enable downloads."
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-white/15 px-6 py-3 text-sm font-medium text-neutral-500"
          >
            Download CV · [ADD CV FILE]
          </span>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-sm text-neutral-400">
          <a
            href={`mailto:techmusic019@gmail.com`}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail size={16} />
            techmusic019@gmail.com
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
