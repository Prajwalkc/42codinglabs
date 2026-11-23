/**
 * Content for the service pages (/services/[slug]) and the Kathmandu page.
 * Rule for this file: only facts that are true of the studio and already stated on the site
 * (10+ apps live, 8+ years senior engineering, reply within 1 business day, 100% code ownership,
 * hours overlapping the US, UK, EU and Gulf, Kathmandu, the work on /work). No invented clients,
 * numbers, timelines or reviews.
 */

export type Faq = { q: string; a: string }

export type ServiceContent = {
  slug: string
  /** Short name for nav, footer, cards and breadcrumbs. */
  name: string
  /** One line for the nav dropdown. */
  blurb: string
  /** Home Services card. */
  card: string
  /** schema.org serviceType. */
  serviceType: string
  /** <title> (the layout adds "· 42 Coding Labs"). */
  title: string
  description: string
  eyebrow: string
  h1: [string, string, string]
  lead: string
  /** Heading beside the intro paragraphs. */
  h2: string
  intro: string[]
  /** Optional "you might be here because" list. */
  problems?: { h: string; items: string[] }
  offer: { h: string; items: { k: string; t: string; d: string }[] }
  steps: { t: string; p: string }[]
  proof?: { h: string; p: string; link?: [string, string] }
  faqs: Faq[]
  related: string[]
}

const OWNERSHIP: Faq = {
  q: 'Who owns the code?',
  a: 'You do, 100%. The repository, the store listings, the developer accounts and the cloud accounts are in your name from day one. If you ever move to another team, nothing is held back.',
}

const TIMEZONES: Faq = {
  q: 'We are in the US, UK, EU or the Gulf. How does working with a team in Kathmandu work day to day?',
  a: 'Our working hours overlap with the US, UK, EU and the Gulf, so calls happen in your day. You talk to the engineers building your product directly, on calls and in Slack, and every delivery comes with a written report of what changed and why.',
}

const ESTIMATE: Faq = {
  q: 'How much does it cost?',
  a: 'It depends on scope, so we price each project as fixed scope after a short call. Tell us what you need and we reply within one business day with honest next steps, then a written estimate you can hold us to.',
}

