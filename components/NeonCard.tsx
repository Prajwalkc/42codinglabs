'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

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
  const { theme } = useTheme()
  
  return (
    <div className={`
      relative p-8 rounded-xl transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${theme === 'dark' 
        ? 'bg-dark-bg-light/50 border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_5px_rgba(178,111,255,0.25),0_0_10px_rgba(178,111,255,0.15)] hover:border-neon-purple/40' 
        : 'bg-gradient-to-br from-[#F5F0E6] to-[#FAF5EE] border-light-border shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] hover:border-beige/50'
      }
      border
      ${className}
    `}>
      {icon && (
        <div className={`mb-4 text-4xl icon-float transition-colors duration-300 ${
          theme === 'dark' ? 'gradient-text' : 'text-beige'
        }`}>
          {theme === 'dark' && (
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="30%" stopColor="#c084fc" />
                  <stop offset="60%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          )}
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl font-body font-bold mb-4 tracking-tight gradient-text gradient-shimmer">
          {title}
        </h3>
      )}
      <div className={`font-body text-sm md:text-base leading-relaxed transition-colors duration-300 ${
        theme === 'dark' ? 'text-gray-300' : 'text-light-text-secondary'
      }`}>
        {children}
      </div>
    </div>
  )
}

