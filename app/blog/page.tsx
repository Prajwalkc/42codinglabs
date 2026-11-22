import type { Metadata } from 'next'
import { ComingSoon } from '@/components/site/ComingSoon'

export const metadata: Metadata = { title: 'Blog' }

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
