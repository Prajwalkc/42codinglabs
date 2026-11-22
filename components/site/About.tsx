'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Chip } from './icons'

const POINTS = [
  ['You talk to the builders.', 'No account managers in between. The engineers writing your code are on your calls, in your Slack and answering your questions.'],
  ['Native quality, not wrappers.', 'Real tabs, real gestures, real splash screens. Apps that pass App Store review and feel at home on the phone.'],
  ['Fixed scope. Clear reports.', 'You know what ships, when, and for how much. Every delivery comes with a written report of what changed and why.'],
]

const STACK: [string, React.CSSProperties][] = [
  ['React Native', { fontWeight: 700 }],
  ['Expo', { fontFamily: 'Georgia,serif', fontStyle: 'italic' }],
  ['TYPESCRIPT', { fontWeight: 600, letterSpacing: '.06em' }],
  ['Swift', { fontFamily: 'Georgia,serif' }],
  ['KOTLIN', { fontWeight: 300, letterSpacing: '.2em' }],
  ['Node.js', { fontWeight: 700, fontStyle: 'italic' }],
  ['postgres', { fontFamily: 'ui-monospace,monospace' }],
  ['Next.js', { fontWeight: 800, letterSpacing: '-.04em' }],
  ['EAS BUILD', { fontFamily: 'Georgia,serif', letterSpacing: '.12em' }],
  ['Claude API', { fontWeight: 500 }],
]

export function About() {
  const [open, setOpen] = useState(0)
  return (
    <section className="about sec" id="about">
      <div className="wrap">
        <div className="sec-head row rv">
          <div className="eyebrow">About 42 Coding Labs</div>
          <small>Small studio. Senior hands.</small>
        </div>
        <h2 className="mega rv">
          <span>Small studio.</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Senior </span>
            <span className="v" style={{ display: 'inline' }}>output.</span>
          </span>
          <svg className="arrow" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M8 8l32 32M40 16v24H16" />
          </svg>
        </h2>
        <div className="about-grid">
          <div className="rv">
            <h3>
              Your product.
              <br />
              <span>Our full attention.</span>
            </h3>
            <Link className="btn btn-ghost" href="/#contact">
              Meet the studio
              <Chip />
            </Link>
          </div>
          <div className="rv" style={{ ['--d' as string]: '.1s' }}>
            <p className="p">
              We build mobile apps, web platforms and AI-powered products for founders and teams who need it done right the
              first time. One focused crew, from the first sketch to the store listing and the updates after it.
            </p>
            <div className="acc">
              {POINTS.map(([t, body], i) => (
                <div className={`acc-item${open === i ? ' open' : ''}`} key={t}>
                  <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="t">{t}</span>
                    <span className="pm" />
                  </button>
                  <div className="acc-body">
                    <div>
                      <p>{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="marq">
        <p className="rv">The stack we ship with every week</p>
        <div className="marq-track">
          <div className="marq-row">
            {[...STACK, ...STACK].map(([name, style], i) => (
              <span key={i} style={style} aria-hidden={i >= STACK.length}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
