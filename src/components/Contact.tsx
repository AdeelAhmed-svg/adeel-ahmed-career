import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

const LINKEDIN_URL = 'https://www.linkedin.com/adeelahmed-'
const GITHUB_URL = 'https://github.com/AdeelAhmed-svg'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Let's connect
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-neutral-400">
              Open to conversations about AI marketing, SEO, analytics and
              early career opportunities. Reach out directly or send a
              message using the form.
            </p>

            <div className="mt-8 space-y-4 text-neutral-300">
              <a
                href="mailto:techmusic019@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail size={18} />
                techmusic019@gmail.com
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Linkedin size={18} />
                LinkedIn profile
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Github size={18} />
                GitHub profile
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                <p className="font-serif text-xl font-semibold text-white">
                  Message sent
                </p>
                <p className="mt-2 text-neutral-400">
                  Thanks for reaching out. A reply will follow by email.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const formData = new FormData(form)
                  fetch('/__forms.html', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(
                      formData as unknown as Record<string, string>,
                    ).toString(),
                  }).then(() => setSubmitted(true))
                }}
                className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1.5 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1.5 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-white/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full resize-none rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-white/30"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
