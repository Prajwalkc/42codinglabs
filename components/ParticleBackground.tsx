'use client'

import React, { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const particlesRef = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const setCanvasSize = () => {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit DPR for performance
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    setCanvasSize()

    const colors = [
      'rgba(178, 111, 255, 0.15)',
      'rgba(168, 85, 247, 0.15)',
      'rgba(192, 132, 252, 0.15)'
    ]

    // Reduce particle count for better performance
    const particleCount = 20
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    let lastTime = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS

    function animate(currentTime: number) {
      if (!ctx || !canvas) return

      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      lastTime = currentTime - (deltaTime % frameInterval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Use transform for better performance
      ctx.save()
      const scale = canvas.width / window.innerWidth
      ctx.scale(scale, scale)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        // Remove shadow for better performance
        ctx.fill()
      })

      ctx.restore()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        setCanvasSize()
        // Reposition particles
        particlesRef.current.forEach((particle) => {
          particle.x = Math.min(particle.x, window.innerWidth)
          particle.y = Math.min(particle.y, window.innerHeight)
        })
      }, 150)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-15"
      style={{ willChange: 'transform' }}
    />
  )
}

