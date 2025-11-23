import React from 'react'

interface ProjectCardProps {
  name: string
  description: string
  techStack: string[]
  category: string
  image?: string
  link?: string
  stats?: {
    users?: string
    platforms?: string[]
  }
  className?: string
}

export default function ProjectCard({
  name,
  description,
  techStack,
  category,
  image,
  link,
  stats,
  className = ''
}: ProjectCardProps) {
  return (
    <div className={`
      relative group rounded-xl overflow-hidden
      bg-dark-bg-light/50 border border-neon-purple/20
      shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)]
      hover:shadow-[0_0_5px_rgba(178,111,255,0.25),0_0_10px_rgba(178,111,255,0.15)]
      hover:border-neon-purple/40
      transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${className}
    `}>
      {/* Image/Placeholder */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-purple/5">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl premium-white-subtle opacity-30">
              {name.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/90 to-dark-bg/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-sm">
          <p className="text-gray-200 font-body text-sm md:text-base leading-relaxed mb-4 font-medium">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-xs bg-neon-purple/30 text-neon-purple-light rounded-md border border-neon-purple/40 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple inline-block font-semibold"
            >
              View Details →
            </a>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl md:text-2xl font-body font-bold premium-white-subtle">
            {name}
          </h3>
          <span className="text-xs px-3 py-1 bg-neon-purple/20 text-neon-purple-light rounded-full border border-neon-purple/30">
            {category}
          </span>
        </div>
        
        {stats && (
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
            {stats.users && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {stats.users}
              </span>
            )}
            {stats.platforms && stats.platforms.length > 0 && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {stats.platforms.join(', ')}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

