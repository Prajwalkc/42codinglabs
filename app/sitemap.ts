import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/work', '/pricing', '/blog'].map((p) => ({ url: `${SITE}${p}`, changeFrequency: 'monthly', priority: p ? 0.7 : 1 }))
}
