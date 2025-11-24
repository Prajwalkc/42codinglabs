'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  variant?: 'primary' | 'outline'
}

export default function NeonButton({ 
  children, 
  onClick, 
  type = 'button',
  className = '',
  variant = 'primary' 
}: NeonButtonProps) {
  const { theme } = useTheme()
  const baseStyles = 'px-8 py-3 font-semibold transition-all duration-300 rounded-lg'
  
  const variantStyles = {
    primary: theme === 'dark' 
      ? 'bg-transparent gradient-border premium-white-subtle hover:scale-[1.02] rounded-lg'
      : 'bg-beige text-white hover:bg-beige-hover hover:scale-[1.02] rounded-lg font-medium shadow-sm hover:shadow-md',
    outline: theme === 'dark'
      ? 'border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white hover:shadow-neon-sm rounded-lg'
      : 'bg-white border border-light-border text-light-text-primary hover:border-beige hover:text-beige rounded-lg font-medium shadow-sm hover:shadow-md'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${theme === 'dark' ? 'glow-on-hover' : ''}`}
    >
      {children}
    </button>
  )
}

