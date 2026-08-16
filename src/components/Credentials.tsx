import { useMemo, useState } from 'react'
import { allCertifications } from 'content-collections'
import { ExternalLink } from 'lucide-react'

const CATEGORY_ORDER = [
  'Anthropic',
  'Google',
  'LinkedIn Learning',
  'DigiSkills.pk',
  'Other',
]

export function Credentials() {
  const categories = useMemo(() => {
    const found = new Set(allCertifications.map((c) => c.category))
    const ordered = CATEGORY_ORDER.filter((c) => found.has(c))
    const rest = [...found].filter((c) => !CATEGORY_ORDER.includes(c))
    return ['All', ...ordered, ...rest]
  }, [])

  const [active, setActive] = useState('All')

  const visible = useMemo(() => {
    const list =
      active === 'All'
        ? allCertifications
        : allCertifications.filter((c) => c.category === active)
    return [...list].sort((a, b) => b.date.localeCompare(a.date))
  }, [active])

  return (
    <section id="credentials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Credentials
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Certifications and learning
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Anthropic, Google and LinkedIn Learning credentials sit alongside
          DigiSkills.pk certifications and other completed programs. Every
          credential links to its public verification page where one exists.
        </p>

        <div
          role="group"
          aria-label="Filter credentials by category"
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

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {visible.map((cert) => (
            <li
              key={cert._meta.path}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 p-5"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  {cert.category}
                </p>
                <h3 className="mt-1 font-serif text-base font-semibold text-neutral-900">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {cert.issuer} · {cert.date}
                </p>
                {cert.note && (
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {cert.note}
                  </p>
                )}
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
