import Link from 'next/link'
import { Chip, Ic } from './icons'

export function Apps() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Mobile apps</div>
        </div>
        <h2 className="mega rv">
          <span>Apps</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Built to feel </span>
            <span className="v" style={{ display: 'inline' }}>native.</span>
          </span>
        </h2>
        <div className="apps-grid">
          <div className="rv">
            <p className="lead" style={{ marginTop: 0 }}>
              Users decide in seconds whether an app feels right. We build for that moment: smooth gestures, instant screens
              and offline states that don&apos;t break.
            </p>
            <div className="feat-list">
              <div className="feat"><span className="ic"><Ic><rect x="7" y="2.5" width="10" height="19" rx="2.5" /></Ic></span>One codebase, iOS and Android</div>
              <div className="feat"><span className="ic"><Ic><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></Ic></span>Fast start, smooth 60fps lists</div>
              <div className="feat"><span className="ic"><Ic><path d="M6 8a6 6 0 0112 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 004 0" /></Ic></span>Push, deep links, offline mode</div>
              <div className="feat"><span className="ic"><Ic><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /></Ic></span>Store-ready, review-proof builds</div>
            </div>
          </div>
          <div className="phone-stage rv" style={{ ['--d' as string]: '.1s' }} aria-label="Example app screen">
            <div className="float-badge" style={{ left: '2%', top: '18%' }}>
              <span className="dot" />
              <span><b>Build 1.4.2</b> passed review</span>
            </div>
            <div className="float-badge" style={{ right: 0, bottom: '16%', animationDelay: '-3s' }}>
              <span><b>4.9</b> ★ avg rating</span>
            </div>
            <div className="phone">
              <div className="scr">
                <div className="island" />
                <div className="app-top"><small>Good evening</small><b>Your trips</b></div>
                <div className="app-card"><small>Next departure</small><b>Annapurna · 14 Mar</b></div>
                <div className="app-list">
                  <div className="app-row" style={{ ['--d' as string]: '.2s' }}><i /><span>Guide confirmed</span><em>Done</em></div>
                  <div className="app-row" style={{ ['--d' as string]: '.35s' }}><i /><span>Permits uploaded</span><em>Done</em></div>
                  <div className="app-row" style={{ ['--d' as string]: '.5s' }}><i /><span>Packing list</span><em style={{ color: '#9B9BAD' }}>6 left</em></div>
                  <div className="app-row" style={{ ['--d' as string]: '.65s' }}><i /><span>Pay balance</span><em style={{ color: '#a78bfa' }}>Due</em></div>
                </div>
                <div className="app-tabs"><i /><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-cta rv">
          <Link className="btn btn-primary btn-lg" href="/#contact">
            Start your app
            <Chip />
          </Link>
        </div>
      </div>
    </section>
  )
}
