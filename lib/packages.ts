/**
 * Packages, shown worldwide on /pricing and with local details (eSewa, Khalti, Fonepay, Nepali)
 * on /software-company-nepal. No prices are published yet (Prajwal, 23 Nov 2026): every card says
 * "Ask for a quote". Never put invented prices or numbers here.
 */

/**
 * WhatsApp number in international format, digits only (Prajwal's number, +971 50 371 5287).
 * Set to null to hide the button; `npm run build` then prints a warning.
 */
export const WHATSAPP: string | null = '971503715287'

if (!WHATSAPP && process.env.NODE_ENV === 'production') {
  console.warn('[packages] WHATSAPP is not set in lib/packages.ts: the WhatsApp buttons are hidden.')
}

const WA_TEXT = [
  'Hi 42 Coding Labs, I would like to talk about a project.',
  '',
  'Business name:',
  'Industry:',
  'Current website (if any):',
  'What I want to achieve:',
].join('\n')

export const whatsappHref = () => (WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WA_TEXT)}` : null)

export type Pkg = {
  name: string
  /** No prices yet (Prajwal, 23 Nov 2026): keep null so the card shows "Ask for a quote". */
  price: string | null
  /** Shown after the price, e.g. "one-time" or "/ month". */
  unit: string
  blurb: string
  items: string[]
  featured?: boolean
  /** Contact form "What do you need?" option to preselect when someone asks for a quote. */
  service?: string
}

/** One-time builds. `local` swaps in Nepal details: eSewa, Khalti and Fonepay, and English and Nepali. */
export function builds(local = false): Pkg[] {
  const pay = local ? 'eSewa, Khalti and Fonepay payments' : 'Card payments and in-app purchases'
  const langs = local ? 'English and Nepali' : 'the languages your customers use'
  return [
    {
      name: 'Business website',
      service: 'Web platform',
      price: null,
      unit: 'one-time',
      blurb: 'A clean, fast website that tells people what you do and how to reach you.',
      items: [
        'Designed for your business, mobile-first',
        `In ${langs}`,
        'Contact form, WhatsApp and Google Maps',
        'Domain, code and content in your name',
      ],
    },
    {
      name: 'Mobile app',
      service: 'Mobile app',
      price: null,
      unit: 'one-time',
      blurb: 'Your idea as a real iOS and Android app, from a first MVP to a production-ready app.',
      items: [
        'Start with an MVP, then grow it into a full production app',
        'iOS and Android from one codebase',
        `Sign-in, push notifications and ${pay.charAt(0).toLowerCase() + pay.slice(1)}`,
        'App Store and Google Play publishing',
        'Code and store accounts in your name',
      ],
    },
    {
      name: 'Business app and admin panel',
      service: 'Mobile app',
      price: null,
      unit: 'one-time',
      blurb: 'The complete software to run your business: an app for your customers, an admin panel for your team.',
      items: [
        'iOS and Android app, published on the App Store and Google Play',
        'Admin panel for bookings, orders, customers, staff and payments',
        pay,
        `Push notifications, in ${langs}`,
        'Code, store accounts and data in your name',
      ],
      featured: true,
    },
  ]
}

/** Small fixed-scope jobs: often the first project with a new client. */
export const FIX: Pkg[] = [
  {
    name: 'AI-built app rescue',
    service: 'AI-built app rescue',
    price: null,
    unit: 'fixed scope',
    blurb: 'Your Lovable or Bolt app, reviewed, fixed and launched.',
    items: [
      'Written code review and fix plan',
      'Login, data access, secrets and payments fixed',
      'Deployed on accounts in your name',
      'Optional: turn it into an iOS and Android app',
    ],
  },
  {
    name: 'App Store launch',
    service: 'Store publishing',
    price: null,
    unit: 'fixed scope',
    blurb: 'Your app through Apple and Google review, including rejections.',
    items: [
      'Developer accounts set up in your name',
      'Signing, release builds and test tracks',
      'Store listing, screenshots and privacy forms',
      'Rejections fixed and resubmitted',
    ],
  },
]

/** Monthly team option, next to the care plans. */
export const TEAM: Pkg[] = [
  {
    name: 'Dedicated developer',
    price: null,
    unit: '/ month',
    blurb: 'A senior engineer on your team, working in your hours.',
    items: [
      'Senior mobile, web or backend engineer',
      'Hours that overlap the US, UK, EU or Gulf',
      'Joins your Slack, stand-ups and repository',
      'Weekly written report',
      'All code in your repository, always yours',
    ],
  },
]

export const CARE: Pkg[] = [
  {
    name: 'Care',
    price: null,
    unit: '/ month',
    blurb: 'Keep your website or app safe, fast and up to date.',
    items: ['Hosting, SSL and daily backups', 'Uptime and error monitoring', 'Updates and small fixes', 'Monthly report'],
  },
  {
    name: 'Grow',
    price: null,
    unit: '/ month',
    blurb: 'Everything in Care, plus faster fixes and steady improvements.',
    items: ['Everything in Care', 'Fixes within 1 business day', 'Small improvements every month', 'Monthly report and call'],
    featured: true,
  },
  {
    name: 'Scale',
    price: null,
    unit: '/ month',
    blurb: 'For apps and busy businesses that change every month.',
    items: ['Everything in Grow', 'New features every month', 'App updates and store releases', 'Monthly product call'],
  },
]

export const EDGES = [
  { k: 'Ownership', t: 'You own everything', d: 'Code, domain, hosting and content are in your name from day one. No buyout fee to take your own code with you, ever.' },
  { k: 'Apps', t: 'Real apps, not just websites', d: 'Our engineers have shipped 10+ apps to the App Store and Google Play. When your business needs an app, it is the same team.' },
  { k: 'Platform', t: 'A working start, not a blank page', d: 'Our customer app, admin panel and backend are already built, so your business software starts from a working foundation instead of from zero.' },
  { k: 'Payments', t: 'eSewa, Khalti and Fonepay', d: 'Local payments built into your website or app, so customers in Nepal can pay the way they already do.' },
]
