'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ProjectShowcaseProps {
  name: string
  description: string
  techStack: string[]
  stats: {
    users?: string
    platforms?: string[]
  }
  image?: string
  link?: string
  index: number
}

export default function ProjectShowcase({
  name,
  description,
  techStack,
  stats,
  image,
  link,
  index
}: ProjectShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const isEven = index % 2 === 0

  return (
    <div 
      ref={ref}
      className={`relative w-full mb-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
        {/* Image/Visual Section */}
        <div className={`w-full md:w-1/2 relative ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-neon-purple/30 via-neon-purple/15 to-neon-purple/5 group">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-8xl premium-white-subtle opacity-20">
                  {name.charAt(0)}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent"></div>
            
            {/* Stats overlay */}
            {stats && (
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {stats.users && (
                  <div className="px-4 py-2 bg-dark-bg/90 backdrop-blur-sm rounded-lg border border-neon-purple/30">
                    <div className="text-lg font-bold gradient-text">{stats.users}</div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                )}
                {stats.platforms && stats.platforms.length > 0 && (
                  <div className="px-4 py-2 bg-dark-bg/90 backdrop-blur-sm rounded-lg border border-neon-purple/30">
                    <div className="text-lg font-bold gradient-text">{stats.platforms.length}</div>
                    <div className="text-xs text-gray-400">Platforms</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <div className="space-y-6">
            <div>
              <span className="text-xs px-3 py-1 bg-neon-purple/20 text-neon-purple-light rounded-full border border-neon-purple/30 font-body font-semibold uppercase tracking-wide mb-4 inline-block">
                Project {index + 1}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-body font-bold premium-white-subtle mb-4 leading-tight">
                {name}
              </h3>
            </div>
            
            <p className="text-gray-300 font-body text-lg md:text-xl leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div>
              <p className="text-sm text-gray-400 font-body uppercase tracking-wide mb-3">Technologies</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 text-sm bg-dark-bg-light/50 text-neon-purple-light rounded-lg border border-neon-purple/30 font-body font-medium hover:border-neon-purple/50 hover:bg-dark-bg-light/70 transition-all duration-300"
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
                className="inline-flex items-center gap-2 text-base premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 font-body font-semibold group"
              >
                View Project
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

