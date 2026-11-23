import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import { ComingSoon } from '@/components/site/ComingSoon'

export const metadata: Metadata = pageMeta({
  title: 'Pricing',
  description:
    'Fixed-scope projects, monthly care plans and dedicated developers. Tell us what you need and get a written estimate within one business day.',
  path: '/pricing',
  noindex: true,
})

export default function PricingPage() {
  return (
    <ComingSoon
      eyebrow="Pricing"
      solid="Clear prices,"
      outline="fixed"
      accent="scope."
      lead="We're putting our engagement models on one page: fixed-scope projects, monthly care plans and dedicated developers. Tell us what you need and we'll send a written estimate within one business day."
    />
  )
}
