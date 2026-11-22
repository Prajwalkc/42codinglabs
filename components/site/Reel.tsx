'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { InlineMark, Mark } from './Logo'

function Cube({ size, light, style }: { size: number; light?: boolean; style: CSSProperties }) {
  const h = size / 2
  const faces = [
    `translateZ(${h}px)`,
    `rotateY(90deg) translateZ(${h}px)`,
    `rotateY(180deg) translateZ(${h}px)`,
    `rotateY(-90deg) translateZ(${h}px)`,
    `rotateX(90deg) translateZ(${h}px)`,
    `rotateX(-90deg) translateZ(${h}px)`,
  ]
  return (
    <div className={`shape cube${light ? ' light' : ''}`} style={{ width: size, height: size, ...style }}>
      {faces.map((t) => (
        <i key={t} style={{ transform: t }} />
      ))}
    </div>
  )
}

// The cycle ends on the logo itself, with its cursor.
const WORDS = ['Think', 'Code', 'Ship', 'MARK']

export function Reel() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)
  const [wi, setWi] = useState(0)

  // Purple wave lines
  useEffect(() => {
    const c = canvas.current
    if (!c) return
    const ctx = c.getContext('2d')!
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const size = () => {
      const r = c.getBoundingClientRect()
      c.width = r.width * devicePixelRatio
      c.height = r.height * devicePixelRatio
    }
    size()
    window.addEventListener('resize', size)
    let t = 0
    let raf = 0
    const draw = () => {
      const W = c.width
      const H = c.height
      ctx.clearRect(0, 0, W, H)
      for (let k = 0; k < 28; k++) {
        ctx.beginPath()
        for (let x = 0; x <= W; x += 8) {
          const y =
            H * 0.55 +
            Math.sin((x / W) * 5 + t + k * 0.09) * H * 0.12 +
            Math.sin((x / W) * 2.3 - t * 0.7) * H * 0.08 +
            (k - 14) * H * 0.004
          if (x) ctx.lineTo(x, y)
          else ctx.moveTo(x, y)
        }
        ctx.strokeStyle = `rgba(${130 + k * 3},${90 + k * 2},255,${0.05 + (k % 7) * 0.025})`
        ctx.lineWidth = devicePixelRatio
        ctx.stroke()
      }
      if (!reduce) t += 0.012
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
    }
  }, [])

  // Cycling word with a blur swap
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      const el = wordRef.current
      if (!el) return
      const out = el.animate(
        [
          { opacity: 1, filter: 'blur(0)', transform: 'scale(1)' },
          { opacity: 0, filter: 'blur(14px)', transform: 'scale(.94)' },
        ],
        { duration: 450, easing: 'ease-in' },
      )
      out.onfinish = () => {
        setWi((i) => (i + 1) % WORDS.length)
        el.animate(
          [
            { opacity: 0, filter: 'blur(14px)', transform: 'scale(1.06)' },
            { opacity: 1, filter: 'blur(0)', transform: 'scale(1)' },
          ],
          { duration: 700, easing: 'cubic-bezier(.22,1,.36,1)' },
        )
      }
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const word = WORDS[wi]

  return (
    <section className="pov sec">
      <div className="wrap">
        <div className="eyebrow rv">How we think</div>
        <h2 className="mega rv">
          <span>Ideas are easy.</span>
          <span>
            <span className="o" style={{ display: 'inline' }}>Shipping is </span>
            <span className="v" style={{ display: 'inline' }}>the answer.</span>
          </span>
        </h2>
        <div className="reel rv">
          <div className="reel-in">
            <canvas ref={canvas} />
            <Cube size={92} style={{ left: '7%', top: '12%', ['--fd' as string]: '-1s' }} />
            <Cube size={44} light style={{ left: '34%', top: '8%', ['--fd' as string]: '-3s', animationDuration: '9s' }} />
            <Cube size={58} style={{ left: '52%', top: '9%', ['--fd' as string]: '-2s' }} />
            <div className="shape ring" style={{ right: '13%', top: '12%', width: 'clamp(48px,8vw,92px)', aspectRatio: '1', borderWidth: 'clamp(14px,2.4vw,26px)', ['--fd' as string]: '-4s' }} />
            <div className="shape sphere" style={{ left: '6%', bottom: '12%', width: 'clamp(56px,10vw,118px)', aspectRatio: '1', ['--fd' as string]: '-2.5s' }} />
            <div className="shape sphere" style={{ right: '8%', bottom: '22%', width: 'clamp(44px,8vw,96px)', aspectRatio: '1', ['--fd' as string]: '-.5s' }} />
            <div className="shape star" style={{ left: '62%', bottom: '10%', width: 'clamp(36px,6vw,70px)', aspectRatio: '1', ['--fd' as string]: '-1.7s' }} />
            <Cube size={64} light style={{ left: '40%', bottom: '4%', ['--fd' as string]: '-5s', animationDuration: '11s' }} />
            <div className="word" ref={wordRef} aria-live="off">
              {word === 'MARK' ? <Mark key="mark" /> : word}
            </div>
            <div className="reel-bar">
              <span><InlineMark /> Coding Labs · Studio reel</span>
              <span className="pill">Full film coming soon</span>
            </div>
          </div>
        </div>
        <div className="reel-cap rv">
          <span>From first commit to shipped product</span>
          <span>Reel · placeholder</span>
        </div>
      </div>
    </section>
  )
}
