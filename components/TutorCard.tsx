import React from 'react'
import Link from 'next/link'

interface TutorCardProps {
  name: string
  role: string
  expertise: string
  bio: string
  avatar?: string
  portfolioLink?: string
  linkedInLink?: string
  githubLink?: string
  className?: string
}

export default function TutorCard({ 
  name, 
  role,
  expertise,
  bio, 
  avatar,
  portfolioLink,
  linkedInLink,
  githubLink,
  className = '' 
}: TutorCardProps) {
  // Placeholder avatar if no image provided
  const AvatarPlaceholder = () => (
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 flex items-center justify-center border-2 border-neon-purple/30 flex-shrink-0">
      <span className="text-3xl font-bold premium-white-subtle">
        {name.charAt(0).toUpperCase()}
      </span>
    </div>
  )

  return (
    <div className={`
      relative p-6 md:p-8 rounded-xl h-full flex flex-col
      bg-dark-bg-light/50 border border-neon-purple/20
      shadow-[0_0_3px_rgba(229,213,200,0.15),0_0_6px_rgba(229,213,200,0.1)]
      hover:shadow-[0_0_5px_rgba(229,213,200,0.25),0_0_10px_rgba(229,213,200,0.15)]
      hover:border-neon-purple/40
      transition-all duration-300
      hover:scale-[1.02]
      card-entrance
      ${className}
    `}>
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-neon-purple/30 flex-shrink-0"
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
      
      {/* Name */}
      <h3 className="text-xl md:text-2xl font-body font-bold premium-white-subtle mb-2 text-center">
        {name}
      </h3>
      
      {/* Role */}
      <p className="text-sm md:text-base font-body font-semibold gradient-text mb-2 text-center">
        {role}
      </p>
      
      {/* Expertise */}
      <p className="text-xs md:text-sm text-gray-400 font-body mb-4 text-center italic">
        {expertise}
      </p>
      
      {/* Bio */}
      <p className="text-gray-300 font-body text-sm md:text-base leading-relaxed mb-6 flex-grow text-center">
        {bio}
      </p>
      
      {/* Links */}
      {(portfolioLink || linkedInLink || githubLink) && (
        <div className="flex justify-center flex-wrap gap-4 pt-4 border-t border-neon-purple/10 mt-auto">
          {portfolioLink && (
            portfolioLink.startsWith('http') ? (
              <a
                href={portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple"
              >
                Portfolio
              </a>
            ) : (
              <Link
                href={portfolioLink}
                className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple"
              >
                Portfolio
              </Link>
            )
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple"
            >
              GitHub
            </a>
          )}
          {linkedInLink && (
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple"
            >
              LinkedIn
            </a>
          )}
        </div>
      )}
    </div>
  )
}

