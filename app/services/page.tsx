import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import { orderedServices } from '@/lib/services'
import { Block, LinkCards, PageHero } from '@/components/site/ServicePage'

export const metadata: Metadata = pageMeta({
  title: 'Services: mobile apps, web platforms, AI app rescue',
  description:
    'Mobile apps, web platforms, AI-built app rescue for Lovable and Bolt, backends and APIs, and App Store and Google Play publishing, from a senior software studio in Kathmandu.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[['Home', '/'], ['Services', '/services']]}
        h1={['Everything you need', 'to ship', 'software.']}
        lead="Five services, one team, one line from idea to launch. Pick the one you need now; we can take the rest as you grow."
      />
      <Block label="Our services">
        <LinkCards items={orderedServices().map((s, i) => ({ href: `/services/${s.slug}`, k: `${String(i + 1).padStart(2, '0')} · ${s.name}`, t: s.card }))} />
      </Block>
    </>
  )
}
