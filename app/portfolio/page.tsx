'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import GradientBackground from '@/components/GradientBackground'
import ParticleBackground from '@/components/ParticleBackground'
import NeonHeading from '@/components/NeonHeading'
import NeonButton from '@/components/NeonButton'
import ProjectGrid from '@/components/ProjectGrid'
import TechMap from '@/components/TechMap'

// Tech Icons
const ReactNativeIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.747 21.043h-3.494L12 5.424l1.747 15.619zM5.432 7.23L4.018 5.816 12 .49l7.982 5.326-1.414 1.414L12 3.31 5.432 7.23zm14.276 9.54l-1.415-1.414L21.51 12l-3.217-3.357 1.415-1.414L24 12l-4.292 4.77zm-18.544 0L0 12l4.292-4.77 1.415 1.414L2.49 12l3.217 3.357-1.414 1.414z"/>
  </svg>
)

const NextJSIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const GraphQLIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm-17.082 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm17.082 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm0 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277zm0-9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 0 0 0-4.277z"/>
  </svg>
)

const AIIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const CryptoIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const FintechIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const projects = [
    {
      name: 'Pyypl',
      description: 'A production-ready crypto wallet application serving thousands of users with secure transactions and seamless user experience. Built with React Native and GraphQL, showcasing real-world fintech expertise.',
      techStack: ['React Native', 'GraphQL', 'Crypto', 'Fintech'],
      category: 'Fintech',
      stats: {
        users: '10K+',
        platforms: ['iOS', 'Android']
      }
    },
    {
      name: 'Hybrid Mobile Banking Platform',
      description: 'A comprehensive banking solution built for the Dubai market, featuring multi-currency support, international transfers, and advanced security features. Delivered with international exposure and real-world impact.',
      techStack: ['React Native', 'Next.js', 'GraphQL', 'Hybrid Apps'],
      category: 'Fintech',
      stats: {
        users: '50K+',
        platforms: ['iOS', 'Android', 'Web']
      }
    },
    {
      name: 'Fyler',
      description: 'An AI-powered chat application leveraging large language models to provide intelligent conversations and automated assistance. Showcasing cutting-edge AI integration and modern development practices.',
      techStack: ['React Native', 'AI/ML', 'LLM Integration', 'Next.js'],
      category: 'AI',
      stats: {
        users: '5K+',
        platforms: ['iOS', 'Android']
      }
    }
  ]

  const technologies = [
    { name: 'React Native', icon: <ReactNativeIcon />, projects: ['Pyypl', 'Hybrid Mobile Banking Platform', 'Fyler'] },
    { name: 'Next.js', icon: <NextJSIcon />, projects: ['Hybrid Mobile Banking Platform', 'Fyler'] },
    { name: 'GraphQL', icon: <GraphQLIcon />, projects: ['Pyypl', 'Hybrid Mobile Banking Platform'] },
    { name: 'AI/ML', icon: <AIIcon />, projects: ['Fyler'] },
    { name: 'Crypto', icon: <CryptoIcon />, projects: ['Pyypl'] },
    { name: 'Fintech', icon: <FintechIcon />, projects: ['Pyypl', 'Hybrid Mobile Banking Platform'] }
  ]

  const categories = ['All', 'Fintech', 'AI', 'Hybrid Apps', 'Crypto']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 overflow-x-hidden relative">
      <Navigation />
      <GradientBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 md:pt-24">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-body font-bold mb-8 gradient-text text-shimmer-animation leading-tight">
                Real Apps,<br />Real Impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-body leading-relaxed max-w-3xl mx-auto">
                Production-ready applications built with cutting-edge technologies. From fintech platforms serving thousands of users to AI-powered solutions — see the real-world projects that showcase our expertise.
              </p>
            </div>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block"
              aria-label="Explore Projects"
            >
              <NeonButton variant="primary" className="text-lg px-10 py-5">
                Explore Projects →
              </NeonButton>
            </a>
          </div>
        </div>
      </section>

      {/* Tutor Introduction Section */}
      <section className="relative py-16 px-4 md:px-8 z-10 bg-dark-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-body font-bold premium-white-subtle mb-4">
              Meet the Developer
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-6 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line max-w-xl mx-auto"></div>
          </div>
          
          <div className="bg-dark-bg-light/30 border border-neon-purple/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar/Initial */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-purple/40 to-neon-purple/20 flex items-center justify-center border-2 border-neon-purple/30">
                  <span className="text-4xl font-bold premium-white-subtle">P</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-body font-bold premium-white-subtle mb-3">
                  Prajwal
                </h3>
                <p className="text-base md:text-lg text-gray-300 font-body mb-6 leading-relaxed">
                  Founder & Senior Mobile Developer with a passion for building production-ready applications. 
                  Specializing in React Native, Next.js, and GraphQL, with extensive experience in fintech and AI integration.
                </p>
                
                {/* Fun Facts Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="p-4 bg-dark-bg-light/50 rounded-lg border border-neon-purple/20">
                    <div className="text-2xl font-bold gradient-text mb-1">7+</div>
                    <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Years Coding</div>
                  </div>
                  <div className="p-4 bg-dark-bg-light/50 rounded-lg border border-neon-purple/20">
                    <div className="text-2xl font-bold gradient-text mb-1">50K+</div>
                    <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Users Served</div>
                  </div>
                  <div className="p-4 bg-dark-bg-light/50 rounded-lg border border-neon-purple/20">
                    <div className="text-2xl font-bold gradient-text mb-1">3</div>
                    <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Countries</div>
                  </div>
                  <div className="p-4 bg-dark-bg-light/50 rounded-lg border border-neon-purple/20">
                    <div className="text-2xl font-bold gradient-text mb-1">∞</div>
                    <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Coffee Cups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center mb-6">
            Projects
          </NeonHeading>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-md font-body font-semibold text-sm transition-all duration-300
                    ${selectedCategory === category
                      ? 'gradient-border premium-white-subtle shadow-[0_0_8px_rgba(178,111,255,0.3)] scale-105'
                      : 'border border-neon-purple/20 text-gray-400 hover:border-neon-purple/40 hover:text-gray-300 hover:scale-105'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Project Grid */}
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>

      {/* Skills / Tech Map */}
      <section className="relative py-24 px-4 md:px-8 z-10 bg-dark-bg-light/30">
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center mb-6">
            Technologies Used
          </NeonHeading>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>
          
          <p className="text-center text-gray-300 mb-12 text-base md:text-lg font-body max-w-2xl mx-auto">
            Hover over each technology to see which projects use it
          </p>
          
          <TechMap 
            technologies={technologies}
            projects={projects.map(p => ({ name: p.name, techStack: p.techStack }))}
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="courses" className="relative py-32 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-body font-bold premium-white-subtle mb-8 text-shimmer-animation leading-tight">
            Build Apps<br />Like These
          </h2>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line max-w-2xl mx-auto"></div>
          
          <p className="text-gray-300 mb-12 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto">
            Learn from industry experts who have built production applications used by thousands. 
            Join our courses and start building real-world projects today.
          </p>
          
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = '/#contact'
            }}
            className="inline-block"
          >
            <NeonButton variant="primary" className="text-lg px-10 py-5">
              Join Our Courses Today
            </NeonButton>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-8 shadow-[0_0_8px_rgba(178,111,255,0.3)]"></div>
          <div className="text-center text-gray-400 font-body">
            <p className="mb-2 inline-flex items-center space-x-2">
              <span className="font-body font-bold text-3xl md:text-4xl gradient-text">42</span>
              <div className="flex flex-col leading-tight">
                <span className="premium-white-subtle font-body font-normal text-[10px]">Coding</span>
                <span className="premium-white-subtle font-body font-normal text-[10px]">Labs</span>
              </div>
            </p>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
