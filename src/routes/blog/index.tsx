import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="min-h-screen bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-semibold">Notes</h1>
        <p className="mt-2 text-neutral-400">
          Write-ups on FlyRank assignments, AI workflow experiments and capstone work.
        </p>

        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post._meta.path}
              to="/blog/$slug"
              params={{ slug: post._meta.path }}
              className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <h2 className="font-serif text-xl font-semibold">{post.title}</h2>
              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                <Calendar size={14} />
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <p className="mt-3 text-neutral-400">{post.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
