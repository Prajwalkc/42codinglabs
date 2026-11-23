/**
 * Local packages for businesses in Nepal, shown only on /software-company-nepal.
 * The rest of the site is for US, UK, EU and Gulf clients and shows no NPR prices.
 *
 * Prices and the WhatsApp number are set by Prajwal. Until a value is filled in, the page shows
 * "Ask for a quote" and hides the WhatsApp button, so nothing invented is ever published.
 */

/**
 * WhatsApp number in international format, digits only (Prajwal's number, +971 50 371 5287).
 * Set to null to hide the button; `npm run build` then prints a warning.
 */
export const WHATSAPP: string | null = '971503715287'

if (!WHATSAPP && process.env.NODE_ENV === 'production') {
  console.warn('[nepal] WHATSAPP is not set in lib/nepal.ts: the WhatsApp button on /software-company-nepal is hidden.')
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
}

export const BUILDS: Pkg[] = [
  {
    name: 'Business website',
    price: null,
    unit: 'one-time',
    blurb: 'A clean, fast website that tells people what you do and how to reach you.',
    items: [
      'Designed for your business, mobile-first',
      'English and Nepali if you need both',
      'Contact form, WhatsApp and Google Maps',
      'Domain, code and content in your name',
    ],
  },
  {
    name: 'Mobile app',
    price: null,
    unit: 'one-time',
    blurb: 'Your idea as a real iOS and Android app, from a first MVP to a production-ready app.',
    items: [
      'Start with an MVP, then grow it into a full production app',
      'iOS and Android from one codebase',
      'Sign-in, push notifications and eSewa, Khalti and Fonepay payments',
      'App Store and Google Play publishing',
      'Code and store accounts in your name',
    ],
  },
  {
    name: 'Business app and admin panel',
    price: null,
    unit: 'one-time',
    blurb: 'The complete software to run your business: an app for your customers, an admin panel for your team.',
    items: [
      'iOS and Android app, published on the App Store and Google Play',
      'Admin panel for bookings, orders, customers, staff and payments',
      'eSewa, Khalti and Fonepay payments',
      'Push notifications, in English and Nepali',
      'Code, store accounts and data in your name',
    ],
    featured: true,
  },
]

export const CARE: Pkg[] = [
  {
    name: 'Care',
    price: null,
    unit: '/ month',
    blurb: 'Keep your website or app safe, fast and up to date.',
    items: ['Hosting, SSL and daily backups', 'Updates and small fixes', '4 short videos (reels)', 'Monthly report'],
  },
  {
    name: 'Grow',
    price: null,
    unit: '/ month',
    blurb: 'Everything in Care, plus more content and faster fixes.',
    items: ['Everything in Care', '8 short videos (reels)', 'Fixes within 1 business day', 'Monthly report and call'],
    featured: true,
  },
  {
    name: 'Scale',
    price: null,
    unit: '/ month',
    blurb: 'For apps and busy businesses that change every month.',
    items: ['Everything in Grow', '12 short videos (reels)', 'App updates and store releases', 'Monthly strategy call'],
  },
]

export const EDGES = [
  { k: 'Ownership', t: 'You own everything', d: 'Code, domain, hosting and content are in your name from day one. No buyout fee to take your own code with you, ever.' },
  { k: 'Apps', t: 'Real apps, not just websites', d: 'Our engineers have shipped 10+ apps to the App Store and Google Play. When your business needs an app, it is the same team.' },
  { k: 'Platform', t: 'A working start, not a blank page', d: 'Our customer app, admin panel and backend are already built, so your business software starts from a working foundation instead of from zero.' },
  { k: 'Video', t: 'More reels, made properly', d: 'Short videos scripted, edited and captioned for Reels, TikTok and Shorts every month, as part of the plan rather than an extra.' },
]
