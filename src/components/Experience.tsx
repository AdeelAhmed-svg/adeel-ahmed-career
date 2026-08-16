import { allJobs, allEducations } from 'content-collections'

export function Experience() {
  const jobs = [...allJobs].sort((a, b) => a.jobTitle.localeCompare(b.jobTitle))
  const educations = [...allEducations].sort(
    (a, b) => Number(b.endDate) - Number(a.endDate),
  )

  return (
    <section id="experience" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Experience
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
          Current internship
        </h2>

        <div className="mt-12 space-y-8">
          {jobs.map((job) => (
            <article
              key={job._meta.path}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {job.jobTitle}
                  </h3>
                  <p className="mt-1 text-neutral-400">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {job.status} · {job.startDate} to Present
                </span>
              </div>

              <p className="mt-6 max-w-3xl leading-relaxed text-neutral-300">
                {job.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {job.content && (
                <p className="mt-6 max-w-3xl whitespace-pre-line leading-relaxed text-neutral-400">
                  {job.content.trim()}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="mt-20 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Education
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
          Academic background
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {educations.map((edu) => (
            <article
              key={edu._meta.path}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h4 className="font-serif text-lg font-semibold text-white">
                {edu.program}
              </h4>
              <p className="mt-1 text-sm text-neutral-400">{edu.school}</p>
              <p className="mt-1 text-sm text-neutral-500">
                {edu.board} · {edu.endDate}
              </p>
              <p className="mt-4 leading-relaxed text-neutral-300">
                {edu.summary}
              </p>
              {edu.content && (
                <p className="mt-4 leading-relaxed text-neutral-400">
                  {edu.content.trim()}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
