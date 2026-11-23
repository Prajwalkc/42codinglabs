import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, pageJsonLd, pageMeta } from '@/lib/seo'
import { NEPAL_FAQS, orderedServices } from '@/lib/services'
import { Block, CtaRow, Faqs, LinkCards, PageHero, Parts, stagger } from '@/components/site/ServicePage'

const PATH = '/software-company-nepal'
const DESCRIPTION =
  'A software and app development company in Kathmandu, Nepal. Senior engineers building iOS and Android apps, web platforms and backends for businesses in Nepal and teams in the US, UK, EU and the Gulf.'

export const metadata: Metadata = pageMeta({
  title: 'Software and app development company in Kathmandu, Nepal',
  description: DESCRIPTION,
  path: PATH,
})

const WHY = [
  { k: 'Senior', t: '8+ years of senior engineering', d: 'The engineers on your calls are the ones writing the code, with 10+ apps live on the stores between them.' },
  { k: 'Direct', t: 'No account managers', d: 'You talk to the builders on calls and in Slack, and get a written report with every delivery.' },
  { k: 'Overlap', t: 'Hours that fit yours', d: 'Working hours that overlap the US, UK, EU and the Gulf, and a reply to every enquiry within one business day.' },
  { k: 'Yours', t: '100% code ownership', d: 'Code, accounts and store listings in your name from day one.' },
]

export default function NepalPage() {
  const crumbs: [string, string][] = [['Home', '/'], ['Kathmandu, Nepal', PATH]]
  return (
    <>
      <JsonLd data={pageJsonLd({ path: PATH, name: 'Software development in Kathmandu, Nepal', description: DESCRIPTION, faqs: NEPAL_FAQS, crumbs })} />
      <PageHero
        crumbs={crumbs}
        h1={['Software studio', 'in', 'Kathmandu.']}
        lead="42 Coding Labs is a software and app development company in Kathmandu, Nepal. We build mobile apps, web platforms and backends for businesses here at home and for teams in the US, UK, EU and the Gulf."
      />

      <Block label="Nepal">
        <div className="work-case">
          <div>
            <h2 className="work-h2 rv">Built in Nepal, used around the world.</h2>
          </div>
          <div className="work-body">
            <p className="rv" style={stagger(1, 80)}>
              For businesses in Nepal, we build the apps and systems your customers and staff use every day, in English and
              Nepali. Our Mountain Whisper platform, a guest app, admin panel and API for a Nepal travel company, is one example.
            </p>
            <p className="rv" style={stagger(2, 80)}>
              For teams abroad, we work as your remote engineering team: senior people, direct contact and hours that overlap
              yours. Before 42 Coding Labs our engineers worked on mobile apps at eSewa in Nepal, Pyypl in the UAE and Aquanow
              in Canada.
            </p>
            <Link className="text-link rv" href="/work" style={stagger(3, 80)}>See the work →</Link>
          </div>
        </div>
      </Block>

      <Block label="Why work with us">
        <Parts items={WHY} />
      </Block>

      <Block label="What we build">
        <LinkCards items={orderedServices().map((s) => ({ href: `/services/${s.slug}`, k: s.name, t: s.card }))} />
      </Block>

      <Block label="Questions">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Frequently asked questions</h2>
        <Faqs faqs={NEPAL_FAQS} />
        <div className="page-end rv">
          <h2 className="work-h2">Tell us what you are working on.</h2>
          <p className="work-note">We reply within one business day with honest next steps and a rough plan.</p>
          <CtaRow />
        </div>
      </Block>
    </>
  )
}
