import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

const TITLE = 'Adeel Ahmed | AI Marketing, SEO and Data Analytics'
const DESCRIPTION =
  'Portfolio of Adeel Ahmed, an AI Marketing and SEO professional building practical experience across search visibility, analytics, AI workflows and growth marketing.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Adeel Ahmed' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:url', content: 'https://adeel-ahmed-career.netlify.app/' },
      { property: 'og:image', content: 'https://adeel-ahmed-career.netlify.app/og-image.png' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: 'https://adeel-ahmed-career.netlify.app/og-image.png' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://adeel-ahmed-career.netlify.app/' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DJ3ET78F9Z"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DJ3ET78F9Z');` }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
