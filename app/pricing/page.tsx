import type { Metadata } from 'next'
import { ComingSoon } from '@/components/site/ComingSoon'

export const metadata: Metadata = { title: 'Pricing' }

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
