import React from 'react'

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
  // Placeholder avatar if no image provided
  const AvatarPlaceholder = () => (
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 flex items-center justify-center border-2 border-neon-purple/30 flex-shrink-0">
      <span className="text-2xl font-bold premium-white-subtle">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  )

  return (
    <div className={`
      relative p-6 md:p-8 rounded-xl h-full flex flex-col
      bg-dark-bg-light/50 border border-neon-purple/20
      shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)]
      hover:shadow-[0_0_5px_rgba(178,111,255,0.25),0_0_10px_rgba(178,111,255,0.15)]
      hover:border-neon-purple/40
      transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${className}
    `}>
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 premium-white-subtle opacity-20 text-3xl">
        "
      </div>
      
      {/* Quote Text */}
      <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed mb-6 relative z-10 italic flex-grow">
        {quote}
      </p>
      
      {/* Author Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-neon-purple/10 mt-auto">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-neon-purple/30 flex-shrink-0"
          />
        ) : (
          <AvatarPlaceholder />
        )}
        <div>
          <h4 className="text-base md:text-lg font-body font-semibold premium-white-subtle mb-1">
            {name}
          </h4>
          <p className="text-sm text-gray-400 font-body">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

