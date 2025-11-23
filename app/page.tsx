'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import NeonButton from '@/components/NeonButton'
import NeonCard from '@/components/NeonCard'
import NeonHeading from '@/components/NeonHeading'
import GradientBackground from '@/components/GradientBackground'
import ParticleBackground from '@/components/ParticleBackground'

// Simple icon components
const MobileIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

const AIIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const ProductIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const DesignIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 overflow-x-hidden relative">
      <Navigation />
      <GradientBackground />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center space-x-4 mb-8">
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-body font-bold tracking-tighter leading-[0.9] uppercase gradient-text">
                42
              </h1>
              <div className="flex flex-col leading-tight">
                <span className="premium-white font-body font-normal text-xl md:text-3xl lg:text-4xl">Coding</span>
                <span className="premium-white font-body font-normal text-xl md:text-3xl lg:text-4xl">Labs</span>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 font-body font-normal leading-relaxed max-w-2xl">
              Master modern tech stacks through hands-on learning. From mobile development to AI integration, we teach the skills you need to build the future.
            </p>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 premium-white-subtle font-semibold rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow-neon-md hover:shadow-[0_0_20px_rgba(178,111,255,0.6),0_0_40px_rgba(178,111,255,0.4)] gradient-border hover:gradient-border-hover"
            >
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">About</NeonHeading>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>
          
          <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-body font-normal">
            <p>
              <span className="inline-flex items-center space-x-2 mr-2">
                <span className="font-body font-bold text-3xl md:text-4xl gradient-text">42</span>
                <div className="flex flex-col leading-tight">
                  <span className="premium-white-subtle font-body font-normal text-[10px]">Coding</span>
                  <span className="premium-white-subtle font-body font-normal text-[10px]">Labs</span>
                </div>
              </span>
              is an online coding school that teaches multiple tech stacks through 
              practical, hands-on courses. We offer comprehensive learning paths in mobile development, 
              AI integration, web technologies, and more. Our curriculum is designed for all skill levels, 
              from beginners to advanced developers.
            </p>
            <p>
              Learn at your own pace with real-world projects, expert mentorship, and a community 
              of passionate learners. Start your coding journey today and build the skills needed 
              for tomorrow's tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 md:px-8 bg-dark-bg-light/30 z-10">
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">Courses</NeonHeading>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <NeonCard
              icon={<MobileIcon />}
              title="Mobile Development"
            >
              <p>
                Master iOS, Android, and React Native. Build native and cross-platform apps 
                with industry-standard frameworks and tools.
              </p>
            </NeonCard>

            <NeonCard
              icon={<AIIcon />}
              title="AI & Machine Learning"
            >
              <p>
                Learn AI fundamentals, LLM integration, and machine learning. Build intelligent 
                applications with cutting-edge AI technologies.
              </p>
            </NeonCard>

            <NeonCard
              icon={<ProductIcon />}
              title="Full-Stack Web"
            >
              <p>
                Master frontend and backend development. Learn modern frameworks, databases, 
                and deployment strategies for scalable web applications.
              </p>
            </NeonCard>

            <NeonCard
              icon={<DesignIcon />}
              title="UI/UX Design"
            >
              <p>
                Create beautiful, user-friendly interfaces. Learn design principles, prototyping, 
                and user experience best practices.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="hidden relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <NeonHeading level={2} variant="section">Projects</NeonHeading>
          
          <div className="space-y-4 mt-12">
            {[
              { name: 'AI Chat Platform', link: 'https://example.com' },
              { name: 'Mobile Banking App', link: 'https://example.com' },
              { name: 'E-Commerce Dashboard', link: 'https://example.com' },
              { name: 'LLM Integration Suite', link: 'https://example.com' },
              { name: 'Startup MVP Platform', link: 'https://example.com' },
            ].map((project, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-6 bg-dark-bg-light/30 border border-neon-purple/20 rounded-sm hover:border-neon-purple/50 transition-all duration-300"
              >
                <span className="text-lg md:text-xl text-gray-200 font-body font-medium">{project.name}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-purple font-semibold relative group-hover:text-neon-purple-light transition-colors duration-300"
                >
                  <span className="relative">
                    Visit Link
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 md:px-8 bg-dark-bg-light/30 z-10">
        <div className="max-w-2xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">Sign Up</NeonHeading>
          
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>
          
          <p className="text-center text-gray-300 mb-8 font-body">
            Ready to start your coding journey? Sign up to get started with our courses.
          </p>
          
          <form className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-body">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 form-input-bg border border-neon-purple/30 rounded-sm text-gray-200 focus:outline-none focus:border-neon-purple/60 focus:shadow-neon-sm transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-body">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 form-input-bg border border-neon-purple/30 rounded-sm text-gray-200 focus:outline-none focus:border-neon-purple/60 focus:shadow-neon-sm transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-gray-300 mb-2 font-body">
                Course Interest
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-3 form-input-bg border border-neon-purple/30 rounded-sm text-gray-200 focus:outline-none focus:border-neon-purple/60 focus:shadow-neon-sm transition-all duration-300 appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23c084fc\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
              >
                <option value="">Select a course...</option>
                <option value="mobile">Mobile Development</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="fullstack">Full-Stack Web</option>
                <option value="design">UI/UX Design</option>
                <option value="all">All Courses</option>
              </select>
            </div>

            <div className="flex justify-center pt-4">
              <NeonButton type="submit" variant="primary">
                Sign Up Now
              </NeonButton>
            </div>
          </form>
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

