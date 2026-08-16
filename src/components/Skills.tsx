const SKILL_GROUPS = [
  {
    title: 'AI Marketing',
    items: [
      'AI assisted research',
      'Prompt engineering',
      'AI workflows',
      'Claude',
      'ChatGPT',
      'Gemini',
      'Perplexity',
      'NotebookLM',
    ],
  },
  {
    title: 'Marketing',
    items: [
      'SEO',
      'AEO',
      'GEO',
      'Content strategy',
      'Digital marketing',
      'Social media marketing',
      'Ecommerce marketing',
      'Google Shopping',
      'Affiliate marketing',
    ],
  },
  {
    title: 'Analytics',
    items: [
      'SQL',
      'Excel',
      'Power BI',
      'Google Analytics',
      'Google Search Console',
      'Data cleaning',
      'Business intelligence',
      'Data visualization',
    ],
  },
  {
    title: 'Accounting',
    items: ['QuickBooks', 'Zoho Books', 'Financial accounting', 'Bookkeeping', 'Excel'],
  },
  {
    title: 'Technical',
    items: ['Basic Python', 'HTML', 'CSS', 'GitHub'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Skills
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
          Working knowledge across marketing and data
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-white">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
