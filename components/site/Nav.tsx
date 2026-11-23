'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { Chip } from './icons'
import { orderedServices } from '@/lib/services'

const SERVICES = orderedServices().map((s) => [s.name, s.blurb, `/services/${s.slug}`])

const LINKS = [
  ['Home', '/'],
  ['Work', '/work'],
  ['About Us', '/#about'],
  ['Pricing', '/pricing'],
  ['Blog', '/blog'],
]

export function Nav() {
  const [ddOpen, setDdOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ddRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const toggleTheme = () => {
    const light = document.documentElement.classList.toggle('light')
    try {
      localStorage.setItem('cl42-theme', light ? 'light' : 'dark')
    } catch {}
  }

  return (
    <header className="nav">
      <div className="nav-in">
        <Logo animated />
        <nav className="links" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
          <div className={`dd${ddOpen ? ' open' : ''}`} ref={ddRef}>
            <button className="dd-btn" aria-expanded={ddOpen} aria-haspopup="true" onClick={() => setDdOpen((o) => !o)}>
              Services
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>
            <div className="dd-menu">
              {SERVICES.map(([t, s, href]) => (
                <Link key={t} href={href} onClick={() => setDdOpen(false)}>
                  <b>{t}</b>
                  <span>{s}</span>
                </Link>
              ))}
              <Link className="dd-local" href="/software-company-nepal" onClick={() => setDdOpen(false)}>
                <b>For businesses in Nepal</b>
                <span>Websites, apps and admin panels, local payments</span>
              </Link>
            </div>
          </div>
        </nav>
        <button className="icon-btn" aria-label="Switch light or dark mode" onClick={toggleTheme}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        </button>
        <Link className="btn btn-primary" href="/#contact">
          <span className="t">Start a project</span>
          <Chip />
        </Link>
        <button
          className="icon-btn burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
      <div className={`mmenu${menuOpen ? ' open' : ''}`}>
        {[...LINKS, ['Services', '/services'], ['For businesses in Nepal', '/software-company-nepal']].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  )
}
