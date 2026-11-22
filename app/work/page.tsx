import type { Metadata } from 'next'
import { ComingSoon } from '@/components/site/ComingSoon'

export const metadata: Metadata = { title: 'Work' }

export default function WorkPage() {
  return (
    <ComingSoon
      eyebrow="Work"
      solid="Case studies"
      outline="are on"
      accent="the way."
      lead="We're writing up recent apps and platforms properly, with the problem, the build and the results. Until then, we're happy to walk you through them on a call."
    />
  )
}
