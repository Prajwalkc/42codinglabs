'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-dark-bg/40 border-neon-purple/20 backdrop-blur-lg border-b' 
        : 'bg-gradient-to-br from-[#FAF5EE]/95 to-[#F5F0E6]/90 backdrop-blur-md'
    }`} style={theme === 'light' ? {
      boxShadow: '0 0 4px rgba(178, 141, 107, 0.2), inset 0 0 4px rgba(178, 141, 107, 0.05), 0 0 8px rgba(178, 141, 107, 0.1)'
    } : {}}>
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
            <div className={`text-sm font-bold font-mono transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-neon-purple-light' 
                : 'beige-gradient-text'
            }`} style={theme === 'dark' ? { textShadow: '0 0 10px rgba(178, 111, 255, 0.8), 0 0 20px rgba(178, 111, 255, 0.6)' } : {}}>
              &lt; /&gt;
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-body font-bold text-3xl md:text-4xl gradient-text">42</span>
              <div className="flex flex-col leading-tight">
                <span className={`font-body font-normal text-[10px] transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-primary'
                }`}>Coding</span>
                <span className={`font-body font-normal text-[10px] transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-primary'
                }`}>Labs</span>
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
              className={`font-body relative group transition-colors ${
                theme === 'dark' 
                  ? 'premium-white-subtle' 
                  : activeSection === 'home' 
                    ? 'beige-gradient-text font-medium' 
                    : 'text-light-text-secondary hover:text-light-text-primary'
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={theme === 'dark' 
                ? { background: 'linear-gradient(to right, #c084fc, #a855f7, #9333ea)' }
                : { background: '#B28D6B' }
              }></span>
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
              className={`font-body relative group transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:premium-white-subtle' 
                  : activeSection === 'about' 
                    ? 'beige-gradient-text font-medium' 
                    : 'text-light-text-secondary hover:text-light-text-primary'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={theme === 'dark' 
                ? { background: 'linear-gradient(to right, #c084fc, #a855f7, #9333ea)' }
                : { background: '#B28D6B' }
              }></span>
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
              className={`font-body relative group transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:premium-white-subtle' 
                  : activeSection === 'services' 
                    ? 'beige-gradient-text font-medium' 
                    : 'text-light-text-secondary hover:text-light-text-primary'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={theme === 'dark' 
                ? { background: 'linear-gradient(to right, #c084fc, #a855f7, #9333ea)' }
                : { background: '#B28D6B' }
              }></span>
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
              className={`font-body relative group transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:premium-white-subtle' 
                  : activeSection === 'contact' 
                    ? 'beige-gradient-text font-medium' 
                    : 'text-light-text-secondary hover:text-light-text-primary'
              }`}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={theme === 'dark' 
                ? { background: 'linear-gradient(to right, #c084fc, #a855f7, #9333ea)' }
                : { background: '#B28D6B' }
              }></span>
            </a>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'border-neon-purple/30 hover:border-neon-purple/50 hover:shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
                  : 'border-light-border hover:border-beige hover:shadow-[0_0_0_1px_rgba(178,141,107,0.1)]'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-neon-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-light-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden focus:outline-none transition-colors duration-300 ${
                theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-primary'
              }`}
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
          <div className={`md:hidden py-4 space-y-4 border-t transition-colors duration-300 ${
            theme === 'dark' ? 'border-neon-purple/20' : 'border-light-border'
          }`}>
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
              className={`block font-body transition-colors ${
                theme === 'dark' 
                  ? activeSection === 'home' ? 'premium-white-subtle' : 'text-gray-300'
                  : activeSection === 'home' ? 'beige-gradient-text font-medium' : 'text-light-text-secondary'
              }`}
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
              className={`block font-body transition-colors ${
                theme === 'dark' 
                  ? activeSection === 'about' ? 'premium-white-subtle' : 'text-gray-300'
                  : activeSection === 'about' ? 'beige-gradient-text font-medium' : 'text-light-text-secondary'
              }`}
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
              className={`block font-body transition-colors ${
                theme === 'dark' 
                  ? activeSection === 'services' ? 'premium-white-subtle' : 'text-gray-300'
                  : activeSection === 'services' ? 'beige-gradient-text font-medium' : 'text-light-text-secondary'
              }`}
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
              className={`block font-body transition-colors ${
                theme === 'dark' 
                  ? activeSection === 'contact' ? 'premium-white-subtle' : 'text-gray-300'
                  : activeSection === 'contact' ? 'beige-gradient-text font-medium' : 'text-light-text-secondary'
              }`}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

