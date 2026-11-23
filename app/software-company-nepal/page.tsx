import type { Metadata } from 'next'
import Link from 'next/link'
import { EMAIL, JsonLd, pageJsonLd, pageMeta } from '@/lib/seo'
import { NEPAL_FAQS, orderedServices } from '@/lib/services'
import { Block, Faqs, LinkCards, PageHero, Parts, stagger } from '@/components/site/ServicePage'
import { ContactCtas } from '@/components/site/Packages'
import { EDGES } from '@/lib/packages'

const PATH = '/software-company-nepal'
const DESCRIPTION =
  'A software and app development company in Kathmandu, Nepal. Senior engineers building iOS and Android apps, web platforms and backends for businesses in Nepal and teams in the US, UK, EU and the Gulf.'

export const metadata: Metadata = pageMeta({
  title: 'Software and app development company in Kathmandu, Nepal',
  description: DESCRIPTION,
  path: PATH,
})

const INDUSTRIES = [
  'Travel, trekking and tour operators',
  'Clinics and health services',
  'Schools, colleges and training centres',
  'Restaurants and cafés',
  'Shops and online stores',
  'Gyms and fitness studios',
  'Real estate and rentals',
  'Service businesses and startups',
]

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
        h1={['Software company', 'in Kathmandu,', 'Nepal.']}
        lead="42 Coding Labs is a software and app development company in Kathmandu, Nepal. We build mobile apps, web platforms and backends for businesses here at home and for teams in the US, UK, EU and the Gulf."
        cta={<ContactCtas />}
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

      <Block label="Services in Nepal">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Software development services in Nepal.</h2>
        <p className="work-note rv" style={stagger(1)}>
          Websites, mobile apps, admin panels, backends and App Store publishing, built in Kathmandu by senior engineers.
        </p>
        <LinkCards
          items={[
            ...orderedServices().map((s) => ({ href: `/services/${s.slug}`, k: s.name, t: s.card })),
            { href: '/pricing', k: 'Packages', t: 'See what each package includes and ask for a quote.' },
          ]}
        />
      </Block>

      <Block label="Who we build for">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Software for businesses across Nepal.</h2>
        <ul className="tick-list">
          {INDUSTRIES.map((it, i) => (
            <li className="rv" style={stagger(i, 50)} key={it}>{it}</li>
          ))}
        </ul>
      </Block>

      <Block label="Why local businesses choose us">
        <Parts items={EDGES} />
      </Block>

      <Block label="One platform, any business">
        <div className="work-case">
          <div>
            <h2 className="work-h2 rv">An app and admin panel for your business.</h2>
          </div>
          <div className="work-body">
            <p className="rv" style={stagger(1, 80)}>
              We built a complete platform for a travel company in Nepal: an app for guests, an admin panel for staff and the
              backend behind both. The same foundation fits any business that takes bookings, orders or members: clinics,
              schools, gyms, restaurants, shops and service companies.
            </p>
            <p className="rv" style={stagger(2, 80)}>
              Your customers book, order and pay in the app. Your team runs everything from one admin panel in English and
              Nepali. It carries your brand, and the code and data are yours.
            </p>
            <Link className="text-link rv" href="/work" style={stagger(3, 80)}>See the case study →</Link>
          </div>
        </div>
      </Block>

      <Block label="Working from abroad?">
        <Parts items={WHY} />
      </Block>

      <Block label="Contact in Kathmandu">
        <dl className="nap rv">
          <div><dt>Company</dt><dd>42 Coding Labs</dd></div>
          <div><dt>Location</dt><dd>Kathmandu, Nepal</dd></div>
          <div><dt>Email</dt><dd><a className="info-link" href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
          <div><dt>Reply time</dt><dd>Within one business day</dd></div>
        </dl>
      </Block>

      <Block label="Questions">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Frequently asked questions</h2>
        <Faqs faqs={NEPAL_FAQS} />
        <div className="page-end rv">
          <h2 className="work-h2">Tell us what you are working on.</h2>
          <p className="work-note">We reply within one business day with honest next steps and a rough plan.</p>
          <ContactCtas />
        </div>
      </Block>
    </>
  )
}
