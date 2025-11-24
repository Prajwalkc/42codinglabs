import React from 'react'

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: 'transform' }}>
      {/* Base purple tint overlay - less black */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(88, 28, 135, 0.15) 0%, rgba(42, 10, 71, 0.25) 50%, rgba(15, 15, 21, 0.4) 100%)',
          willChange: 'transform'
        }}
      />
      
      {/* Large soft purple/magenta gradient glow from top right - reduced blur */}
      <div 
        className="absolute -top-[400px] -right-[300px] w-[1200px] h-[1200px] rounded-full blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(178, 111, 255, 0.35) 30%, rgba(168, 85, 247, 0.3) 50%, rgba(88, 28, 135, 0.2) 70%, transparent 85%)',
          willChange: 'transform',
          transform: 'translateZ(0)' // Force GPU acceleration
        }}
      />
      
      {/* Secondary glow for depth - reduced blur */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[70px] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(178, 111, 255, 0.4) 40%, rgba(124, 58, 237, 0.3) 60%, transparent 80%)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      
      {/* Subtle bottom gradient with more purple */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[600px] opacity-25"
        style={{
          background: 'linear-gradient(to top, rgba(168, 85, 247, 0.25) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 100%)',
          willChange: 'transform'
        }}
      />
      
      {/* Additional purple accent from left - reduced blur */}
      <div 
        className="absolute -bottom-[200px] -left-[300px] w-[1000px] h-[1000px] rounded-full blur-[70px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(124, 58, 237, 0.2) 40%, rgba(88, 28, 135, 0.15) 60%, transparent 80%)',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  )
}

