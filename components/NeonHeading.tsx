import React from 'react'

interface NeonHeadingProps {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  variant?: 'hero' | 'section' | 'card'
}

export default function NeonHeading({ 
  children, 
  level = 1,
  className = '',
  variant = 'section'
}: NeonHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const variantStyles = {
    hero: 'text-6xl md:text-8xl font-hero font-bold neon-text-strong mb-6 tracking-tight',
    section: 'text-4xl md:text-5xl font-body font-bold mb-8 tracking-wider uppercase gradient-text gradient-shimmer',
    card: 'text-2xl font-futuristic font-semibold text-neon-purple mb-4 tracking-tight'
  }
  
  const sectionStyle = variant === 'section' ? {} : {}
  
  return (
    <Tag 
      className={`${variantStyles[variant]} ${className} animate-fade-up`}
      style={sectionStyle}
    >
      {children}
    </Tag>
  )
}

