import type { Metadata } from 'next'

export const SITE = 'https://www.42codinglabs.com'
const OG_IMAGE = { url: '/og.png', width: 1200, height: 630, alt: '42 Coding Labs: apps, platforms and AI products for ambitious teams' }

/**
 * Title, description and link-preview tags for one page. Next replaces the layout's openGraph
 * object instead of merging it, so every page gets the full set (image included) from here.
 */
export function pageMeta(opts: { title?: string; description: string; path: string }): Metadata {
  const ogTitle = opts.title ? `${opts.title} · 42 Coding Labs` : '42 Coding Labs · Apps, platforms and AI products'
  return {
    ...(opts.title ? { title: opts.title } : {}),
    description: opts.description,
    alternates: { canonical: opts.path },
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
