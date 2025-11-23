'use client'

import React, { useState, useEffect } from 'react'

interface Project {
  name: string
  description: string
  techStack: string[]
  category: string
  image?: string
  stats?: {
    users?: string
    platforms?: string[]
  }
}

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-purple/5 border border-neon-purple/30">
        {/* Images */}
        <div className="relative w-full h-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-9xl premium-white-subtle opacity-30">
                    {project.name.charAt(0)}
                  </div>
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
              
              {/* Project Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-4xl">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-body font-bold premium-white-subtle mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-200 font-body text-base md:text-lg mb-6 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm bg-dark-bg/80 backdrop-blur-sm text-neon-purple-light rounded-lg border border-neon-purple/40 font-body font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-dark-bg/80 backdrop-blur-sm border border-neon-purple/30 rounded-full premium-white-subtle hover:bg-dark-bg hover:border-neon-purple/50 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-dark-bg/80 backdrop-blur-sm border border-neon-purple/30 rounded-full premium-white-subtle hover:bg-dark-bg hover:border-neon-purple/50 transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-neon-purple-light shadow-[0_0_10px_rgba(178,111,255,0.6)]'
                  : 'w-2 h-2 bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

