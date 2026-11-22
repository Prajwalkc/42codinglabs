'use client'

import { useEffect, useRef } from 'react'

/**
 * Studio reel: a 12 s seamless loop (Think. Code. Ship. typed by the teal cursor, ending on the 42 Coding Labs logo).
 * Source project: whisper labs/42-coding-labs/film/loop (HyperFrames). Silent, so it can autoplay muted.
 */
export function Reel() {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = video.current
    if (!v) return
    // Respect reduced motion: show the poster frame and let the visitor press play.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause()
      v.controls = true
      return
    }
    // Only play while the reel is on screen.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

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
            <video
              ref={video}
              className="reel-video"
              src="/film/reel-loop-1080p.mp4"
              poster="/film/reel-loop-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="42 Coding Labs studio reel: Think, Code, Ship, typed by a cursor, ending on the 42 Coding Labs logo"
            />
          </div>
        </div>
        <div className="reel-cap rv">
          <span>From first commit to shipped product</span>
          <span>Studio reel · 12 s loop</span>
        </div>
      </div>
    </section>
  )
}
