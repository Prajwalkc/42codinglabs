import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import { ComingSoon } from '@/components/site/ComingSoon'

export const metadata: Metadata = pageMeta({
  title: 'Blog',
  description:
    'Notes from 42 Coding Labs on building mobile apps, web platforms and AI products.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Blog"
      solid="Notes from"
      outline="the"
      accent="studio."
      lead="Practical writing on shipping apps, passing App Store review and putting AI to work. The first posts are being written now."
    />
  )
}
