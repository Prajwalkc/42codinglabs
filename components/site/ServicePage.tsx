import Link from 'next/link'
import { Fragment, type CSSProperties, type ReactNode } from 'react'
import type { Faq } from '@/lib/services'
import { Arrow, Chip } from './icons'

export { StepLine as Steps } from './StepLine'

/** Stagger for `.rv` items in a row: RevealObserver blur-rises each one this much later than the last. */
export const stagger = (i: number, ms = 70): CSSProperties => ({ ['--d' as string]: `${(i * ms) / 1000}s` })

/** Real facts from the home page stats, shown quietly under the hero CTAs. */
const PROOF = ['10+ apps live on the stores', '8+ years senior engineering', 'Reply within 24h', '100% code ownership']

/** Splits a heading line into words that rise in one after another, like the home hero. */
function Words({ text, from }: { text: string; from: number }) {
  return (
    <>
      {text.split(' ').map((w, k) => (
        <Fragment key={k}>
          <span className="w" style={{ ['--i' as string]: from + k }}>{w}</span>{' '}
        </Fragment>
      ))}
    </>
  )
}

/** Page hero for service and landing pages: breadcrumb, three-part H1, lead, CTAs and the proof strip. */
export function PageHero({ crumbs, h1, lead, cta }: { crumbs: [string, string][]; h1: [string, string, string]; lead: string; cta?: ReactNode }) {
  const n0 = h1[0].split(' ').length
  const n1 = h1[1].split(' ').length
  return (
    <section className="sub-hero work-hero page-hero">
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
          <span>
            <Words text={h1[0]} from={0} />
          </span>
          <span>
            <span className="o" style={{ display: 'inline' }}>
              <Words text={h1[1]} from={n0} />
            </span>
            <span className="v" style={{ display: 'inline' }}>
              <Words text={h1[2]} from={n0 + n1} />
            </span>
          </span>
        </h1>
        <p className="lead">{lead}</p>
        {cta ?? <CtaRow />}
        <ul className="proof" aria-label="Studio facts">
          {PROOF.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
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
export function Block({ label, id, children }: { label: string; id?: string; children: ReactNode }) {
  return (
    <section className="sec work-sec" id={id}>
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">{label}</div>
        </div>
        {children}
      </div>
    </section>
  )
}

/** FAQ list as native <details>, so it works without JavaScript and the answers are in the HTML. */
export function Faqs({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} className="rv" style={stagger(i, 60)}>
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

/** Cards linking to other pages. The reveal sits on a wrapper so it never fights the card's hover lift. */
export function LinkCards({ items }: { items: { href: string; k: string; t: string }[] }) {
  return (
    <div className="link-cards">
      {items.map((it, i) => (
        <div className="rv" style={stagger(i)} key={it.href}>
          <Link className="link-card" href={it.href}>
            <span>
              <small>{it.k}</small>
              <b>{it.t}</b>
            </span>
            <Arrow className="go" />
          </Link>
        </div>
      ))}
    </div>
  )
}

/** The four-up "what we do" cards. */
export function Parts({ items }: { items: { k: string; t: string; d: string }[] }) {
  return (
    <div className="work-parts page-parts">
      {items.map((p, i) => (
        <div className="work-part rv" key={p.k} style={stagger(i)}>
          <small>{p.k}</small>
          <h3>{p.t}</h3>
          <p>{p.d}</p>
        </div>
      ))}
    </div>
  )
}
