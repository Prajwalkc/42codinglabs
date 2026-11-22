'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Blur-rise reveal for every `.rv` element.
 * Only elements that start below the fold are hidden, so the first screen is complete at rest.
 * The hero's own CSS entrance is held the same way when the reel pushes it below the fold.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'))
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const vh = window.innerHeight
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add('pre')
    })
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('pre')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))

    // Sections with load-time CSS entrances (the hero) wait until they are on screen, then play.
    const holds = Array.from(document.querySelectorAll<HTMLElement>('.hero')).filter(
      (el) => el.getBoundingClientRect().top > vh * 0.6,
    )
    holds.forEach((el) => el.classList.add('hold'))
    const play = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('hold')
            play.unobserve(e.target)
          }
        }),
      { threshold: 0.2 },
    )
    holds.forEach((el) => play.observe(el))
    return () => {
      io.disconnect()
      play.disconnect()
    }
  }, [pathname])

  return null
}
