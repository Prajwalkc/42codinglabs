import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { pageMeta, SITE } from '@/lib/seo'
import { Nav } from '@/components/site/Nav'
import { Footer } from '@/components/site/Footer'
import { RevealObserver } from '@/components/site/RevealObserver'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: '42 Coding Labs · Apps, platforms and AI products',
    template: '%s · 42 Coding Labs',
  },
  ...pageMeta({
    description:
      'A software studio in Kathmandu building mobile apps, web platforms and AI products for teams in the US, UK, EU and the Gulf. Think. Code. Ship.',
    path: '/',
  }),
}

export const viewport: Viewport = {
  themeColor: '#07070B',
  viewportFit: 'cover',
}

// Applies the saved light/dark choice before first paint, so there is no flash.
const themeScript = `try{if(localStorage.getItem('cl42-theme')==='light')document.documentElement.classList.add('light')}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}
