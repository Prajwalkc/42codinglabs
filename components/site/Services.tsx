'use client'

import Link from 'next/link'
import { useEffect, useRef, type ReactNode } from 'react'
import { Arrow, Chip, Ic } from './icons'

const SERVICES: { k: string; href: string; title: string; icon: ReactNode }[] = [
  { k: '01 · Mobile apps', href: '/services/mobile-apps', title: 'iOS and Android apps that feel native.', icon: <Ic><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></Ic> },
  { k: '02 · Web platforms', href: '/services/web-platforms', title: 'Fast web products and admin panels.', icon: <Ic><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M8 21h8" /></Ic> },
  { k: '03 · AI-built app rescue', href: '/services/ai-app-rescue', title: 'We fix and launch what Lovable and Bolt started.', icon: <Ic><path d="M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z" /><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></Ic> },
  { k: '04 · Backends & APIs', href: '/services/backend-admin', title: 'Databases, auth and APIs that hold up.', icon: <Ic><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" /></Ic> },
  { k: '05 · Store publishing', href: '/services/app-store-publishing', title: 'Through App Store review, first time.', icon: <Ic><path d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 13l2 2M14.5 4.5C17 3 20 3 21 3c0 1 0 4-1.5 6.5L13 16l-5-5z" /><circle cx="15.5" cy="8.5" r="1.5" /></Ic> },
]

/** The S-curve that connects the service cards, drawn as you scroll. */
function useSnakePath(svc: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const root = svc.current
    if (!root) return
    const base = root.querySelector<SVGPathElement>('#pBase')!
    const run = root.querySelector<SVGPathElement>('#pRun')!
    const prog = root.querySelector<SVGPathElement>('#pProg')!
    const dot = root.querySelector<SVGCircleElement>('#pDot')!
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let len = 0
    let raf = 0
    let off = 0

    const onScroll = () => {
      if (!len) return
      const r = root.getBoundingClientRect()
      const p = Math.max(0, Math.min(1, (innerHeight * 0.6 - r.top) / r.height))
      prog.style.strokeDashoffset = String(len * (1 - p))
      const pt = base.getPointAtLength(len * p)
      dot.setAttribute('cx', String(pt.x))
      dot.setAttribute('cy', String(pt.y))
    }

    const build = () => {
      root.querySelectorAll('.svc-node').forEach((n) => n.remove())
      len = 0
      if (innerWidth <= 720) return
      const cards = Array.from(root.querySelectorAll<HTMLElement>('.svc-card'))
      const W = root.clientWidth
      const cx = W / 2
      const pts = cards.map((c) => c.offsetTop + c.offsetHeight / 2)
      let d = `M ${cx} -60 L ${cx} ${pts[0]}`
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i]
        const b = pts[i + 1]
        const mid = (a + b) / 2
        const side = (i % 2 === 0 ? 1 : -1) * W * 0.24
        d += ` C ${cx + side} ${a}, ${cx + side} ${mid}, ${cx + side * 0.5} ${mid} S ${cx} ${b}, ${cx} ${b}`
      }
      d += ` L ${cx} ${pts[pts.length - 1] + 120}`
      ;[base, run, prog].forEach((p) => p.setAttribute('d', d))
      len = base.getTotalLength()
      prog.style.strokeDasharray = String(len)
      prog.style.strokeDashoffset = String(len)
      pts.forEach((y) => {
        const n = document.createElement('span')
        n.className = 'svc-node'
        n.style.left = cx + 'px'
        n.style.top = y + 'px'
        root.appendChild(n)
      })
      onScroll()
    }

    const loop = () => {
      if (len && !reduce) {
        off = (off - 2.2) % 296
        run.style.strokeDashoffset = String(off)
      }
      raf = requestAnimationFrame(loop)
    }

    build()
    loop()
    document.fonts?.ready.then(build)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', build)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', build)
    }
  }, [svc])
}

export function Services() {
  const svc = useRef<HTMLDivElement>(null)
  useSnakePath(svc)
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">What we do</div>
        </div>
        <h2 className="mega rv">
          <span>Everything you need</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>To ship </span>
            <span className="v" style={{ display: 'inline' }}>software.</span>
          </span>
        </h2>
        <p className="lead rv">Five services, one team, one line from idea to launch. Follow it down.</p>
        <div className="svc" ref={svc}>
          <svg className="path" aria-hidden="true">
            <defs>
              <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2BD4C0" />
                <stop offset=".4" stopColor="#754DEC" />
                <stop offset="1" stopColor="#3F7DF0" />
              </linearGradient>
            </defs>
            <path id="pBase" fill="none" stroke="var(--line)" strokeWidth="1.5" />
            <path id="pRun" fill="none" stroke="url(#pg)" strokeWidth="2" strokeLinecap="round" strokeDasharray="36 260" />
            <path id="pProg" fill="none" stroke="url(#pg)" strokeWidth="2" strokeLinecap="round" />
            <circle id="pDot" r="6" fill="#fff" style={{ filter: 'drop-shadow(0 0 10px #a78bfa) drop-shadow(0 0 4px #754DEC)' }} />
          </svg>
          {SERVICES.map((s) => (
            <Link className="svc-card rv" href={s.href} key={s.k}>
              <span className="svc-ic">{s.icon}</span>
              <span>
                <small>{s.k}</small>
                <b>{s.title}</b>
              </span>
              <Arrow className="go" />
            </Link>
          ))}
        </div>
        <div className="svc-cta rv">
          <Link className="btn btn-primary btn-lg" href="/#contact">
            Talk about your project
            <Chip />
          </Link>
          <Link className="text-link" href="/#process">
            See how we work{' '}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
