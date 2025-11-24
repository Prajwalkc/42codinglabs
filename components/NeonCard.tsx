import React from 'react'

interface NeonCardProps {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  title?: string
}

export default function NeonCard({ 
  children, 
  className = '',
  icon,
  title 
}: NeonCardProps) {
  return (
    <div className={`
      relative p-8 rounded-xl
      bg-dark-bg-light/50 border border-neon-purple/20
      shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)]
      hover:shadow-[0_0_5px_rgba(178,111,255,0.25),0_0_10px_rgba(178,111,255,0.15)]
      hover:border-neon-purple/40
      transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${className}
    `}>
      {icon && (
        <div className="mb-4 premium-white-subtle text-4xl icon-float">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-body font-bold mb-4 tracking-tight gradient-text gradient-shimmer">
          {title}
        </h3>
      )}
      <div className="text-gray-300 font-body text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  )
}

