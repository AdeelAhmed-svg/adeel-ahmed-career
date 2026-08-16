import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Post not found</h1>
          <Link to="/blog" className="text-neutral-300 hover:underline">
            Back to notes
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white">
          <ArrowLeft size={16} />
          Back to notes
        </Link>

        <article className="mt-8">
          <header className="mb-8">
            <h1 className="font-serif text-4xl font-semibold">{post.title}</h1>
            <div className="mt-4 flex items-center gap-3 text-neutral-500">
              <Calendar size={16} />
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          <div
            className="max-w-none leading-relaxed text-neutral-300 [&_a]:text-white [&_a]:underline [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-white [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
