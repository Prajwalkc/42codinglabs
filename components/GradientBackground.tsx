import React from 'react'

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large soft purple/magenta gradient glow from top right - matching reference */}
      <div 
        className="absolute -top-[400px] -right-[300px] w-[1200px] h-[1200px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(178, 111, 255, 0.3) 30%, rgba(168, 85, 247, 0.2) 50%, transparent 70%)'
        }}
      />
      
      {/* Secondary glow for depth */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[100px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.5) 0%, rgba(178, 111, 255, 0.3) 40%, transparent 70%)'
        }}
      />
      
      {/* Subtle bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[600px] opacity-20"
        style={{
          background: 'linear-gradient(to top, rgba(168, 85, 247, 0.2) 0%, transparent 100%)'
        }}
      />
    </div>
  )
}

