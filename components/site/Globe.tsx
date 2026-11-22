'use client'

import createGlobe from 'cobe'
import { useEffect, useRef, useState } from 'react'

const MARKERS = [
  { location: [27.7172, 85.324] as [number, number], size: 0.09 }, // Kathmandu
  { location: [40.7128, -74.006] as [number, number], size: 0.06 }, // New York
  { location: [51.5074, -0.1278] as [number, number], size: 0.06 }, // London
  { location: [25.2048, 55.2708] as [number, number], size: 0.07 }, // Dubai
  { location: [52.52, 13.405] as [number, number], size: 0.05 }, // Berlin
  { location: [43.6532, -79.3832] as [number, number], size: 0.05 }, // Toronto
  { location: [1.3521, 103.8198] as [number, number], size: 0.05 }, // Singapore
]

/** Dotted rotating globe in the hero, with markers on Kathmandu and client cities. */
export function Globe() {
  const ref = useRef<HTMLCanvasElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let phi = 4.2
    const globe = createGlobe(ref.current, {
      devicePixelRatio: 2,
      width: 1600,
      height: 1600,
      phi,
      theta: 0.28,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 22000,
      mapBrightness: 7,
      mapBaseBrightness: 0.02,
      baseColor: [0.22, 0.24, 0.42],
      markerColor: [0.56, 0.4, 1],
      glowColor: [0.16, 0.12, 0.32],
      markers: MARKERS,
      opacity: 0.9,
      onRender: (state) => {
        state.phi = phi
        if (!reduce) phi += 0.0022
      },
    })
    setOn(true)
    return () => globe.destroy()
  }, [])

  return (
    <div className={`globe${on ? ' on' : ''}`} aria-hidden="true">
      <canvas ref={ref} width={1600} height={1600} />
    </div>
  )
}
