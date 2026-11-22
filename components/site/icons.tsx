import type { ReactNode, SVGProps } from 'react'

/** Diagonal arrow used inside button chips and card corners. */
export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** 24px line icon wrapper (stroke style shared by every section). */
export function Ic({ children, ...props }: { children: ReactNode } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

export function Chip() {
  return (
    <span className="chip">
      <Arrow />
    </span>
  )
}
