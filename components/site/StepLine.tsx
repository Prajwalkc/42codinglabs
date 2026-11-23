'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * "How it works" as one horizon line with the steps along it. The teal block cursor (the logo's cursor)
 * starts at step 1 and glides to each step as it scrolls into view. Vertical on phones.
 * Without JavaScript the steps simply read in order and the cursor stays hidden.
 */
export function StepLine({ steps }: { steps: { t: string; p: string }[] }) {
  const wrap = useRef<HTMLDivElement>(null)
  // `target` is the furthest step on screen; `at` is where the cursor is. On desktop the whole row
  // comes into view at once, so the cursor walks there one step at a time instead of jumping.
  const [target, setTarget] = useState(0)
  const [at, setAt] = useState(0)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  // Advance the cursor to the furthest step that has come into view.
  useEffect(() => {
    const items = Array.from(wrap.current?.querySelectorAll<HTMLElement>('.sl-step') ?? [])
    if (!('IntersectionObserver' in window)) return setTarget(items.length - 1)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const i = items.indexOf(e.target as HTMLElement)
          setTarget((t) => Math.max(t, i))
          io.unobserve(e.target)
        }),
      { rootMargin: '0px 0px -22% 0px', threshold: 0.6 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (at >= target) return
    const id = setTimeout(() => setAt((a) => a + 1), 420)
    return () => clearTimeout(id)
  }, [at, target])

  // Place the cursor on the active step's marker; re-measure on resize (the line turns vertical on phones).
  useEffect(() => {
    const place = () => {
      const root = wrap.current
      const dot = root?.querySelectorAll<HTMLElement>('.sl-dot')[at]
      if (!root || !dot) return
      // Offsets, not getBoundingClientRect: the step may still be mid-reveal (translated), and that must not move the cursor.
      const li = dot.parentElement!
      setPos({ x: li.offsetLeft + dot.offsetLeft + dot.offsetWidth / 2, y: li.offsetTop + dot.offsetTop + dot.offsetHeight / 2 })
    }
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [at])

  return (
    <div className="sl" ref={wrap}>
      <span className="sl-line" aria-hidden="true" />
      <span
        className={`sl-cur${pos ? ' on' : ''}`}
        aria-hidden="true"
        style={pos ? { transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` } : undefined}
      />
      <ol className="sl-list" style={{ ['--n' as string]: steps.length }}>
        {steps.map((s, i) => (
          // `reached` lives on the dot, not the <li>: RevealObserver owns the <li>'s classes while it reveals.
          <li className="sl-step rv" key={s.t} style={{ ['--d' as string]: `${(i * 80) / 1000}s` }}>
            <span className={`sl-dot${i <= at ? ' reached' : ''}`} aria-hidden="true" />
            <span className="sl-k">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.t}</h3>
            <p>{s.p}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
