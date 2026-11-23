import Link from 'next/link'
import { InlineMark, Logo, Mark } from './Logo'
import { orderedServices } from '@/lib/services'

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
              {orderedServices().map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><Link href="/software-company-nepal">For businesses in Nepal</Link></li>
            </ul>
          </div>
        </div>
        <span className="giant-mark" aria-hidden="true">
          <Mark />
        </span>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} <InlineMark /> Coding Labs · <span className="tagline">Think. Code. Ship<i className="tcur" aria-hidden="true" /></span></span>
          <span><Link href="/software-company-nepal">Kathmandu, Nepal</Link> · Remote worldwide</span>
        </div>
      </div>
    </footer>
  )
}
