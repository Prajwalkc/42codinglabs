'use client'

import Link from 'next/link'
import { useRef } from 'react'

/**
 * The 42 mark: flat-cut 42 on a horizon line with a teal block cursor. Colour follows `currentColor`.
 * Parts are split (horizon, cursor, 4, 2) so the nav logo can animate them; with no animation it renders complete.
 */
export function Mark({ className }: { className?: string }) {
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 6.2, strokeLinecap: 'butt' as const, strokeLinejoin: 'miter' as const, strokeMiterlimit: 2 }
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g transform="translate(1.5 2) scale(.9)">
        <path className="m4" pathLength={1} d="M22 31H5L19 7v31" {...stroke} />
        <path className="m2" pathLength={1} d="M26 18c0-10 15-10 15 0 0 8-14 12-14 20h12" {...stroke} />
      </g>
      <path className="mh" pathLength={1} d="M3 42h35" stroke="currentColor" strokeWidth="2.2" opacity=".45" />
      <rect className="mc" x="40" y="38.6" width="6" height="5.6" rx="1" fill="#2BD4C0" />
    </svg>
  )
}

/**
 * The compact mark (42 + teal cursor, no horizon) set inline in running text, in place of the typed "42".
 * A visually hidden "42" stays in the text so search engines, screen readers and copy-paste still read "42 Coding Labs".
 */
export function InlineMark() {
  return (
    <span className="inline-mark">
      <svg viewBox="0 0 48 44" aria-hidden="true" focusable="false">
        <path
          d="M22 31H5L19 7v31M26 18c0-10 15-10 15 0 0 8-14 12-14 20h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="5.8"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="2"
        />
        <rect x="41" y="32.4" width="6" height="5.6" rx="1" fill="#2BD4C0" />
      </svg>
      <span className="sr-only">42</span>
    </span>
  )
}

/**
 * Logo with the "line, then cursor" animation: the horizon draws in, the teal square lands,
 * then the 4 and 2 draw up. Plays once on page load and again on hover; ends still, no blink.
 */
export function Logo({ animated = false }: { animated?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const replay = () => {
    const el = ref.current
    if (!el || !animated || el.dataset.playing === '1') return
    el.classList.remove('play')
    void el.getBoundingClientRect()
    el.classList.add('play')
  }
  return (
    <Link
      ref={ref}
      className={`logo${animated ? ' play' : ''}`}
      href="/"
      aria-label="42 Coding Labs home"
      onMouseEnter={replay}
      onAnimationStart={() => ref.current && (ref.current.dataset.playing = '1')}
      onAnimationEnd={(e) => {
        if ((e.target as Element).classList.contains('m2') && ref.current) ref.current.dataset.playing = '0'
      }}
    >
      <span className="mark">
        <Mark />
      </span>
      <span className="wm">Coding Labs</span>
    </Link>
  )
}
