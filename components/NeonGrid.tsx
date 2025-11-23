import React from 'react'

interface NeonGridProps {
  className?: string
}

export default function NeonGrid({ className = '' }: NeonGridProps) {
  return (
    <div className={`absolute inset-0 grid-background opacity-30 ${className}`} />
  )
}


