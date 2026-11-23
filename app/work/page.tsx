import type { Metadata } from 'next'
import Link from 'next/link'
import { Chip } from '@/components/site/icons'

export const metadata: Metadata = {
  title: 'Work',
  description: 'The Mountain Whisper guest app, admin panel and API, and the fintech apps our team shipped before 42 Coding Labs.',
}

// Only real work. Past-employer apps are shown with public information only (company, what the app is, role, store link).
const MW_PARTS = [
  {
    k: 'Guest app',
    t: 'iOS and Android',
    d: 'One app for the whole trip: a week-by-week plan that changes by trip phase, an offline map, chat with the agency, a travel-document wallet and a hold-to-send SOS.',
  },
  {
    k: 'Admin panel',
    t: 'Web, English and Nepali',
    d: 'Staff enter everything once: trips, bookings, guests, documents, payments and content. Enquiries turn into bookings, and AI drafts wait for a person to approve them.',
  },
  {
    k: 'Platform API',
    t: 'Multi-agency backend',
    d: 'One API for many agencies. Each agency’s data is kept apart in code and again in Postgres with row-level security, with tests that prove one agency can never read another’s.',
  },
]

const MW_STACK = ['Expo', 'React Native', 'TypeScript', 'React', 'Node.js', 'Postgres', 'Docker']

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
            A platform we design, build and run ourselves, and the fintech apps our engineers shipped before 42 Coding
            Labs. Happy to walk you through any of it on a call.
          </p>
        </div>
      </section>

      <section className="sec work-sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Case study · Our own product</div>
          </div>
          <div className="work-case">
            <div>
              <h2 className="work-h2">Mountain Whisper platform</h2>
              <p className="work-sub">Guest app, admin panel and API for a Nepal travel company</p>
              <span className="work-status">In final testing before store launch</span>
            </div>
            <div className="work-body">
              <p>
                Mountain Whisper runs long remote-work stays and treks in Nepal. Guests were juggling WhatsApp threads,
                PDFs and emails, and staff were keeping bookings in spreadsheets.
              </p>
              <p>
                We built one system for both sides. The agency enters a trip once in the admin panel, and every booked
                guest gets it as a personal plan in the app. The backend was designed from day one so other agencies can
                use it under their own brand.
              </p>
            </div>
          </div>

          <div className="work-parts">
            {MW_PARTS.map((p) => (
              <div className="work-part" key={p.k}>
                <small>{p.k}</small>
                <b>{p.t}</b>
                <p>{p.d}</p>
              </div>
            ))}
          </div>

          <ul className="work-stack" aria-label="Technology">
            {MW_STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
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
