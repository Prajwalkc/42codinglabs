import Link from 'next/link'

/** The 42 mark: flat-cut 42 on a horizon line with a teal block cursor. Colour follows `currentColor`. */
export function Mark({ className, blink = true }: { className?: string; blink?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g transform="translate(1.5 2) scale(.9)">
        <path
          d="M22 31H5L19 7v31M26 18c0-10 15-10 15 0 0 8-14 12-14 20h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="6.2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="2"
        />
      </g>
      <path d="M3 42h35" stroke="currentColor" strokeWidth="2.2" opacity=".45" />
      <rect className={blink ? 'cur' : undefined} x="40" y="38.6" width="6" height="5.6" rx="1" fill="#2BD4C0" />
    </svg>
  )
}

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="42 Coding Labs home">
      <span className="mark">
        <Mark />
      </span>
      <span className="wm">Coding Labs</span>
    </Link>
  )
}
