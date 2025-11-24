'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  avatar?: string
  className?: string
}

export default function TestimonialCard({ 
  name, 
  role, 
  quote, 
  avatar,
  className = '' 
}: TestimonialCardProps) {
  const { theme } = useTheme()
  
  // Placeholder avatar if no image provided
  const AvatarPlaceholder = () => (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 border-neon-purple/30' 
        : 'bg-gradient-to-br from-beige/20 to-beige/10 border-beige/30'
    }`}>
      <span className={`text-2xl font-bold transition-colors duration-300 ${
        theme === 'dark' ? 'premium-white-subtle' : 'text-beige'
      }`}>
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  )

  return (
    <div className={`
      relative p-6 md:p-8 rounded-xl h-full flex flex-col
      transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${theme === 'dark' 
        ? 'bg-dark-bg-light/50 border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_5px_rgba(178,111,255,0.25),0_0_10px_rgba(178,111,255,0.15)] hover:border-neon-purple/40' 
        : 'bg-gradient-to-br from-[#F5F0E6] to-[#FAF5EE] border-light-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] hover:border-beige/50'
      }
      border
      ${className}
    `}>
      {/* Quote Icon */}
      <div className={`absolute top-4 right-4 opacity-20 text-3xl transition-colors duration-300 ${
        theme === 'dark' ? 'premium-white-subtle' : 'text-beige/40'
      }`}>
        "
      </div>
      
      {/* Quote Text */}
      <p className={`font-body text-sm md:text-base leading-relaxed mb-6 relative z-10 italic flex-grow transition-colors duration-300 ${
        theme === 'dark' ? 'text-gray-300' : 'text-light-text-secondary'
      }`}>
        {quote}
      </p>
      
      {/* Author Info */}
      <div className={`flex items-center space-x-4 pt-4 border-t mt-auto transition-colors duration-300 ${
        theme === 'dark' ? 'border-neon-purple/10' : 'border-light-border'
      }`}>
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className={`w-16 h-16 rounded-full object-cover border-2 flex-shrink-0 transition-colors duration-300 ${
              theme === 'dark' ? 'border-neon-purple/30' : 'border-light-border'
            }`}
          />
        ) : (
          <AvatarPlaceholder />
        )}
        <div>
          <h4 className={`text-base md:text-lg font-body font-semibold mb-1 transition-colors duration-300 ${
            theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-primary'
          }`}>
            {name}
          </h4>
          <p className={`text-sm font-body transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-light-text-secondary'
          }`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

