import Link from 'next/link'
import type { Pkg } from '@/lib/packages'
import { whatsappHref } from '@/lib/packages'
import type { ReactNode } from 'react'
import { Arrow, Chip, Ic } from './icons'
import { stagger } from './ServicePage'

/** WhatsApp logo, drawn as a single path so it follows currentColor. */
function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.8 5-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.9c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.5-.6-.6-1-1.2-1.2-1.6-.1-.2 0-.4.1-.5l.4-.4.3-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  )
}

/**
 * "Book a call" stays the primary action; WhatsApp sits beside it as a matching outlined button whose
 * chip carries the WhatsApp mark in WhatsApp green, so it is recognisable at a glance. The message is
 * pre-filled. The WhatsApp button only appears once a number is set.
 */
export function ContactCtas() {
  const wa = whatsappHref()
  return (
    <div className="ctas">
      <Link className="btn btn-primary btn-lg" href="/#contact">
        Book a call
        <Chip />
      </Link>
      {wa && (
        <a className="btn btn-ghost btn-lg wa-btn" href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us (opens WhatsApp)">
          WhatsApp us
          <span className="chip wa-chip">
            <WaIcon />
          </span>
        </a>
      )}
    </div>
  )
}

/** Line icons per package, in the same style as the home Services cards. */
const ICONS: Record<string, ReactNode> = {
  'AI-built app rescue': <Ic><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z" /><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></Ic>,
  'App Store launch': <Ic><path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 13l2 2M14.5 4.5C17 3 20 3 21 3c0 1 0 4-1.5 6.5L13 16l-5-5z" /><circle cx="15.5" cy="8.5" r="1.5" /></Ic>,
  'Business website': <Ic><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M8 21h8" /></Ic>,
  'Mobile app': <Ic><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></Ic>,
  'Business app and admin panel': <Ic><rect x="2.5" y="5" width="13" height="11" rx="1.5" /><path d="M2.5 8.5h13M6 19.5h6" /><rect x="15.5" y="9" width="6" height="11" rx="1.5" /></Ic>,
  Care: <Ic><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></Ic>,
  Grow: <Ic><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></Ic>,
  Scale: <Ic><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></Ic>,
  'Dedicated developer': <Ic><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" /></Ic>,
}

/** Care plans have one-word names; say "care plan" so the enquiry is clear. */
const CARE_NAMES = ['Care', 'Grow', 'Scale']

export function Packages({ items }: { items: Pkg[] }) {
  // A lone card stays card-sized instead of stretching across the page.
  return (
    <div className={`pkgs${items.length === 1 ? ' one' : ''}`} style={{ ['--cols' as string]: items.length }}>
      {items.map((p, i) => (
        <div className={`pkg rv${p.featured ? ' featured' : ''}`} key={p.name} style={stagger(i, 80)}>
          {p.featured && <span className="pkg-tag">Recommended</span>}
          {ICONS[p.name] && <span className="pkg-ic">{ICONS[p.name]}</span>}
          <h3>{p.name}</h3>
          <p className="pkg-blurb">{p.blurb}</p>
          <div className="pkg-price">
            {p.price ? (
              <>
                <b>{p.price}</b>
                <span>{p.unit}</span>
              </>
            ) : (
              <Link className="ask" href={`/?${new URLSearchParams({ package: CARE_NAMES.includes(p.name) ? `${p.name === 'Care' ? 'Care' : `${p.name} care`} plan` : p.name, ...(p.service ? { service: p.service } : {}) })}#contact`}>
                Ask for a quote
                <Arrow className="go" />
              </Link>
            )}
          </div>
          <ul>
            {p.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
