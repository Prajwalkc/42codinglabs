import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { pageMeta } from '@/lib/seo'
import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies'
import { BrowserShot, PhoneShot } from '@/components/site/CaseShots'
import { Chip } from '@/components/site/icons'
import '../case-studies.css'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCaseStudy(params.slug)
  if (!c) return {}
  return pageMeta({ title: `${c.name} case study`, description: c.metaDescription, path: `/work/${c.slug}` })
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = getCaseStudy(params.slug)
  if (!c) notFound()
  const i = CASE_STUDIES.indexOf(c)
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length]

  return (
    <>
      <section className="sub-hero work-hero">
        <div className="wrap">
          <nav className="eyebrow cs-crumbs" aria-label="Breadcrumb">
            <Link href="/work">Work</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Case study · {c.kind}</span>
          </nav>
          <h1 className="mega cs-title">{c.name}</h1>
          <p className="lead">{c.sub}</p>
          {c.status.href ? (
            <a className="work-status" href={c.status.href} target="_blank" rel="noopener noreferrer">
              {c.status.text}
            </a>
          ) : (
            <span className="work-status">{c.status.text}</span>
          )}
        </div>
      </section>

      <section className="sec work-sec cs-sec">
        <div className="wrap">
          <div className="work-case">
            <h2 className="work-h2 rv">The story</h2>
            <div className="work-body">
              {c.story.map((p, i) => (
                <p className="rv" key={p.slice(0, 24)} style={{ ['--d' as string]: `${(i + 1) * 0.08}s` }}>{p}</p>
              ))}
            </div>
          </div>

          {c.phones && (
            <div className="work-phones rv">
              {c.phones.map((s) => (
                <PhoneShot key={s.src} shot={s} />
              ))}
            </div>
          )}

          {c.browsers &&
            (c.browsersStacked ? (
              c.browsers.map((b) => (
                <div className="work-admin rv" key={b.src}>
                  <BrowserShot shot={b} />
                  {b.caption && <p className="work-caption">{b.caption}</p>}
                </div>
              ))
            ) : (
              <div className="work-browsers rv">
                {c.browsers.map((b) => (
                  <BrowserShot key={b.src} shot={b} />
                ))}
              </div>
            ))}

          <h2 className="work-h2 cs-h2 rv">What we built</h2>
          <div className="work-parts">
            {c.parts.map((p, i) => (
              <div className="work-part rv" key={p.k} style={{ ['--d' as string]: `${i * 0.08}s` }}>
                <small>{p.k}</small>
                <b>{p.t}</b>
                <p>{p.d}</p>
              </div>
            ))}
          </div>

          <ul className="work-stack rv" aria-label="Technology">
            {c.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="ctas work-cta rv">
            <Link className="btn btn-primary btn-lg" href="/#contact">
              Book a call
              <Chip />
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/work">
              All work
              <Chip />
            </Link>
          </div>

          {next.slug !== c.slug && (
            <Link className="cs-next rv" href={`/work/${next.slug}`}>
              <small>Next case study</small>
              <b>{next.name}</b>
              <span>{next.summary}</span>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
