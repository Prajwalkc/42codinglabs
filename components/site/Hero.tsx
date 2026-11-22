import Link from 'next/link'
import { Chip } from './icons'
import { Globe } from './Globe'

const words: [string, boolean][] = [
  ['Apps,', false], ['Platforms', false], ['&', false], ['\n', false],
  ['AI', false], ['Products', false], ['for', false], ['\n', false],
  ['Ambitious', true], ['Teams', true],
]

export function Hero() {
  let i = 0
  return (
    <section className="hero" id="studio">
      <Globe />
      <div className="wrap">
        <div className="hero-in">
          <div className="tag" style={{ animation: 'rise 1s var(--spring) both' }}>
            Software studio · Kathmandu to the world
          </div>
          <h1>
            {words.map(([w, grad], k) =>
              w === '\n' ? (
                <br key={k} />
              ) : (
                <span key={k}>
                  <span className={grad ? 'w grad' : 'w'} style={{ ['--i' as string]: i++ }}>
                    {w}
                  </span>{' '}
                </span>
              ),
            )}
          </h1>
          <p className="sub">
            We turn a rough idea into a shipped product. Senior engineers, AI-accelerated delivery, and native-quality apps
            your users actually keep.
          </p>
          <div className="ctas">
            <Link className="btn btn-primary btn-lg" href="/#contact">
              Book a call
              <Chip />
            </Link>
            <Link className="btn btn-ghost btn-lg" href="/#services">
              See what we build
              <Chip />
            </Link>
          </div>
          <div className="trust">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
            </svg>
            <span>
              Working hours that overlap <b>US, UK, EU and the Gulf</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
