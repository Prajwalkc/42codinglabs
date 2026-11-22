'use client'

import { useEffect, useRef } from 'react'

const STATS = [
  { n: 10, suf: '+', label: 'Apps live on the stores' },
  { n: 8, suf: '+', label: 'Years of senior engineering' },
  { n: 24, suf: 'h', label: 'Reply on every enquiry' },
  { n: 100, suf: '%', label: 'Code ownership for clients' },
]

function Counter({ to, suf }: { to: number; suf: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / 1600)
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4))) + suf
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, suf])
  return (
    <div className="n" ref={ref}>
      {to}
      {suf}
    </div>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Studio in numbers">
      <div className="wrap">
        {STATS.map((s, i) => (
          <div className="stat rv" key={s.label} style={{ ['--d' as string]: `${i * 0.08}s` }}>
            <Counter to={s.n} suf={s.suf} />
            <div className="l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
