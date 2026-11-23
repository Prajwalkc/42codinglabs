import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd, pageJsonLd, pageMeta } from '@/lib/seo'
import { CARE, FIX, TEAM, builds } from '@/lib/packages'
import type { Faq } from '@/lib/services'
import { Block, Faqs, PageHero, stagger } from '@/components/site/ServicePage'
import { ContactCtas, Packages } from '@/components/site/Packages'

const PATH = '/pricing'
const DESCRIPTION =
  'Packages from 42 Coding Labs: AI-built app rescue, App Store launch, a business website, a mobile app from MVP to production, a complete business app with admin panel, monthly care plans and dedicated developers. Fixed scope, and you own everything.'

export const metadata: Metadata = pageMeta({
  title: 'Packages: websites, mobile apps and admin panels',
  description: DESCRIPTION,
  path: PATH,
})

const FAQS: Faq[] = [
  { q: 'Why is there no price on the packages?', a: 'Every business needs a slightly different scope, so we price each project after a short call. You get a written, fixed-scope estimate within one business day, and that is the price you pay.' },
  { q: 'Can I start with an MVP and grow it later?', a: 'Yes. Most apps should. We build the smallest version that proves the idea, launch it on the App Store and Google Play, then grow it into a full production app as you learn from real users.' },
  { q: 'Do I own the website or app?', a: 'Yes, fully. The code, domain, hosting, store accounts and data are in your name from day one, and there is no fee to take your code elsewhere.' },
  { q: 'What happens after launch?', a: 'You can run it yourself, or pick a monthly care plan: hosting, monitoring, fixes and improvements with a report every month. Either way the code and accounts stay yours.' },
  { q: 'Where is the team, and how do we work across time zones?', a: 'We are in Kathmandu, Nepal, with working hours that overlap the US, UK, EU and the Gulf. You talk to the engineers directly, on calls, WhatsApp or Slack, and get a written report with every delivery.' },
]

export default function PricingPage() {
  const crumbs: [string, string][] = [['Home', '/'], ['Packages', PATH]]
  return (
    <>
      <JsonLd data={pageJsonLd({ path: PATH, name: 'Packages', description: DESCRIPTION, faqs: FAQS, crumbs })} />
      <PageHero
        crumbs={crumbs}
        h1={['Clear packages,', 'fixed', 'scope.']}
        lead="Fix and launch what you have, build a website, an app or the complete software, then keep it growing with a monthly plan or a developer of your own. Tell us what you need and get a written estimate within one business day."
        cta={<ContactCtas />}
      />

      <Block label="Fix and launch">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Already have an app? Start here.</h2>
        <p className="work-note rv" style={stagger(1)}>
          Small, fixed-scope jobs to get what you have working and live.
        </p>
        <Packages items={FIX} />
      </Block>

      <Block label="Build">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>A website, an app, or the complete software.</h2>
        <p className="work-note rv" style={stagger(1)}>
          A fixed price for the build, agreed before we start. Everything we make is yours to keep.
        </p>
        <Packages items={builds()} />
      </Block>

      <Block label="Care">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Monthly care plans.</h2>
        <p className="work-note rv" style={stagger(1)}>
          Fixed deliverables every month, so you know exactly what you are paying for. Everything we make stays yours.
        </p>
        <Packages items={CARE} />
      </Block>

      <Block label="Team">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Or a developer of your own.</h2>
        <p className="work-note rv" style={stagger(1)}>
          A senior engineer who works as part of your team, month to month, with you talking to them directly.
        </p>
        <Packages items={TEAM} />
      </Block>

      <Block label="Need something specific?">
        <p className="page-proof rv">
          Fixing an app built in Lovable or Bolt, getting through App Store review, or a backend for an existing product?
          See our <Link className="info-link" href="/services">services</Link>, or tell us about it and we will scope it.
        </p>
      </Block>

      <Block label="Questions">
        <h2 className="work-h2 rv" style={{ marginTop: 28 }}>Frequently asked questions</h2>
        <Faqs faqs={FAQS} />
        <div className="page-end rv">
          <h2 className="work-h2">Tell us what you are working on.</h2>
          <p className="work-note">We reply within one business day with honest next steps and a fixed-scope estimate.</p>
          <ContactCtas />
        </div>
      </Block>
    </>
  )
}
