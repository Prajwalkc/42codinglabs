'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Blur-rise reveal for every `.rv` element.
 * Only elements that start below the fold are hidden, so the first screen is complete at rest.
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
    return () => io.disconnect()
  }, [pathname])

  return null
}
