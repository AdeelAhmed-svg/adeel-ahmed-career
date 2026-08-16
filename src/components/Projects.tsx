import { useMemo, useState } from 'react'
import { allProjects } from 'content-collections'
import { ExternalLink, Github } from 'lucide-react'

const CATEGORY_ORDER = ['FlyRank', 'Data Analytics', 'AI Marketing', 'Accounting']

export function Projects() {
  const categories = useMemo(() => {
    const found = new Set(allProjects.map((p) => p.category))
    const ordered = CATEGORY_ORDER.filter((c) => found.has(c))
    const rest = [...found].filter((c) => !CATEGORY_ORDER.includes(c))
    return ['All', ...ordered, ...rest]
  }, [])

  const [active, setActive] = useState('All')

  const visible = useMemo(() => {
    if (active === 'All') return allProjects
    return allProjects.filter((p) => p.category === active)
  }, [active])

  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Projects
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Proof of work
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Real projects from academic capstone work, independent data
          analytics practice and ongoing FlyRank internship assignments.
        </p>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <article
              key={project._meta.path}
              className="flex flex-col rounded-2xl border border-neutral-200 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-serif text-xl font-semibold text-neutral-900">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === 'Ongoing'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-neutral-500">
                {project.category}
              </p>

              <dl className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-700">
                <div>
                  <dt className="font-medium text-neutral-900">Problem</dt>
                  <dd className="mt-1 text-neutral-600">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-medium text-neutral-900">Approach</dt>
                  <dd className="mt-1 text-neutral-600">{project.approach}</dd>
                </div>
                <div>
                  <dt className="font-medium text-neutral-900">
                    Outcome / Deliverable
                  </dt>
                  <dd className="mt-1 text-neutral-600">{project.outcome}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
                  >
                    <Github size={16} />
                    View GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
