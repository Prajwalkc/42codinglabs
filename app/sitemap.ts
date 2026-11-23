import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'
import { SERVICE_ORDER } from '@/lib/services'
import { CASE_STUDIES } from '@/lib/case-studies'

export const dynamic = 'force-static'

// Only pages with real content. /blog is a noindexed placeholder; add it back when it has posts.
const PAGES: [string, number][] = [
  ['', 1],
  ['/services', 0.8],
  ['/pricing', 0.8],
  ...SERVICE_ORDER.map((s): [string, number] => [`/services/${s}`, 0.9]),
  ['/software-company-nepal', 0.8],
  ['/work', 0.7],
  ...CASE_STUDIES.map((c): [string, number] => [`/work/${c.slug}`, 0.7]),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([p, priority]) => ({ url: `${SITE}${p}`, changeFrequency: 'monthly', priority }))
}
