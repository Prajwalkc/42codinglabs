import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import Link from 'next/link'
import { Chip } from '@/components/site/icons'
import { CASE_STUDIES } from '@/lib/case-studies'
import { BrowserShot, PhoneShot } from '@/components/site/CaseShots'
import './case-studies.css'

export const metadata: Metadata = pageMeta({
  title: 'Work',
  description:
    'The Mountain Whisper guest app, admin panel and API, the IPS Manpower website and job-demand board, and the fintech apps our team shipped before 42 Coding Labs.',
  path: '/work',
})

// Only real work. Past-employer apps are shown with public information only (company, what the app is, role, store link).
const BEFORE = [
  {
    co: 'eSewa',
    where: 'Nepal',
    what: 'Nepal’s first payment service provider: bills, top-ups, tickets and transfers.',
    role: 'iOS engineering',
    href: 'https://apps.apple.com/app/id614370939',
  },
  {
    co: 'Pyypl',
    where: 'UAE',
    what: 'A mobile wallet and card app for sending and receiving money across the Middle East and Africa.',
    role: 'React Native engineering',
    href: 'https://apps.apple.com/app/pyypl/id1499841532',
  },
  {
    co: 'Aquanow',
    where: 'Canada',
    what: 'Crypto infrastructure that banks and brokerages build their digital-asset products on.',
    role: 'Lead mobile engineer',
    href: 'https://www.aquanow.com',
  },
]

export default function WorkPage() {
  return (
    <>
      <section className="sub-hero work-hero">
        <div className="wrap">
          <div className="eyebrow">Work</div>
          <h1 className="mega">
            <span>Real products,</span>
            <span>
              <span className="o" style={{ display: 'inline' }}>built </span>
              <span className="v" style={{ display: 'inline' }}>end to end.</span>
            </span>
          </h1>
          <p className="lead">
            A travel platform we design, build and run ourselves, a live site for one of Nepal&apos;s largest recruitment
            agencies, and the fintech apps our engineers shipped before 42 Coding Labs. Happy to walk you through any of
            it on a call.
          </p>
        </div>
      </section>

      <section className="sec work-sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Case studies</div>
          </div>
          <div className="cs-cards">
            {CASE_STUDIES.map((c) => (
              <Link className="cs-card" key={c.slug} href={`/work/${c.slug}`}>
                <div className={`cs-cover cs-cover-${c.cover.type}`}>
                  {c.cover.type === 'phones' ? (
                    c.cover.shots.map((s) => <PhoneShot key={s.src} shot={s} />)
                  ) : (
                    <BrowserShot shot={c.cover.shot} />
                  )}
                </div>
                <div className="cs-meta">
                  <small>{c.kind}</small>
                  <b>{c.name}</b>
                  <p>{c.summary}</p>
                  <span className="cs-more">Read case study</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec work-sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Before 42 Coding Labs</div>
          </div>
          <h2 className="work-h2" style={{ marginTop: 28 }}>Fintech apps our engineers shipped</h2>
          <p className="work-note">
            Built as employees of these companies. The apps are theirs; we show only public information and our role.
          </p>
          <div className="work-list">
            {BEFORE.map((b) => (
              <a className="work-row" key={b.co} href={b.href} target="_blank" rel="noopener noreferrer">
                <div className="work-co">
                  <b>{b.co}</b>
                  <small>{b.where}</small>
                </div>
                <p>{b.what}</p>
                <span className="work-role">{b.role}</span>
              </a>
            ))}
          </div>

          <div className="ctas work-cta">
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
    </>
  )
}
