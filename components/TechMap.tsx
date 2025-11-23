'use client'

import React, { useState } from 'react'

interface TechItem {
  name: string
  icon: React.ReactNode
  projects: string[]
}

interface TechMapProps {
  technologies: TechItem[]
  projects: { name: string; techStack: string[] }[]
}

export default function TechMap({ technologies, projects }: TechMapProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const getProjectsForTech = (techName: string) => {
    return projects.filter(project => 
      project.techStack.some(tech => 
        tech.toLowerCase().includes(techName.toLowerCase())
      )
    ).map(p => p.name)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => {
          const relatedProjects = getProjectsForTech(tech.name)
          const isHovered = hoveredTech === tech.name

          return (
            <div
              key={index}
              className={`
                relative p-6 rounded-xl
                bg-dark-bg-light/50 border border-neon-purple/20
                shadow-[0_0_3px_rgba(178,111,255,0.15)]
                hover:shadow-[0_0_8px_rgba(178,111,255,0.3)]
                hover:border-neon-purple/40
                transition-all duration-300
                hover:scale-110
                cursor-pointer
                ${isHovered ? 'border-neon-purple/60 shadow-[0_0_10px_rgba(178,111,255,0.4)]' : ''}
              `}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 premium-white-subtle text-4xl">
                  {tech.icon}
                </div>
                <h4 className="text-sm font-body font-semibold premium-white-subtle mb-2">
                  {tech.name}
                </h4>
                {relatedProjects.length > 0 && (
                  <div className="text-xs text-gray-400 font-body">
                    {relatedProjects.length} project{relatedProjects.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>

              {/* Tooltip on hover */}
              {isHovered && relatedProjects.length > 0 && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-4 bg-dark-bg border border-neon-purple/50 rounded-xl shadow-[0_0_15px_rgba(178,111,255,0.4)] z-10 min-w-[220px] backdrop-blur-sm animate-fade-up">
                  <div className="text-xs font-body font-semibold premium-white-subtle mb-3 uppercase tracking-wide">
                    Used in:
                  </div>
                  <div className="space-y-2">
                    {relatedProjects.map((project, idx) => (
                      <div key={idx} className="text-sm text-gray-200 font-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple-light"></span>
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

