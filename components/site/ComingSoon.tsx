import Link from 'next/link'
import { Chip } from './icons'

/** Placeholder page in the site style, used until Work, Pricing and Blog have real content. */
export function ComingSoon({ eyebrow, solid, outline, accent, lead }: { eyebrow: string; solid: string; outline: string; accent: string; lead: string }) {
  return (
    <section className="sub-hero">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mega">
          <span>{solid}</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>{outline} </span>
            <span className="v" style={{ display: 'inline' }}>{accent}</span>
          </span>
        </h1>
        <p className="lead">{lead}</p>
        <div className="ctas">
          <Link className="btn btn-primary btn-lg" href="/#contact">
            Book a call
            <Chip />
          </Link>
          <Link className="btn btn-ghost btn-lg" href="/">
            Back to home
            <Chip />
          </Link>
        </div>
      </div>
    </section>
  )
}