export const SERVICES: ServiceContent[] = [
  {
    slug: 'ai-app-rescue',
    name: 'AI-built app rescue',
    blurb: 'Fix and launch Lovable or Bolt apps',
    card: 'We fix and launch what Lovable and Bolt started.',
    serviceType: 'Software repair and launch for AI-generated apps',
    title: 'Fix your Lovable or Bolt app · AI-built app rescue',
    description:
      'Built an app in Lovable, Bolt or another AI builder and hit a wall? Senior engineers fix the bugs, secure the backend and launch it on the web, the App Store and Google Play. Reply within 1 business day.',
    eyebrow: 'AI-built app rescue',
    h1: ['Fix your Lovable', 'or Bolt', 'app.'],
    lead: 'You got a long way with an AI app builder. Now it breaks with real users, every fix breaks something else, or it has to become a real iOS and Android app. Senior engineers take it from here, without starting over.',
    h2: 'Keep what works. Fix the rest.',
    intro: [
      'Lovable, Bolt and tools like them are a fast way to get a product in front of people. What they leave behind is code nobody has reviewed: logins that work in the demo but not under load, data rules that are wide open, keys sitting in the browser, and features that only work on the happy path.',
      'We read the code your builder generated, keep what is good, and fix what is not. Then we launch it, on the web and, if you need it, as a native app in the App Store and Google Play.',
    ],
    problems: {
      h: 'Sound familiar?',
      items: [
        'Each prompt fixes one bug and adds two more.',
        'Login, roles or payments only half work.',
        'Anyone can read or change data they should not see.',
        'It is slow or falls over once real users arrive.',
        'You need it in the App Store and Google Play, not just a browser.',
        'You are about to show investors or customers and need it to hold up.',
      ],
    },
    offer: {
      h: 'What we do',
      items: [
        { k: 'Audit', t: 'A written code review', d: 'We go through the repository your builder exported and send a plain-English report: what is solid, what is risky, and what to fix first.' },
        { k: 'Fix', t: 'Security and stability', d: 'Authentication, roles, database access rules, secrets, payments and error handling, fixed properly and checked before anything goes public.' },
        { k: 'Clean up', t: 'Code your next hire can read', d: 'Typed, organised and tested on the flows that matter, in a repository you own, so the product can keep growing after us.' },
        { k: 'Launch', t: 'Web, App Store and Google Play', d: 'Deployed on accounts in your name. Need a phone app? We build it with React Native and Expo on the same backend and take it through store review.' },
      ],
    },
    steps: [
      { t: 'Send us the link', p: 'Share the app and the exported code, or invite us to the repository. We reply within one business day.' },
      { t: 'Audit and plan', p: 'A written review and a fixed scope: what we will fix, in what order, and when.' },
      { t: 'Fix and harden', p: 'Short cycles with a test build in your hands each week, so you always know where it stands.' },
      { t: 'Launch and care', p: 'Go live on the web and the stores, with monitoring and monthly updates if you want them.' },
    ],
    faqs: [
      { q: 'Can you work with the code Lovable or Bolt generated?', a: 'Yes. Both let you export a normal codebase, and that is where we start. We keep what works and replace what does not, so you do not pay to rebuild parts that are already fine.' },
      { q: 'Do I have to start from scratch?', a: 'Not necessarily. The audit tells you which parts are worth keeping and what a rebuild of the rest would involve, so you decide with the facts in front of you.' },
      { q: 'Can you turn my Lovable or Bolt web app into an iOS and Android app?', a: 'Yes. We build a native app with React Native and Expo that uses the same backend, then handle the App Store and Google Play submissions, including review.' },
      { q: 'Can I keep editing the app in Lovable or Bolt afterwards?', a: 'You can, but once engineers change the code by hand, regenerating it in the builder can undo those fixes. We agree a way of working with you up front so that does not happen.' },
      OWNERSHIP,
      ESTIMATE,
    ],
    related: ['app-store-publishing', 'backend-admin', 'mobile-apps'],
  },
  {
    slug: 'app-store-publishing',
    name: 'Store publishing',
    blurb: 'App Store and Play Store, first time',
    card: 'Through App Store review, first time.',
    serviceType: 'App Store and Google Play publishing',
    title: 'App Store rejection help and app publishing',
    description:
      'App rejected by Apple or Google, or launching for the first time? We fix the build, the metadata or the policy issue, handle signing, privacy forms and listings, and resubmit. Reply within 1 business day.',
    eyebrow: 'App Store and Google Play publishing',
    h1: ['Through App Store', 'and Play', 'review.'],
    lead: 'A rejection email, a signing error or a privacy form you do not understand can stall a finished app for weeks. We have taken 10+ apps live on the stores. We read what the reviewer actually asked for, fix it and resubmit.',
    h2: 'Most rejections are fixable.',
    intro: [
      'Store review is its own job. Apple and Google check how the app behaves, what it collects, how people sign in and pay, and whether the listing matches the app. Most rejections are fixable once you know exactly which rule was hit and what the reviewer needs to see.',
      'We do it for apps we build and for apps built by someone else, including apps started in AI builders.',
    ],
    problems: {
      h: 'Common reasons apps get stuck',
      items: [
        'Crashes, broken links or a demo login the reviewer could not use.',
        'Rejected as a website in an app wrapper, with too little native function.',
        'Missing account deletion, permission explanations or privacy details.',
        'Digital goods sold outside the store’s in-app purchase rules.',
        'Sign-in options that do not meet the store’s login rules.',
        'Google Play closed-testing requirements for new developer accounts.',
      ],
    },
    offer: {
      h: 'What we handle',
      items: [
        { k: 'Accounts', t: 'Developer accounts in your name', d: 'Apple Developer Program and Google Play Console set up for your company, with us added as team members. You keep ownership.' },
        { k: 'Builds', t: 'Signing and release builds', d: 'Certificates, provisioning, version numbers and release builds with EAS Build, plus TestFlight and Play testing tracks.' },
        { k: 'Listing', t: 'Store listing and forms', d: 'Screenshots, descriptions, age ratings, App Privacy labels and Play Data safety answers that match what the app really does.' },
        { k: 'Review', t: 'Rejections, fixed and resubmitted', d: 'We reply to the reviewer, change the app or the listing where needed, and send it back with a clear note on what changed.' },
      ],
    },
    steps: [
      { t: 'Share the rejection', p: 'Forward the reviewer’s message, or tell us where the launch is stuck. We reply within one business day.' },
      { t: 'Diagnose', p: 'We match it to the exact guideline and tell you plainly what has to change, in the app or the listing.' },
      { t: 'Fix and resubmit', p: 'We make the change, test it on real devices and resubmit with a note to the reviewer.' },
      { t: 'Keep it live', p: 'Updates, new OS versions and policy changes handled, so the next release goes through too.' },
    ],
    faqs: [
      { q: 'My app was rejected by Apple. Can you help if you did not build it?', a: 'Yes. Send us the rejection message and access to the code or build. We work out exactly which guideline was hit and what needs to change before we touch anything.' },
      { q: 'Do you need my Apple or Google password?', a: 'No. You add us as team members in App Store Connect and the Google Play Console. The accounts stay yours and you can remove us at any time.' },
      { q: 'Why does Apple reject apps that are just a website in a wrapper?', a: 'Apple’s minimum functionality rule expects an app to offer more than a website does. We fix this by building the key screens as real native screens with React Native and Expo, not by hiding the web view.' },
      { q: 'How long does it take?', a: 'The review itself is in Apple’s and Google’s hands. Our side is quick: we reply within one business day, and once the fix is agreed we resubmit as soon as it is tested.' },
      { q: 'Can you publish the app under my company name?', a: 'Yes. The developer account, the listing and the app belong to your company. We are added as team members, so the app is never tied to us.' },
      OWNERSHIP,
    ],
    related: ['mobile-apps', 'ai-app-rescue', 'backend-admin'],
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile apps',
    blurb: 'iOS and Android, one codebase',
    card: 'iOS and Android apps that feel native.',
    serviceType: 'Mobile app development',
    title: 'React Native app development for iOS and Android',
    description:
      'A React Native and Expo studio building iOS and Android apps from one codebase. Senior engineers, a test build every week, store launch and 100% code ownership. Hours overlap the US, UK, EU and the Gulf.',
    eyebrow: 'Mobile app development',
    h1: ['iOS and Android', 'apps that feel', 'native.'],
    lead: 'One codebase, two stores, and an app your users keep. We design and build mobile apps with React Native and Expo, drop into Swift and Kotlin when the phone needs it, and take them through App Store and Google Play review.',
    h2: 'Built for the moment users decide.',
    intro: [
      'Users decide in seconds whether an app feels right. We build for that moment: real tabs and gestures, instant screens, smooth lists, and offline states that do not break.',
      'You work with the senior engineers writing the code, with working hours that overlap yours. It works like an in-house mobile team, without hiring one.',
    ],
    offer: {
      h: 'What you get',
      items: [
        { k: 'One codebase', t: 'iOS and Android together', d: 'React Native, Expo and TypeScript, so both platforms ship the same features at the same time.' },
        { k: 'Native feel', t: 'Not a website in a box', d: 'Native navigation, gestures and splash screens, fast start-up and smooth 60fps lists. Swift and Kotlin where a feature needs it.' },
        { k: 'Real-world features', t: 'Push, deep links, offline', d: 'Push notifications, deep links, offline mode, maps, payments and sign-in, built to work on a small phone with a weak signal.' },
        { k: 'Store-ready', t: 'Launch included', d: 'Signing, store listings, privacy forms and review handled, then monitoring and updates after launch.' },
      ],
    },
    steps: [
      { t: 'Discovery call', p: 'The business goal, the users and the constraints, before anyone talks about screens.' },
      { t: 'Scope and plan', p: 'A fixed scope, a timeline you can hold us to, and a clear list of what ships first.' },
      { t: 'Design', p: 'Flows and a visual system built for the platform, reviewed with you before code.' },
      { t: 'Build', p: 'Short cycles with a test build on your phone each week.' },
      { t: 'QA and security', p: 'Small-phone checks, crash testing, auth and data reviewed before anything goes public.' },
      { t: 'Launch and care', p: 'Store submission, monitoring and monthly updates.' },
    ],
    proof: {
      h: 'Apps we have built',
      p: 'The Mountain Whisper guest app for iOS and Android, with its admin panel and API, and before 42 Coding Labs our engineers worked on mobile apps at eSewa, Pyypl and Aquanow.',
      link: ['See the work', '/work'],
    },
    faqs: [
      { q: 'Why React Native instead of separate native apps?', a: 'One codebase means both platforms get every feature at the same time, for less build and maintenance work. React Native renders real native components, and we write Swift or Kotlin for the parts that need to go deeper.' },
      { q: 'Will a React Native app feel native?', a: 'It should, and we build it to: native navigation and gestures, fast start-up, smooth lists and proper splash screens. If something feels off on a real device, it is not finished.' },
      { q: 'Can you take over or improve an existing app?', a: 'Yes. We review the code first and tell you what to keep, what to fix and what it will take, before we change anything.' },
      TIMEZONES,
      OWNERSHIP,
      ESTIMATE,
    ],
    related: ['app-store-publishing', 'backend-admin', 'ai-app-rescue'],
  },
  {
    slug: 'backend-admin',
    name: 'Backends & APIs',
    blurb: 'Databases, auth and integrations',
    card: 'Databases, auth and APIs that hold up.',
    serviceType: 'Backend, API and admin panel development',
    title: 'Backend, API and admin panel development',
    description:
      'Node.js and Postgres backends, APIs and admin panels for apps and SaaS: authentication, roles, multi-tenant data, payments and integrations, deployed on accounts you own. Reply within 1 business day.',
    eyebrow: 'Backends, APIs and admin panels',
    h1: ['Backends and', 'admin panels', 'that hold up.'],
    lead: 'The part your users never see decides whether the product works. We build the database, the API and the admin panel your team runs the business from, with security and growth designed in from the start.',
    h2: 'The part users never see.',
    intro: [
      'A good backend keeps data safe, stays fast as users grow, and lets your team change content and settings without asking a developer. We build it with TypeScript, Node.js and Postgres, and an admin panel your staff can use on day one.',
      'Building for more than one customer or brand? We design multi-tenant systems where each customer’s data is kept apart in code and again in the database, with tests that prove it.',
    ],
    offer: {
      h: 'What we build',
      items: [
        { k: 'API', t: 'APIs for web and mobile', d: 'Typed Node.js APIs that your apps, partners and integrations can rely on, documented and tested.' },
        { k: 'Data', t: 'Postgres, done properly', d: 'Schemas, migrations, row-level security and backups, so data is correct, private and recoverable.' },
        { k: 'Access', t: 'Auth, roles and multi-tenant', d: 'Sign-in, roles and permissions, and data kept apart per customer or agency where you need it.' },
        { k: 'Admin', t: 'Admin panels your team uses', d: 'Bookings, users, content, payments and reports in one place, in more than one language if your team needs it.' },
      ],
    },
    steps: [
      { t: 'Discovery call', p: 'What the system must do, who uses it, and what it has to connect to.' },
      { t: 'Scope and design', p: 'Data model, API and roles agreed in writing, with a fixed scope.' },
      { t: 'Build', p: 'Short cycles, a working environment you can try each week.' },
      { t: 'Security review', p: 'Auth, data access and secrets checked before anything goes public.' },
      { t: 'Deploy and care', p: 'Deployed with Docker on accounts in your name, then monitoring and updates.' },
    ],
    proof: {
      h: 'Example: Mountain Whisper',
      p: 'One API for many travel agencies, with each agency’s data kept apart in code and again in Postgres with row-level security, and an admin panel in English and Nepali.',
      link: ['Read the case study', '/work'],
    },
    faqs: [
      { q: 'Which stack do you use?', a: 'TypeScript, Node.js and PostgreSQL, deployed with Docker, with React or Next.js for admin panels. We choose boring, well-supported tools so any good engineer can work on it later.' },
      { q: 'Can you build a multi-tenant SaaS backend?', a: 'Yes. Our Mountain Whisper platform serves many agencies from one API, with each agency’s data separated in code and in Postgres row-level security, and tests that prove one agency cannot read another’s data.' },
      { q: 'Can you work on our existing backend or Supabase project?', a: 'Yes. Supabase runs on Postgres, which is what we build on. We review what is there first and fix the risky parts, such as access rules and secrets, before adding features.' },
      { q: 'Where is it hosted?', a: 'On cloud accounts in your name, so you own the infrastructure as well as the code.' },
      OWNERSHIP,
      ESTIMATE,
    ],
    related: ['web-platforms', 'mobile-apps', 'ai-app-rescue'],
  },
  {
    slug: 'web-platforms',
    name: 'Web platforms',
    blurb: 'Web products and admin panels',
    card: 'Fast web products and admin panels.',
    serviceType: 'Web application development',
    title: 'Web app and platform development with Next.js',
    description:
      'Next.js and React web apps: SaaS products, customer portals, dashboards and admin panels that load fast and are easy to change. Senior engineers, fixed scope and 100% code ownership.',
    eyebrow: 'Web platforms',
    h1: ['Web platforms', 'that load', 'fast.'],
    lead: 'SaaS products, customer portals, dashboards and admin panels, built with Next.js, React and TypeScript. Fast on a phone, easy for your team to update, and found by search engines.',
    h2: 'Fast today, easy to change later.',
    intro: [
      'A web product has to load fast, work on every screen size and be easy to change next quarter. We build with Next.js, React and TypeScript on top of a backend designed for it, and test on small phones as well as big screens.',
      'Often the web platform is the other half of a mobile app: the place your staff run things and your customers sign in from a laptop. We build both on one backend.',
    ],
    offer: {
      h: 'What we build',
      items: [
        { k: 'Products', t: 'SaaS and web apps', d: 'Sign-up, billing, dashboards and the core workflow your customers pay for.' },
        { k: 'Portals', t: 'Customer and partner portals', d: 'Self-service for bookings, documents, orders and accounts, so fewer things go through email.' },
        { k: 'Admin', t: 'Admin panels', d: 'The back office for your app or business, with roles, audit trails and more than one language if needed.' },
        { k: 'Sites', t: 'Fast marketing sites', d: 'Static, fast pages with proper titles, structured data and link previews, like the one you are reading.' },
      ],
    },
    steps: [
      { t: 'Discovery call', p: 'The goal, the users and what success looks like.' },
      { t: 'Scope and plan', p: 'A fixed scope and timeline, and what ships first.' },
      { t: 'Design', p: 'Flows and a visual system reviewed with you before code.' },
      { t: 'Build', p: 'Short cycles with a preview link you can try each week.' },
      { t: 'Launch and care', p: 'Deployed on your accounts, monitored and updated.' },
    ],
    faqs: [
      { q: 'Which technology do you use for web apps?', a: 'Next.js, React and TypeScript, with a Node.js and Postgres backend. They are widely used, fast and easy to hire for, so you are never locked in to us.' },
      { q: 'Can you build the web app and the mobile app together?', a: 'Yes, and it is often the best way: one backend and one set of business rules serving the web platform and the iOS and Android apps.' },
      { q: 'Will the site be good for SEO?', a: 'We build pages that load fast, with proper titles, descriptions, structured data and a sitemap. Rankings also depend on content and links over time, and we will tell you honestly what that takes.' },
      TIMEZONES,
      OWNERSHIP,
      ESTIMATE,
    ],
    related: ['backend-admin', 'mobile-apps', 'ai-app-rescue'],
  },
]

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)

