import Link from 'next/link'
import { InlineMark, Logo, Mark } from './Logo'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Logo />
            <p>A software studio building mobile apps, web platforms and AI products for teams around the world.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Mobile apps</Link></li>
              <li><Link href="/#services">Web platforms</Link></li>
              <li><Link href="/#services">AI-built app rescue</Link></li>
              <li><Link href="/#services">Store publishing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <span className="giant-mark" aria-hidden="true">
          <Mark />
        </span>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} <InlineMark /> Coding Labs. The answer is good code.</span>
          <span>Kathmandu · Remote worldwide</span>
        </div>
      </div>
    </footer>
  )
}
