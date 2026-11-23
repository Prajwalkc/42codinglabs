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
    blurb: 'A fast, mobile-first website that brings in enquiries.',
    items: [
      'Up to 8 pages, designed for your business',
      'English and Nepali if you need both',
      'Contact form, WhatsApp and Google Maps',
      'Google Search basics and Business Profile setup',
      'Domain, code and content in your name',
    ],
  },
  {
    name: 'E-commerce website',
    price: null,
    unit: 'one-time',
    blurb: 'An online shop that takes local payments.',
    items: [
      'Product catalogue, cart and checkout',
      'eSewa, Khalti and Fonepay payments',
      'Orders, stock and delivery in one admin panel',
      'Order alerts by SMS or email',
      'Domain, code and content in your name',
    ],
    featured: true,
  },
  {
    name: 'Mobile app',
    price: null,
    unit: 'one-time',
    blurb: 'A real iOS and Android app, on the App Store and Google Play.',
    items: [
      'One codebase for iOS and Android',
      'eSewa, Khalti and Fonepay payments',
      'Admin panel to run it, with push notifications',
      'App Store and Google Play publishing',
      'Code, store accounts and listings in your name',
    ],
  },
]

export const CARE: Pkg[] = [
  {
    name: 'Care',
    price: null,
    unit: '/ month',
    blurb: 'Keep the site safe, fast and up to date.',
    items: ['Hosting, SSL and daily backups', 'Updates and small fixes', 'SEO upkeep and Google Business Profile', '4 short videos (reels)', 'Monthly report'],
  },
  {
    name: 'Grow',
    price: null,
    unit: '/ month',
    blurb: 'Everything in Care, plus steady content.',
    items: ['Everything in Care', '8 short videos (reels)', '2 SEO articles', 'Fixes within 1 business day', 'Monthly report and call'],
    featured: true,
  },
  {
    name: 'Scale',
    price: null,
    unit: '/ month',
    blurb: 'For apps and busy shops that change every month.',
    items: ['Everything in Grow', '12 short videos (reels)', '4 SEO articles', 'App updates and store releases', 'Monthly report and strategy call'],
  },
]

export const EDGES = [
  { k: 'Ownership', t: 'You own everything', d: 'Code, domain, hosting and content are in your name from day one. No buyout fee to take your own code with you, ever.' },
  { k: 'Apps', t: 'Real apps, not just websites', d: 'Our engineers have shipped 10+ apps to the App Store and Google Play. When your business needs an app, it is the same team.' },
  { k: 'Video', t: 'More reels, made properly', d: 'Short videos scripted, edited and captioned for Reels, TikTok and Shorts every month, as part of the plan rather than an extra.' },
  { k: 'Travel', t: 'Ready for trekking and tours', d: 'A guest app and admin panel built for trekking and tour operators: trip plans, bookings, documents, offline maps and an SOS button, in English and Nepali.' },
]
