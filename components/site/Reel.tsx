'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Chip } from './icons'

// Tall screens (phones held upright) get the 9:16 cut; everything else the 16:9 one.
const PORTRAIT = '(max-aspect-ratio: 4/5)'
const FILMS = {
  wide: { src: '/film/reel-loop-1080p.mp4', poster: '/film/reel-loop-poster.jpg' },
  tall: { src: '/film/reel-loop-portrait.mp4', poster: '/film/reel-loop-portrait-poster.jpg' },
}

/**
 * Studio reel, the first screen of the home page: a 12 s seamless loop (Think. Code. Ship. typed by the teal
 * cursor, ending on the 42 Coding Labs logo). Source projects: whisper labs/42-coding-labs/film/loop and
 * loop-portrait (HyperFrames). Silent, so it can autoplay muted.
 */
export function Reel() {
  const video = useRef<HTMLVideoElement>(null)
  const [film, setFilm] = useState<(typeof FILMS)['wide'] | null>(null)

  // Pick the cut for this screen shape, and switch if the phone is rotated.
  useEffect(() => {
    const mq = matchMedia(PORTRAIT)
    const pick = () => setFilm(mq.matches ? FILMS.tall : FILMS.wide)
    pick()
    mq.addEventListener('change', pick)
    return () => mq.removeEventListener('change', pick)
  }, [])

  useEffect(() => {
    const v = video.current
    if (!v || !film) return
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
  }, [film])

  return (
    // The first screen: just the reel, edge to edge. The hero follows on scroll.
    <section className="reel" aria-label="42 Coding Labs studio reel">
      {film && (
        <video
          key={film.src}
          ref={video}
          className="reel-video"
          src={film.src}
          poster={film.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Think, Code, Ship, typed by a cursor, ending on the 42 Coding Labs logo"
        />
      )}
      {/* a credit line, so a visitor who never scrolls still knows what we do and how to start */}
      <div className="reel-credit">
        <p>
          Apps, platforms and AI products<span className="sep"> · </span>
          <span className="where">Kathmandu to the world</span>
        </p>
        <Link className="btn btn-primary" href="/#contact">
          Book a call
          <Chip />
        </Link>
      </div>
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
