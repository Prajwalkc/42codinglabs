import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'
import { SERVICE_ORDER } from '@/lib/services'

export const dynamic = 'force-static'

// Only pages with real content. /blog and /pricing are noindexed placeholders; add them back when they have content.
const PAGES: [string, number][] = [
  ['', 1],
  ['/services', 0.8],
  ...SERVICE_ORDER.map((s): [string, number] => [`/services/${s}`, 0.9]),
  ['/software-company-nepal', 0.8],
  ['/work', 0.7],
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([p, priority]) => ({ url: `${SITE}${p}`, changeFrequency: 'monthly', priority }))
}
