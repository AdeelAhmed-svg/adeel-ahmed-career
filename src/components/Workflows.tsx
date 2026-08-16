const WORKFLOWS = [
  {
    title: 'Research and synthesis',
    body: 'Using NotebookLM and Claude for source grounded research, keeping analysis tied back to the original material rather than unverified generated claims.',
  },
  {
    title: 'Content drafting and critique',
    body: 'Drafting and reviewing marketing and content pieces with ChatGPT and Claude, then editing for accuracy, tone and clarity before anything is finalized.',
  },
  {
    title: 'SEO and AI visibility analysis',
    body: 'Using AI tools alongside SEO fundamentals to research keywords, structure and how content might be understood by answer and generative search engines.',
  },
  {
    title: 'AI assisted reporting',
    body: 'Structuring findings from data analysis and marketing research into clear reports, using AI for a first pass and human review for accuracy.',
  },
]

const SEARCH_AREAS = [
  {
    title: 'SEO',
    body: 'Keyword research, on page SEO, technical SEO, content optimization, search visibility, internal linking and Search Console concepts.',
  },
  {
    title: 'AEO',
    body: 'Understanding how content can be structured to answer questions clearly for answer engines.',
  },
  {
    title: 'GEO',
    body: 'Understanding how brands and content can become more visible and useful within generative search and AI answer systems.',
  },
]

const TARGET_ROLES = [
  'AI Marketing',
  'Digital Marketing',
  'SEO',
  'Growth Marketing',
  'Junior Data Analyst',
  'Marketing Analyst',
  'Business Intelligence (entry level)',
  'SEO Analyst',
]

export function Workflows() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          How AI fits into the work
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Practical AI Workflows
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
          AI tools support the work, they do not replace professional
          judgement. Every AI assisted output is reviewed and verified before
          it is used.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {WORKFLOWS.map((w) => (
            <div key={w.title} className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-serif text-lg font-semibold text-neutral-900">
                {w.title}
              </h3>
              <p className="mt-2 leading-relaxed text-neutral-600">{w.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Search visibility
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-neutral-900">
              SEO, AEO and GEO
            </h3>
            <p className="mt-4 leading-relaxed text-neutral-600">
              Working knowledge across traditional search optimization and
              emerging answer and generative engine visibility, without any
              claim of guaranteed rankings or guaranteed AI recommendations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {SEARCH_AREAS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-neutral-200 p-6">
                <h4 className="font-serif text-lg font-semibold text-neutral-900">
                  {a.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Career goals
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-neutral-900">
            Where marketing, analytics and AI workflows overlap
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
            I am interested in roles where digital marketing, data analytics
            and AI assisted workflows come together. I am not currently
            employed in any of the roles below; this reflects the direction I
            am working toward.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {TARGET_ROLES.map((role) => (
              <li
                key={role}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
