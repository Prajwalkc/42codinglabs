'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function GradientBackground() {
  const { theme } = useTheme()
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: 'transform' }}>
      {/* Base overlay - adapts to theme */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(ellipse at center, rgba(88, 28, 135, 0.15) 0%, rgba(42, 10, 71, 0.25) 50%, rgba(15, 15, 21, 0.4) 100%)'
            : 'radial-gradient(ellipse at center, rgba(245, 240, 230, 0.4) 0%, rgba(250, 245, 238, 0.3) 50%, rgba(255, 255, 255, 0.2) 100%)',
          willChange: 'transform'
        }}
      />
      
      {/* Gradient glows - different for dark and light mode */}
      {theme === 'dark' ? (
        <>
          <div 
            className="absolute -top-[400px] -right-[300px] w-[1200px] h-[1200px] rounded-full blur-[80px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(178, 111, 255, 0.35) 30%, rgba(168, 85, 247, 0.3) 50%, rgba(88, 28, 135, 0.2) 70%, transparent 85%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 1
            }}
          />
          
          {/* Secondary glow for depth */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[70px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(178, 111, 255, 0.4) 40%, rgba(124, 58, 237, 0.3) 60%, transparent 80%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 0.5
            }}
          />
          
          {/* Subtle bottom gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[600px] transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(168, 85, 247, 0.25) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 100%)',
              willChange: 'transform',
              opacity: 0.25
            }}
          />
          
          {/* Additional purple accent from left */}
          <div 
            className="absolute -bottom-[200px] -left-[300px] w-[1000px] h-[1000px] rounded-full blur-[70px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(124, 58, 237, 0.2) 40%, rgba(88, 28, 135, 0.15) 60%, transparent 80%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 0.3
            }}
          />
        </>
      ) : (
        <>
          {/* Large soft beige/warm gradient glow from top right - light mode */}
          <div 
            className="absolute -top-[400px] -right-[300px] w-[1200px] h-[1200px] rounded-full blur-[100px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(255, 237, 227, 0.25) 0%, rgba(250, 230, 210, 0.2) 30%, rgba(245, 240, 230, 0.15) 50%, rgba(250, 245, 238, 0.1) 70%, transparent 85%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 0.6
            }}
          />
          
          {/* Secondary warm glow for depth - light mode */}
          <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[80px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(255, 237, 227, 0.3) 0%, rgba(250, 230, 210, 0.25) 40%, rgba(245, 240, 230, 0.15) 60%, transparent 80%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 0.4
            }}
          />
          
          {/* Subtle bottom gradient - light mode */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[600px] transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(250, 245, 238, 0.3) 0%, rgba(245, 240, 230, 0.2) 50%, transparent 100%)',
              willChange: 'transform',
              opacity: 0.5
            }}
          />
          
          {/* Additional warm accent from left - light mode */}
          <div 
            className="absolute -bottom-[200px] -left-[300px] w-[1000px] h-[1000px] rounded-full blur-[90px] transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle, rgba(255, 237, 227, 0.2) 0%, rgba(250, 230, 210, 0.15) 40%, rgba(245, 240, 230, 0.1) 60%, transparent 80%)',
              willChange: 'transform',
              transform: 'translateZ(0)',
              opacity: 0.3
            }}
          />
        </>
      )}
    </div>
  )
}

