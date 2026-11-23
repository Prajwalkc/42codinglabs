import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'
import Link from 'next/link'
import { Chip } from '@/components/site/icons'

export const metadata: Metadata = pageMeta({
  title: 'Work',
  description:
    'The Mountain Whisper guest app, admin panel and API, the IPS Manpower website and job-demand board, and the fintech apps our team shipped before 42 Coding Labs.',
  path: '/work',
})

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

// Real App Store screenshots of the guest app.
const MW_SHOTS = [
  { src: '/case-studies/mw-trip.webp', alt: 'Guest app trip screen: the current week of a three-month stay' },
  { src: '/case-studies/mw-chat.webp', alt: 'Guest app chat: an assistant answers, and a person can take over' },
  { src: '/case-studies/mw-wallet.webp', alt: 'Guest app documents wallet with a booking confirmation that opens offline' },
  { src: '/case-studies/mw-sos.webp', alt: 'Guest app SOS screen: hold the button for three seconds to send your location' },
]

const IPS_PARTS = [
  {
    k: 'Job demands',
    t: 'Live from approved ads',
    d: 'Each demand shows the employer, country, labour approval number, every position and the monthly salary in the local currency and in rupees.',
  },
  {
    k: 'Costs in the open',
    t: 'Who pays what',
    d: 'Every demand lists what the employer pays and what the worker pays, exactly as printed in the government-approved advertisement.',
  },
  {
    k: 'Always current',
    t: 'Listings close themselves',
    d: 'Open, closing soon or closed is worked out when the page is viewed, so a demand never claims to be open after its interview dates pass.',
  },
]

const IPS_STACK = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions']

function BrowserShot({ src, alt, url, w, h }: { src: string; alt: string; url: string; w: number; h: number }) {
  return (
    <figure className="work-browser">
      <div className="work-browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{url}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
    </figure>
  )
}

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

          <div className="work-phones">
            {MW_SHOTS.map((s) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={s.src} src={s.src} alt={s.alt} width={660} height={1434} loading="lazy" decoding="async" />
            ))}
          </div>
          <div className="work-admin">
            <BrowserShot
              src="/case-studies/mw-admin-trips.webp"
              alt="Admin panel: the agency's trips and stays, with draft, approved and published states"
              url="admin · Trips & stays"
              w={800}
              h={600}
            />
            <p className="work-caption">
              The admin panel, where staff enter a trip once. Guests only ever see the published version.
            </p>
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
            <div className="eyebrow">Case study · Client work</div>
          </div>
          <div className="work-case">
            <div>
              <h2 className="work-h2">IPS Manpower</h2>
              <p className="work-sub">Website and job-demand board for a Nepal recruitment agency</p>
              <a className="work-status" href="https://www.ipsmanpower.com" target="_blank" rel="noopener noreferrer">
                Live at ipsmanpower.com
              </a>
            </div>
            <div className="work-body">
              <p>
                IPS Manpower was formed by merging six recruitment agencies, and places Nepali workers with employers
                in the Gulf, Malaysia and Europe. Job seekers and their families need to trust a listing before they
                travel to Kathmandu for an interview.
              </p>
              <p>
                We built a fast site around the thing they come for: the current job demands, with full
                salary and cost details as published. Adding a new demand is one entry in one file, and the site
                rebuilds and redeploys itself.
              </p>
            </div>
          </div>

          <div className="work-browsers">
            <BrowserShot
              src="/case-studies/ips-demand.webp"
              alt="IPS Manpower job demands page listing an employer in Malaysia with positions and monthly salaries"
              url="ipsmanpower.com/demand"
              w={1600}
              h={1000}
            />
            <BrowserShot
              src="/case-studies/ips-home.webp"
              alt="IPS Manpower home page"
              url="ipsmanpower.com"
              w={1600}
              h={1000}
            />
          </div>

          <div className="work-parts">
            {IPS_PARTS.map((p) => (
              <div className="work-part" key={p.k}>
                <small>{p.k}</small>
                <b>{p.t}</b>
                <p>{p.d}</p>
              </div>
            ))}
          </div>

          <ul className="work-stack" aria-label="Technology">
            {IPS_STACK.map((s) => (
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
