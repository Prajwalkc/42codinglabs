'use client'

import React, { useEffect, useRef, useState } from 'react'

interface FeaturedProjectProps {
  name: string
  description: string
  techStack: string[]
  stats: {
    users?: string
    platforms?: string[]
    technologies?: string[]
  }
  image?: string
  link?: string
}

export default function FeaturedProject({
  name,
  description,
  techStack,
  stats,
  image,
  link
}: FeaturedProjectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={`relative w-full rounded-2xl overflow-hidden
        bg-dark-bg-light/40 border border-neon-purple/30
        shadow-[0_0_15px_rgba(178,111,255,0.25),0_0_30px_rgba(178,111,255,0.15)]
        hover:shadow-[0_0_20px_rgba(178,111,255,0.35),0_0_40px_rgba(178,111,255,0.2)]
        transition-all duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-72 md:h-[500px] overflow-hidden bg-gradient-to-br from-neon-purple/30 via-neon-purple/15 to-neon-purple/5 group">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent"></div>
              <div className="text-9xl premium-white-subtle opacity-20 relative z-10">
                {name.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/40 to-transparent md:hidden"></div>
          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-dark-bg-light/50 to-dark-bg-light/30 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="mb-4">
              <span className="text-xs px-4 py-1.5 bg-gradient-to-r from-neon-purple/30 to-neon-purple/20 text-neon-purple-light rounded-full border border-neon-purple/40 font-body font-bold uppercase tracking-wider inline-block shadow-[0_0_8px_rgba(178,111,255,0.3)]">
                Featured Project
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-body font-bold premium-white-subtle mb-5 leading-tight">
              {name}
            </h2>
            
            <p className="text-gray-300 font-body text-base md:text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.users && (
                <div className="p-5 bg-dark-bg-light/60 rounded-xl border border-neon-purple/30 shadow-[0_0_8px_rgba(178,111,255,0.2)] hover:shadow-[0_0_12px_rgba(178,111,255,0.4)] hover:border-neon-purple/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stats.users}</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Active Users</div>
                </div>
              )}
              {stats.platforms && stats.platforms.length > 0 && (
                <div className="p-5 bg-dark-bg-light/60 rounded-xl border border-neon-purple/30 shadow-[0_0_8px_rgba(178,111,255,0.2)] hover:shadow-[0_0_12px_rgba(178,111,255,0.4)] hover:border-neon-purple/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stats.platforms.length}</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Platforms</div>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-xs text-gray-400 font-body uppercase tracking-wide mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm bg-neon-purple/25 text-neon-purple-light rounded-lg border border-neon-purple/40 font-body font-medium hover:bg-neon-purple/35 hover:border-neon-purple/60 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 gradient-border premium-white-subtle font-semibold rounded-md hover:scale-105 transition-all duration-300 text-center w-full md:w-auto shadow-[0_0_10px_rgba(178,111,255,0.3)] hover:shadow-[0_0_15px_rgba(178,111,255,0.5)]"
              >
                View Details →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

