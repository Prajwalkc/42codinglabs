import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Faq } from '@/lib/services'
import { Arrow, Chip } from './icons'

/** Page hero for service and landing pages: breadcrumb, three-part H1, lead and CTAs. */
export function PageHero({ crumbs, h1, lead }: { crumbs: [string, string][]; h1: [string, string, string]; lead: string }) {
  return (
    <section className="sub-hero work-hero">
      <div className="wrap">
        <nav className="eyebrow crumbs" aria-label="Breadcrumb">
          {crumbs.map(([label, href], i) =>
            i < crumbs.length - 1 ? (
              <span key={href}>
                <Link href={href}>{label}</Link>
                <span className="sep" aria-hidden="true">/</span>
              </span>
            ) : (
              <span key={href} aria-current="page">{label}</span>
            ),
          )}
        </nav>
        <h1 className="mega">
          <span>{h1[0]}</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>{h1[1]} </span>
            <span className="v" style={{ display: 'inline' }}>{h1[2]}</span>
          </span>
        </h1>
        <p className="lead">{lead}</p>
        <CtaRow />
      </div>
    </section>
  )
}

export function CtaRow({ second = ['See our work', '/work'] }: { second?: [string, string] }) {
  return (
    <div className="ctas">
      <Link className="btn btn-primary btn-lg" href="/#contact">
        Book a call
        <Chip />
      </Link>
      <Link className="btn btn-ghost btn-lg" href={second[1]}>
        {second[0]}
        <Chip />
      </Link>
    </div>
  )
}

/** A bordered page section with an eyebrow label. */
export function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="sec work-sec">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{label}</div>
        </div>
        {children}
      </div>
    </section>
  )
}

export function Steps({ steps }: { steps: { t: string; p: string }[] }) {
  return (
    <ol className="proc page-proc">
      {steps.map((s, i) => (
        <li className="step" key={s.t}>
          <div className="k">{String(i + 1).padStart(2, '0')}</div>
          <h3>{s.t}</h3>
          <p>{s.p}</p>
        </li>
      ))}
    </ol>
  )
}

/** FAQ list as native <details>, so it works without JavaScript and the answers are in the HTML. */
export function Faqs({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{f.q}</h3>
            <span className="pm" aria-hidden="true" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function LinkCards({ items }: { items: { href: string; k: string; t: string }[] }) {
  return (
    <div className="link-cards">
      {items.map((it) => (
        <Link className="link-card" href={it.href} key={it.href}>
          <span>
            <small>{it.k}</small>
            <b>{it.t}</b>
          </span>
          <Arrow className="go" />
        </Link>
      ))}
    </div>
  )
}
