import type { Metadata } from 'next'

export const SITE = 'https://www.42codinglabs.com'
export const EMAIL = 'hello@42codinglabs.com'
const OG_IMAGE = { url: '/og.png', width: 1200, height: 630, alt: '42 Coding Labs: apps, platforms and AI products for ambitious teams' }

/**
 * Title, description and link-preview tags for one page. Next replaces the layout's openGraph
 * object instead of merging it, so every page gets the full set (image included) from here.
 * `noindex` keeps a page out of search results (used for placeholder pages) while links still count.
 */
export function pageMeta(opts: { title?: string; description: string; path: string; noindex?: boolean }): Metadata {
  const ogTitle = opts.title ? `${opts.title} · 42 Coding Labs` : '42 Coding Labs · Apps, platforms and AI products'
  return {
    ...(opts.title ? { title: opts.title } : {}),
    description: opts.description,
    alternates: { canonical: opts.path },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url: opts.path,
      siteName: '42 Coding Labs',
      type: 'website',
      locale: 'en_US',
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description: opts.description, images: [OG_IMAGE.url] },
  }
}

const ORG_ID = `${SITE}/#organization`

/**
 * Site-wide structured data: the studio as an Organization and a ProfessionalService in Kathmandu.
 * Only facts that appear on the site itself. Add social profile URLs to `sameAs` once they exist.
 */
export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: '42 Coding Labs',
      url: SITE,
      logo: `${SITE}/brand/icon-192.png`,
      image: `${SITE}/og.png`,
      email: EMAIL,
      slogan: 'Think. Code. Ship.',
      description:
        'A software studio in Kathmandu, Nepal building mobile apps, web platforms, backends and AI products, and fixing and launching apps started in Lovable and Bolt, for teams in the US, UK, EU and the Gulf.',
      address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
      geo: { '@type': 'GeoCoordinates', latitude: 27.7172, longitude: 85.324 },
      areaServed: [
        { '@type': 'Country', name: 'Nepal' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Place', name: 'European Union' },
        { '@type': 'Place', name: 'Gulf Cooperation Council countries' },
      ],
      knowsAbout: ['React Native', 'Expo', 'TypeScript', 'Swift', 'Kotlin', 'Node.js', 'PostgreSQL', 'Next.js', 'App Store publishing', 'Google Play publishing', 'Lovable', 'Bolt'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: '42 Coding Labs',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en',
    },
  ],
}

/** Structured data for one page with FAQs: the service it offers, its breadcrumb and its FAQ list. */
export function pageJsonLd(opts: { path: string; name: string; serviceType?: string; description: string; faqs: { q: string; a: string }[]; crumbs: [string, string][] }) {
  const url = `${SITE}${opts.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...(opts.serviceType
        ? [
            {
              '@type': 'Service',
              '@id': `${url}#service`,
              name: opts.name,
              serviceType: opts.serviceType,
              description: opts.description,
              url,
              provider: { '@id': ORG_ID },
              areaServed: ['Worldwide'],
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: opts.crumbs.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${path}` })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: opts.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }
}

/** Renders a JSON-LD block. `<` is escaped so text can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