/** Order used on the home page, nav and footer (matches the original home Services list). */
export const SERVICE_ORDER = ['mobile-apps', 'web-platforms', 'ai-app-rescue', 'backend-admin', 'app-store-publishing']
export const orderedServices = () => SERVICE_ORDER.map((s) => serviceBySlug(s)!)

export const NEPAL_FAQS: Faq[] = [
  { q: 'Where is 42 Coding Labs based?', a: 'In Kathmandu, Nepal. We work with clients in Nepal and remotely with teams in the US, UK, EU and the Gulf.' },
  { q: 'Do you build apps and software for businesses in Nepal?', a: 'Yes. Our Mountain Whisper platform, a guest app, admin panel and API, was built for a Nepal travel company, and its admin panel works in English and Nepali.' },
  { q: 'Can you build an app in Nepali?', a: 'Yes. We build interfaces in English and Nepali, so staff and customers can use the language they prefer.' },
  { q: 'What experience does the team have?', a: 'Our engineers have 8+ years of senior engineering behind them and 10+ apps live on the stores, including mobile work at eSewa in Nepal, Pyypl in the UAE and Aquanow in Canada before 42 Coding Labs.' },
  { q: 'Do you take eSewa, Khalti and Fonepay payments in websites and apps?', a: 'Yes. Our e-commerce sites and apps for Nepal take payments through eSewa, Khalti and Fonepay.' },
  { q: 'Do I own the website or app?', a: 'Yes, fully. The code, domain, hosting and content are in your name from day one, and there is no fee to take your code elsewhere.' },
  { q: 'How much does software or app development cost in Nepal?', a: 'It depends on what you need, so we quote each project after a short call, as a fixed scope you can hold us to. Our packages page shows what a website, a mobile app or a complete business app includes.' },
  { q: 'Do you work with businesses outside Kathmandu?', a: 'Yes. We are based in Kathmandu and work remotely with businesses anywhere in Nepal, as well as teams in the US, UK, EU and the Gulf.' },
  TIMEZONES,
  OWNERSHIP,
]
