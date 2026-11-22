'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Ic } from './icons'

// Illustrative curve only (labelled as such on the page).
const VALS = [24, 40, 36, 66, 82, 78, 120, 150, 176, 210]
const X = (i: number) => 30 + i * (640 / 9)
const Y = (v: number) => 230 - v

export function AiSection() {
  const card = useRef<HTMLDivElement>(null)
  const line = useRef<SVGPathElement>(null)
  const [p, setP] = useState(1)
  const [len, setLen] = useState(0)
  const d = useMemo(() => VALS.map((v, i) => (i ? 'L' : 'M') + X(i) + ' ' + Y(v)).join(' '), [])

  useEffect(() => {
    if (line.current) setLen(line.current.getTotalLength())
    const el = card.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        setP(0)
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / 2200)
          setP(1 - Math.pow(1 - k, 3))
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pt = line.current && len ? line.current.getPointAtLength(len * p) : { x: X(9), y: Y(VALS[9]) }

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">AI products</div>
        </div>
        <h2 className="mega rv">
          <span>Put AI to work</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Where it actually </span>
            <span className="v" style={{ display: 'inline' }}>helps.</span>
          </span>
        </h2>
        <p className="lead rv">We add AI where it saves real hours: support, intake, search and the repetitive steps your team does every day.</p>
        <div className="chart-card rv" ref={card}>
          <div className="top">
            <div>
              <small>Hours saved per week</small>
              <div className="big">+{Math.round(312 * p)}%</div>
            </div>
            <span className="trend">
              <svg width="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
              </svg>
              Trending up
            </span>
          </div>
          <svg className="ch" viewBox="0 0 700 260" role="img" aria-label="Illustrative chart of hours saved rising over ten weeks">
            <defs>
              <linearGradient id="cl" x1="0" x2="1">
                <stop offset="0" stopColor="#2BD4C0" />
                <stop offset=".55" stopColor="#754DEC" />
                <stop offset="1" stopColor="#3F7DF0" />
              </linearGradient>
              <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#754DEC" stopOpacity=".55" />
                <stop offset="1" stopColor="#754DEC" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="var(--line)" strokeDasharray="2 8">
              <line x1="0" y1="60" x2="700" y2="60" />
              <line x1="0" y1="130" x2="700" y2="130" />
              <line x1="0" y1="200" x2="700" y2="200" />
            </g>
            <g>
              {VALS.map((v, i) => (
                <rect key={i} x={X(i) - 4} y={Y(v)} width="8" height={v} rx="3" fill="url(#bar)" opacity={i / 9 <= p + 0.001 ? 1 : 0} />
              ))}
            </g>
            <path
              ref={line}
              d={d}
              fill="none"
              stroke="url(#cl)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={len ? { strokeDasharray: len, strokeDashoffset: len * (1 - p) } : undefined}
            />
            <circle cx={pt.x} cy={pt.y} r="7" fill="#2BD4C0" style={{ filter: 'drop-shadow(0 0 8px #2BD4C0)' }} />
          </svg>
        </div>
        <p className="chart-note rv">Illustrative example of the curve we aim for after automating intake and follow-up.</p>
        <div className="cols4">
          <div className="col rv"><div className="ic"><Ic><path d="M3 17l6-6 4 4 8-8" /></Ic></div><h3>Workflow automation</h3><p>Routine steps run themselves, with a human in the loop where it matters.</p></div>
          <div className="col rv" style={{ ['--d' as string]: '.08s' }}><div className="ic"><Ic><path d="M4 5h16l-6 8v6l-4-2v-4z" /></Ic></div><h3>Smart intake</h3><p>Forms, emails and chats sorted and routed to the right person.</p></div>
          <div className="col rv" style={{ ['--d' as string]: '.16s' }}><div className="ic"><Ic><rect x="4" y="6" width="16" height="12" rx="3" /><path d="M9 11v1M15 11v1M12 3v3" /></Ic></div><h3>In-app assistants</h3><p>Claude-powered helpers inside your product, grounded in your data.</p></div>
          <div className="col rv" style={{ ['--d' as string]: '.24s' }}><div className="ic"><Ic><path d="M9 7H6a4 4 0 000 8h3M15 7h3a4 4 0 010 8h-3M8 11h8" /></Ic></div><h3>Integrations</h3><p>Your CRM, payments and tools finally talking to each other.</p></div>
        </div>
      </div>
    </section>
  )
}
