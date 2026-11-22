'use client'

import { useEffect, useRef, useState } from 'react'

// Tall screens (phones held upright) get the 9:16 cut; everything else the 16:9 one. Each has a dark and a light
// version, as VP9 WebM (about half the size) with an H.264 MP4 fallback. Posters are set in CSS so they show
// before any JavaScript runs.
const PORTRAIT = '(max-aspect-ratio: 4/5)'
const FILMS = {
  'wide-dark': '/film/reel-loop-1080p',
  'tall-dark': '/film/reel-loop-portrait',
  'wide-light': '/film/reel-loop-light-1080p',
  'tall-light': '/film/reel-loop-portrait-light',
}
type Film = (typeof FILMS)[keyof typeof FILMS]

/**
 * Studio reel, the first screen of the home page: a 12 s seamless loop (Think. Code. Ship. typed by the teal
 * cursor, ending on the 42 Coding Labs logo). Source projects: whisper labs/42-coding-labs/film/loop and
 * loop-portrait (HyperFrames). Silent, so it can autoplay muted.
 */
export function Reel() {
  const video = useRef<HTMLVideoElement>(null)
  const [film, setFilm] = useState<Film | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  // Don't compete with the page for bandwidth: start fetching the film once the page has loaded and is idle.
  useEffect(() => {
    let idle = 0
    const go = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
      idle = ric ? ric(() => setReady(true), { timeout: 1500 }) : window.setTimeout(() => setReady(true), 200)
    }
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
    return () => {
      window.removeEventListener('load', go)
      const cic = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
      if (cic) cic(idle)
      else clearTimeout(idle)
    }
  }, [])

  // Pick the cut for this screen shape and theme; switch if the phone is rotated or the theme is toggled.
  useEffect(() => {
    const mq = matchMedia(PORTRAIT)
    const html = document.documentElement
    const pick = () => {
      const shape = mq.matches ? 'tall' : 'wide'
      const theme = html.classList.contains('light') ? 'light' : 'dark'
      setFilm(FILMS[`${shape}-${theme}` as keyof typeof FILMS])
      setPlaying(false)
    }
    pick()
    mq.addEventListener('change', pick)
    const mo = new MutationObserver(pick)
    mo.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => {
      mq.removeEventListener('change', pick)
      mo.disconnect()
    }
  }, [])

  useEffect(() => {
    const v = video.current
    if (!v || !film || !ready) return
    // Respect reduced motion: show the poster frame and let the visitor press play.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause()
      v.controls = true
      setPlaying(true)
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
  }, [film, ready])

  return (
    // The first screen: just the reel, edge to edge. The hero follows on scroll.
    <section className="reel" aria-label="42 Coding Labs studio reel">
      {film && ready && (
        <video
          key={film}
          ref={video}
          className={`reel-video${playing ? ' on' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          aria-label="Think, Code, Ship, typed by a cursor, ending on the 42 Coding Labs logo"
        >
          <source src={`${film}.webm`} type="video/webm" />
          <source src={`${film}.mp4`} type="video/mp4" />
        </video>
      )}
      <a className="reel-scroll" href="#studio" aria-label="Scroll down to the studio">
        <span>Scroll</span>
        <i aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </i>
      </a>
    </section>
  )
}
