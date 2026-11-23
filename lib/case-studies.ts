// Case studies shown on /work and at /work/<slug>.
// Only real work: every screenshot is a real screen of the product, and every claim can be shown on a call.

export type Shot = { src: string; alt: string; w: number; h: number }
export type BrowserShot = Shot & { url: string }

export type CaseStudy = {
  slug: string
  name: string
  kind: string
  /** One line for the card on /work. */
  summary: string
  /** Subtitle under the page title. */
  sub: string
  metaDescription: string
  status: { text: string; href?: string }
  story: string[]
  phones?: Shot[]
  browsers?: (BrowserShot & { caption?: string })[]
  /** Browser shots shown centred one at a time instead of side by side. */
  browsersStacked?: boolean
  parts: { k: string; t: string; d: string }[]
  stack: string[]
  cover: { type: 'phones'; shots: Shot[] } | { type: 'browser'; shot: BrowserShot }
}

const MW_PHONES: Shot[] = [
  { src: '/case-studies/mw-trip.webp', alt: 'Guest app trip screen: the current week of a three-month stay', w: 660, h: 1434 },
  { src: '/case-studies/mw-chat.webp', alt: 'Guest app chat: an assistant answers, and a person can take over', w: 660, h: 1434 },
  { src: '/case-studies/mw-wallet.webp', alt: 'Guest app documents wallet with a booking confirmation that opens offline', w: 660, h: 1434 },
  { src: '/case-studies/mw-sos.webp', alt: 'Guest app SOS screen: hold the button for three seconds to send your location', w: 660, h: 1434 },
]

const IPS_DEMAND: BrowserShot = {
  src: '/case-studies/ips-demand.webp',
  alt: 'IPS Manpower job demands page listing an employer in Malaysia with positions and monthly salaries',
  url: 'ipsmanpower.com/demand',
  w: 1600,
  h: 1000,
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'mountain-whisper',
    name: 'Mountain Whisper platform',
    kind: 'Our own product',
    summary: 'Guest app, admin panel and multi-agency API for a Nepal travel company.',
    sub: 'Guest app, admin panel and API for a Nepal travel company',
    metaDescription:
      'How 42 Coding Labs built the Mountain Whisper platform: an iOS and Android guest app, an admin panel in English and Nepali, and a multi-agency API.',
    status: { text: 'In final testing before store launch' },
    story: [
      'Mountain Whisper runs long remote-work stays and treks in Nepal. Guests were juggling WhatsApp threads, PDFs and emails, and staff were keeping bookings in spreadsheets.',
      'We built one system for both sides. The agency enters a trip once in the admin panel, and every booked guest gets it as a personal plan in the app. The backend was designed from day one so other agencies can use it under their own brand.',
    ],
    phones: MW_PHONES,
    browsers: [
      {
        src: '/case-studies/mw-admin-trips.webp',
        alt: "Admin panel: the agency's trips and stays, with draft, approved and published states",
        url: 'admin · Trips & stays',
        w: 800,
        h: 600,
        caption: 'The admin panel, where staff enter a trip once. Guests only ever see the published version.',
      },
    ],
    browsersStacked: true,
    parts: [
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
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'React', 'Node.js', 'Postgres', 'Docker'],
    cover: { type: 'phones', shots: [MW_PHONES[0], MW_PHONES[1], MW_PHONES[3]] },
  },
  {
    slug: 'ips-manpower',
    name: 'IPS Manpower',
    kind: 'Client work',
    summary: 'Website and live job-demand board for a Nepal recruitment agency.',
    sub: 'Website and job-demand board for a Nepal recruitment agency',
    metaDescription:
      'How 42 Coding Labs built the IPS Manpower website: a fast site and live job-demand board with full salary and cost details for a Nepal recruitment agency.',
    status: { text: 'Live at ipsmanpower.com', href: 'https://www.ipsmanpower.com' },
    story: [
      'IPS Manpower was formed by merging six recruitment agencies, and places Nepali workers with employers in the Gulf, Malaysia and Europe. Job seekers and their families need to trust a listing before they travel to Kathmandu for an interview.',
      'We built a fast site around the thing they come for: the current job demands, with full salary and cost details as published. Adding a new demand is one entry in one file, and the site rebuilds and redeploys itself.',
    ],
    browsers: [
      IPS_DEMAND,
      { src: '/case-studies/ips-home.webp', alt: 'IPS Manpower home page', url: 'ipsmanpower.com', w: 1600, h: 1000 },
    ],
    parts: [
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
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
    cover: { type: 'browser', shot: IPS_DEMAND },
  },
]

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)
