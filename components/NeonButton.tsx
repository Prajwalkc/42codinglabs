import React from 'react'

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
  const baseStyles = 'px-8 py-3 font-semibold transition-all duration-300 rounded-sm'
  
  const variantStyles = {
    primary: 'bg-transparent gradient-border premium-white-subtle hover:scale-105 rounded-md button-pulse',
    outline: 'border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white hover:shadow-neon-md'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} glow-on-hover`}
    >
      {children}
    </button>
  )
}

