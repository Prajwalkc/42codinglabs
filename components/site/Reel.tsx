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
// Played faster than it was rendered (Prajwal, 23 Nov 2026): the 12 s loop runs in 8 s.
const SPEED = 1.5

/**
 * Studio reel, the first screen of the home page: a 12 s seamless loop, played at SPEED (Think. Code. Ship. typed by the teal
 * cursor, ending on the 42 Coding Labs logo). Source projects: ~/Projects/42-coding-labs/film/loop and
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
    // Safari only autoplays a video it knows is silent. React sets `muted` as a property but never writes the
    // attribute, so set both before the first play().
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('playsinline', '')
    // Browsers reset the rate when a new source loads, so set it again once the metadata is in.
    const setSpeed = () => {
      v.defaultPlaybackRate = SPEED
      v.playbackRate = SPEED
    }
    setSpeed()
    v.addEventListener('loadedmetadata', setSpeed)
    // If autoplay is still refused (iPhone Low Power Mode, Safari's "Never Auto-Play"), the poster stays up and
    // the first tap, click or key press starts the reel.
    const onGesture = () => {
      v.play().catch(() => {})
      gestures.forEach((g) => window.removeEventListener(g, onGesture))
    }
    const gestures = ['touchstart', 'pointerdown', 'keydown'] as const
    const tryPlay = () =>
      v.play().catch(() => gestures.forEach((g) => window.addEventListener(g, onGesture, { once: true, passive: true })))
    // Only play while the reel is on screen.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) tryPlay()
        else v.pause()
      },
      { threshold: 0.25 },
    )
    io.observe(v)
    return () => {
      io.disconnect()
      v.removeEventListener('loadedmetadata', setSpeed)
      gestures.forEach((g) => window.removeEventListener(g, onGesture))
    }
  }, [film, ready])

  // Safari's WebM support is newer and less dependable than its MP4 playback, so Safari gets the MP4 first.
  const safari = typeof navigator !== 'undefined' && /^((?!chrome|chromium|crios|fxios|android|edg).)*safari/i.test(navigator.userAgent)
  const sources = [
    { src: `${film}.webm`, type: 'video/webm' },
    { src: `${film}.mp4`, type: 'video/mp4' },
  ]
  if (safari) sources.reverse()

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
          {sources.map((s) => (
            <source key={s.type} src={s.src} type={s.type} />
          ))}
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
