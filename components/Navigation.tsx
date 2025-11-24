'use client'

import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'services', 'tutors', 'testimonials', 'contact']
          const scrollPosition = window.scrollY + 100

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section)
                break
              }
            }
          }
          
          lastScrollY = window.scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/40 backdrop-blur-lg border-b border-neon-purple/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/#home" 
            onClick={(e) => {
              e.preventDefault()
              setActiveSection('home')
              const homeElement = document.getElementById('home')
              if (homeElement) {
                homeElement.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/#home'
              }
            }} 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="text-neon-purple-light text-sm font-bold font-mono" style={{ textShadow: '0 0 10px rgba(178, 111, 255, 0.8), 0 0 20px rgba(178, 111, 255, 0.6)' }}>
              &lt; /&gt;
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-body font-bold text-3xl md:text-4xl gradient-text">42</span>
              <div className="flex flex-col leading-tight">
                <span className="premium-white-subtle font-body font-normal text-[10px]">Coding</span>
                <span className="premium-white-subtle font-body font-normal text-[10px]">Labs</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/#home" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('home')
                const homeElement = document.getElementById('home')
                if (homeElement) {
                  homeElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#home'
                }
              }}
              className="premium-white-subtle font-body relative group transition-colors"
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ background: 'linear-gradient(to right, #c084fc, #a855f7, #9333ea)' }}></span>
            </a>
            <a 
              href="/#about" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('about')
                const aboutElement = document.getElementById('about')
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#about'
                }
              }}
              className="text-gray-300 font-body hover:premium-white-subtle relative group transition-colors"
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-500 transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
            <a 
              href="/#services" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('services')
                const servicesElement = document.getElementById('services')
                if (servicesElement) {
                  servicesElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#services'
                }
              }}
              className="text-gray-300 font-body hover:premium-white-subtle relative group transition-colors"
            >
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-500 transition-all duration-300 ${activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('contact')
                const contactElement = document.getElementById('contact')
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#contact'
                }
              }}
              className="text-gray-300 font-body hover:premium-white-subtle relative group transition-colors"
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-500 transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden premium-white-subtle focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neon-purple/20">
            <a 
              href="/#home" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('home')
                setIsMenuOpen(false)
                const homeElement = document.getElementById('home')
                if (homeElement) {
                  homeElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#home'
                }
              }}
              className={`block font-body transition-colors ${activeSection === 'home' ? 'premium-white-subtle' : 'text-gray-300'}`}
            >
              Home
            </a>
            <a 
              href="/#about" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('about')
                setIsMenuOpen(false)
                const aboutElement = document.getElementById('about')
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#about'
                }
              }}
              className={`block font-body transition-colors ${activeSection === 'about' ? 'premium-white-subtle' : 'text-gray-300'}`}
            >
              About Us
            </a>
            <a 
              href="/#services" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('services')
                setIsMenuOpen(false)
                const servicesElement = document.getElementById('services')
                if (servicesElement) {
                  servicesElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#services'
                }
              }}
              className={`block font-body transition-colors ${activeSection === 'services' ? 'premium-white-subtle' : 'text-gray-300'}`}
            >
              Services
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('contact')
                setIsMenuOpen(false)
                const contactElement = document.getElementById('contact')
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#contact'
                }
              }}
              className={`block font-body transition-colors ${activeSection === 'contact' ? 'premium-white-subtle' : 'text-gray-300'}`}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

