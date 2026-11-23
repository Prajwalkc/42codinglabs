import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd, pageJsonLd, pageMeta } from '@/lib/seo'
import { SERVICES, serviceBySlug } from '@/lib/services'
import { Block, CtaRow, Faqs, LinkCards, PageHero, Steps } from '@/components/site/ServicePage'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = serviceBySlug(params.slug)
  if (!s) return {}
  return pageMeta({ title: s.title, description: s.description, path: `/services/${s.slug}` })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = serviceBySlug(params.slug)
  if (!s) notFound()
  const path = `/services/${s.slug}`
  const crumbs: [string, string][] = [
    ['Home', '/'],
    ['Services', '/services'],
    [s.name, path],
  ]

  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: s.name, serviceType: s.serviceType, description: s.description, faqs: s.faqs, crumbs })} />
      <PageHero crumbs={crumbs} h1={s.h1} lead={s.lead} />

      <Block label={s.eyebrow}>
        <div className="work-case">
          <div>
            <h2 className="work-h2">{s.h2}</h2>
          </div>
          <div className="work-body">
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        {s.problems && (
          <>
            <h3 className="page-h3">{s.problems.h}</h3>
            <ul className="tick-list">
              {s.problems.items.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </>
        )}
      </Block>

      <Block label={s.offer.h}>
        <div className="work-parts page-parts">
          {s.offer.items.map((p) => (
            <div className="work-part" key={p.k}>
              <small>{p.k}</small>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block label="How it works">
        <Steps steps={s.steps} />
      </Block>

      {s.proof && (
        <Block label={s.proof.h}>
          <p className="page-proof">{s.proof.p}</p>
          {s.proof.link && (
            <Link className="text-link" href={s.proof.link[1]} style={{ marginTop: 20 }}>
              {s.proof.link[0]} →
            </Link>
          )}
        </Block>
      )}

      <Block label="Questions">
        <h2 className="work-h2" style={{ marginTop: 28 }}>Frequently asked questions</h2>
        <Faqs faqs={s.faqs} />
      </Block>

      <Block label="Related services">
        <LinkCards
          items={s.related.map((slug) => {
            const r = serviceBySlug(slug)!
            return { href: `/services/${r.slug}`, k: r.name, t: r.card }
          })}
        />
        <div className="page-end">
          <h2 className="work-h2">Tell us what you are working on.</h2>
          <p className="work-note">We reply within one business day with honest next steps and a rough plan, not a sales script.</p>
          <CtaRow second={['All services', '/services']} />
        </div>
      </Block>
    </>
  )
}
