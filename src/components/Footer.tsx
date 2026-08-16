const GITHUB_URL = 'https://github.com/AdeelAhmed-svg'
const LINKEDIN_URL = 'https://www.linkedin.com/in/adeelahmed-'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-sm text-neutral-500 sm:flex-row sm:justify-between sm:px-8">
        <p>Adeel Ahmed · AI Marketing and Data Analytics</p>
        <div className="flex gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:techmusic019@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
