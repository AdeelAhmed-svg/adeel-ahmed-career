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
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: TITLE },
      { name: 'twitter:description', content: DESCRIPTION },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      // Replace with the final production URL once the site is live on its permanent domain.
      { rel: 'canonical', href: '[ADD CANONICAL URL]' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
