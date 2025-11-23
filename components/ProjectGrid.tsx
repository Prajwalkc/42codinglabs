'use client'

import React from 'react'

interface Project {
  name: string
  description: string
  techStack: string[]
  category: string
  stats?: {
    users?: string
    platforms?: string[]
  }
}

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 font-body">No projects found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative p-6 rounded-xl bg-dark-bg-light/50 border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300 hover:shadow-[0_0_8px_rgba(178,111,255,0.3)]"
        >
          {/* Category Badge */}
          <div className="mb-3">
            <span className="text-xs px-3 py-1 bg-neon-purple/20 text-neon-purple-light rounded-full border border-neon-purple/30 font-body font-semibold uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="text-xl md:text-2xl font-body font-bold premium-white-subtle mb-3">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-300 font-body text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Stats */}
          {project.stats && (
            <div className="flex gap-4 mb-4 text-xs text-gray-400">
              {project.stats.users && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {project.stats.users}
                </span>
              )}
              {project.stats.platforms && project.stats.platforms.length > 0 && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {project.stats.platforms.length} platforms
                </span>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-neon-purple/20 text-neon-purple-light rounded border border-neon-purple/30 font-body font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs text-gray-400 font-body">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

