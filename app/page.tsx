"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { useTheme } from "@/contexts/ThemeContext";
import NeonButton from "@/components/NeonButton";
import NeonCard from "@/components/NeonCard";
import NeonHeading from "@/components/NeonHeading";
import GradientBackground from "@/components/GradientBackground";
import ParticleBackground from "@/components/ParticleBackground";
import TestimonialCard from "@/components/TestimonialCard";

// Simple icon components
const MobileIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const AIIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ProductIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const DesignIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

export default function Home() {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [metrics, setMetrics] = useState({ satisfaction: 0, projects: 0, delivery: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollY(scrollProgress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x: (x - 0.5) * 20, y: (y - 0.5) * 20 });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    heroRef.current?.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      heroRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Metrics counting animation
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate satisfaction from 0 to 98
            const animateSatisfaction = () => {
              let current = 0;
              const target = 98;
              const duration = 2000; // 2 seconds
              const increment = target / (duration / 16); // 60fps
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setMetrics(prev => ({ ...prev, satisfaction: Math.floor(current) }));
              }, 16);
            };

            // Animate projects from 0 to 100
            const animateProjects = () => {
              let current = 0;
              const target = 100;
              const duration = 2000;
              const increment = target / (duration / 16);
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setMetrics(prev => ({ ...prev, projects: Math.floor(current) }));
              }, 16);
            };

            // Animate delivery from 0 to 95
            const animateDelivery = () => {
              let current = 0;
              const target = 95;
              const duration = 2000;
              const increment = target / (duration / 16);
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setMetrics(prev => ({ ...prev, delivery: Math.floor(current) }));
              }, 16);
            };

            // Start all animations
            animateSatisfaction();
            animateProjects();
            animateDelivery();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [hasAnimated]);

  const parallaxOffset = scrollY * 100;
  const opacity = Math.max(0, 1 - scrollY * 1.5);
  const scale = Math.max(0.8, 1 - scrollY * 0.2);

  return (
    <main className={`min-h-screen overflow-x-hidden relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-dark-bg text-gray-200' : 'text-light-text-primary'
    }`} style={theme === 'light' ? {
      background: 'linear-gradient(to bottom, #F5F0E6 0%, #FFFFFF 100%)'
    } : {}}>
      <Navigation />
      <GradientBackground />

      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        id="home"
        className={`relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 z-10 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-dark-bg-light/20' : ''
        }`}
        style={theme === 'light' ? {
          background: 'linear-gradient(to bottom, #F5F0E6 0%, #FAF5EE 70%, #FAF5EE 100%)'
        } : {}}
      >
        {/* Large SVG Icon with Parallax */}
        <div 
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)`,
            willChange: 'transform'
          }}
        >
          <svg 
            width="800" 
            height="800" 
            viewBox="0 0 800 800" 
            className={`w-full h-full max-w-4xl max-h-4xl opacity-20 transition-opacity duration-300 ${
              theme === 'dark' ? 'text-neon-purple/30' : 'text-beige/20'
            }`}
            style={{
              transform: `translateY(${parallaxOffset * 0.3}px) rotate(${scrollY * 5}deg)`,
              willChange: 'transform',
              filter: theme === 'dark' 
                ? 'drop-shadow(0 0 40px rgba(178, 111, 255, 0.2))'
                : 'drop-shadow(0 0 40px rgba(178, 141, 107, 0.15))'
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {theme === 'dark' ? (
                  <>
                    <stop offset="0%" stopColor="#B26FFF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#B26FFF" stopOpacity="0.3" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#D4A5A5" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#B28D6B" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#A1754F" stopOpacity="0.2" />
                  </>
                )}
              </linearGradient>
            </defs>
            {/* Code brackets icon */}
            <path 
              d="M200 200 L150 400 L200 600 M600 200 L650 400 L600 600" 
              stroke="url(#iconGradient)" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Terminal/code lines */}
            <line x1="250" y1="300" x2="550" y2="300" stroke="url(#iconGradient)" strokeLinecap="round" />
            <line x1="250" y1="400" x2="450" y2="400" stroke="url(#iconGradient)" strokeLinecap="round" />
            <line x1="250" y1="500" x2="500" y2="500" stroke="url(#iconGradient)" strokeLinecap="round" />
            {/* Decorative circles */}
            <circle cx="400" cy="400" r="150" stroke="url(#iconGradient)" strokeDasharray="10,5" opacity="0.5" />
            <circle cx="400" cy="400" r="100" stroke="url(#iconGradient)" strokeDasharray="5,5" opacity="0.3" />
          </svg>
        </div>

        {/* Content with Parallax */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div 
            ref={contentRef}
            className="max-w-3xl"
            style={{
              opacity,
              transform: `translateY(${parallaxOffset * 0.5}px) scale(${scale})`,
              willChange: 'transform, opacity'
            }}
          >
            <div 
              className="flex items-center space-x-4 mb-8"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                willChange: 'transform',
                transition: 'transform 0.1s ease-out'
              }}
            >
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-body font-bold tracking-tighter leading-[0.9] uppercase gradient-text">
                42
              </h1>
              <div className="flex flex-col leading-tight">
                <span className={`font-body font-normal text-xl md:text-3xl lg:text-4xl transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white' : 'text-light-text-secondary'
                }`}>
                  Coding
                </span>
                <span className={`font-body font-normal text-xl md:text-3xl lg:text-4xl transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white' : 'text-light-text-secondary'
                }`}>
                  Labs
                </span>
              </div>
            </div>
             <p className={`text-base md:text-lg lg:text-xl mb-10 font-body font-medium leading-relaxed max-w-2xl transition-colors duration-300 ${
               theme === 'dark' 
                 ? 'text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]' 
                 : 'text-light-text-secondary'
             }`}>
               Transform your ideas into production-ready applications. We specialize in mobile apps, full-stack web solutions, AI integration, and UI/UX design.
             </p>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                theme === 'dark' 
                  ? 'premium-white-subtle hover:shadow-[0_0_12px_rgba(178,111,255,0.3),0_0_20px_rgba(178,111,255,0.2)] gradient-border hover:gradient-border-hover'
                  : 'text-light-text-secondary hover:text-light-text-primary beige-gradient-border hover:shadow-[0_0_12px_rgba(178,141,107,0.3),0_0_20px_rgba(178,141,107,0.2)]'
              }`}
              aria-label="Explore Services"
            >
              Our Services
            </button>
          </div>

          {/* Metrics Cards */}
          <div ref={metricsRef} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="flex flex-col gap-4">
              {/* Metric Card 1 */}
              <div 
                className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/70 shadow-[0_0_20px_rgba(178,111,255,0.2)]' 
                    : 'bg-gradient-to-br from-[#E8DDD0] to-[#D9CBB8] backdrop-blur-md shadow-[0_4px_12px_rgba(178,141,107,0.25),0_2px_6px_rgba(178,141,107,0.15)]'
                }`}
                style={{
                  transform: `translateY(${-mousePosition.y * 0.1}px)`,
                  willChange: 'transform',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="text-4xl font-bold gradient-text mb-1">{metrics.satisfaction}%</div>
                <div className={`text-sm font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-secondary'
                }`}>Client Satisfaction</div>
              </div>

              {/* Metric Card 2 */}
              <div 
                className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/70 shadow-[0_0_20px_rgba(178,111,255,0.2)]' 
                    : 'bg-gradient-to-br from-[#E8DDD0] to-[#D9CBB8] backdrop-blur-md shadow-[0_4px_12px_rgba(178,141,107,0.25),0_2px_6px_rgba(178,141,107,0.15)]'
                }`}
                style={{
                  transform: `translateY(${mousePosition.y * 0.1}px)`,
                  willChange: 'transform',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="text-4xl font-bold gradient-text mb-1">{metrics.projects}+</div>
                <div className={`text-sm font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-secondary'
                }`}>Projects Delivered</div>
              </div>

              {/* Metric Card 3 */}
              <div 
                className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/70 shadow-[0_0_20px_rgba(178,111,255,0.2)]' 
                    : 'bg-gradient-to-br from-[#E8DDD0] to-[#D9CBB8] backdrop-blur-md shadow-[0_4px_12px_rgba(178,141,107,0.25),0_2px_6px_rgba(178,141,107,0.15)]'
                }`}
                style={{
                  transform: `translateY(${-mousePosition.y * 0.15}px)`,
                  willChange: 'transform',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="text-4xl font-bold gradient-text mb-1">{metrics.delivery}%</div>
                <div className={`text-sm font-semibold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-secondary'
                }`}>On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className={`relative py-12 md:py-16 px-4 md:px-8 z-10 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-dark-bg-light/20' : 'bg-gradient-to-b from-[#FAF5EE] to-[#FFFFFF]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            About Us
          </NeonHeading>

          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-12 gradient-line transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* About Image */}
            <div className="relative order-2 md:order-1">
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'border-neon-purple/30' 
                  : 'border-light-border shadow-[0_4px_12px_rgba(178,141,107,0.25),0_2px_6px_rgba(178,141,107,0.15)]'
              }`}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Team Collaboration"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* About Content */}
            <div className={`text-sm md:text-base leading-relaxed space-y-4 font-body font-normal order-1 md:order-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>
                <span className="inline-flex items-center space-x-2 mr-2">
                  <span className="font-body font-bold text-3xl md:text-4xl gradient-text">
                    42
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="premium-white-subtle font-body font-normal text-[10px]">
                      Coding
                    </span>
                    <span className="premium-white-subtle font-body font-normal text-[10px]">
                      Labs
                    </span>
                  </div>
                </span>
                is a leading IT outsourcing company specializing in custom software development, mobile applications, and cutting-edge technology solutions. We help businesses transform their digital presence with production-ready applications that serve thousands of users.
              </p>
              <p>
                Our expert team delivers end-to-end development services, from mobile banking platforms and AI-powered solutions to full-stack web applications. Whether you're a startup building an MVP or an enterprise modernizing your tech stack, we provide scalable, high-quality solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`relative py-12 md:py-16 px-4 md:px-8 z-10 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-dark-bg-light/20' : 'bg-gradient-to-b from-[#FFFFFF] to-[#FAF5EE]'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            Services
          </NeonHeading>

          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-12 gradient-line transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className={`text-lg md:text-xl leading-relaxed font-body transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We offer comprehensive IT outsourcing services tailored to your business needs. 
              From mobile app development to full-stack solutions, our expert team delivers 
              production-ready applications using industry best practices and cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NeonCard icon={<MobileIcon />} title="Mobile App Development">
              <p>
                Native iOS, Android, and cross-platform React Native applications. 
                We build scalable mobile solutions with modern frameworks and best practices.
              </p>
            </NeonCard>

            <NeonCard icon={<AIIcon />} title="Full-Stack Development">
              <p>
                End-to-end web applications with modern frameworks. From frontend to backend, 
                we deliver scalable, secure, and performant solutions.
              </p>
            </NeonCard>

            <NeonCard icon={<ProductIcon />} title="Product Development">
              <p>
                Complete product development from concept to launch. MVP development, 
                feature enhancement, and product scaling services.
              </p>
            </NeonCard>

            <NeonCard icon={<DesignIcon />} title="UI/UX Design">
              <p>
                User-centered design solutions that enhance user experience. 
                Prototyping, wireframing, and design system implementation.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="hidden relative py-24 px-4 md:px-8 z-10"
      >
        <div className="max-w-4xl mx-auto">
          <NeonHeading level={2} variant="section">
            Projects
          </NeonHeading>

          <div className="space-y-4 mt-12">
            {[
              { name: "AI Chat Platform", link: "https://example.com" },
              { name: "Mobile Banking App", link: "https://example.com" },
              { name: "E-Commerce Dashboard", link: "https://example.com" },
              { name: "LLM Integration Suite", link: "https://example.com" },
              { name: "Startup MVP Platform", link: "https://example.com" },
            ].map((project, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between p-6 rounded-sm transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/30 border-neon-purple/20 hover:border-neon-purple/50 border' 
                    : 'bg-gradient-to-br from-[#FAF5EE]/95 to-[#F5F0E6]/90 beige-gradient-border backdrop-blur-md'
                }`}
              >
                <span className={`text-lg md:text-xl font-body font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {project.name}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold relative transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-neon-purple group-hover:text-neon-purple-light' 
                      : 'beige-gradient-text group-hover:opacity-80'
                  }`}
                >
                  <span className="relative">
                    Visit Link
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      theme === 'dark' 
                        ? 'bg-neon-purple shadow-[0_0_10px_rgba(178,111,255,0.8)]' 
                        : 'bg-beige shadow-[0_0_10px_rgba(178,141,107,0.3)]'
                    }`}></span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section
        id="tutors"
        className="hidden relative py-16 md:py-20 px-4 md:px-8 bg-dark-bg-light/20 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center mb-6">
            Meet Our Team
          </NeonHeading>

          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-6 gradient-line transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>

          <p className={`text-center mb-12 text-base md:text-lg font-body max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our team of experienced developers brings real-world expertise from building production-ready 
            applications. With hands-on experience in mobile, AI, and web technologies, we deliver 
            solutions that scale and perform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {/* Developer Card */}
            <div className={`group relative p-5 md:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] card-entrance flex flex-col overflow-hidden ${
              theme === 'dark' 
                ? 'bg-dark-bg-light/50 border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] hover:border-neon-purple/50 border' 
                : 'bg-gradient-to-br from-[#FAF5EE]/95 to-[#F5F0E6]/90 beige-gradient-border backdrop-blur-sm'
            }`}>
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)]' 
                      : 'border-beige/40 shadow-[0_1px_3px_rgba(178,141,107,0.15)] group-hover:shadow-[0_2px_4px_rgba(178,141,107,0.2)]'
                  }`}>
                    <img 
                      src="https://ui-avatars.com/api/?name=Prajwal&background=b256fe&color=fff&size=200&bold=true"
                      alt="Prajwal"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-neon-purple/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-body font-bold premium-white-subtle mb-1 text-center relative z-10">
                Prajwal
              </h3>

              {/* Role */}
              <p className="text-sm font-body font-semibold gradient-text mb-3 text-center relative z-10">
                CTO and Founder
              </p>

              {/* Bio */}
              <p className={`font-body text-sm leading-relaxed mb-4 text-center flex-grow relative z-10 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Expert in building production-ready applications serving thousands of users. 
                Specializing in React Native, Next.js, and GraphQL with extensive experience in 
                fintech, AI integration, and enterprise solutions.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 relative z-10">
                <span className={`px-2.5 py-1 text-xs rounded-lg border font-body font-medium transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-neon-purple/15 text-neon-purple-light border-neon-purple/25 hover:bg-neon-purple/25 hover:border-neon-purple/40' 
                    : 'bg-beige/10 beige-gradient-text border-beige/30 hover:bg-beige/20 hover:border-beige/50'
                }`}>
                  React Native
                </span>
                <span className={`px-2.5 py-1 text-xs rounded-lg border font-body font-medium transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-neon-purple/15 text-neon-purple-light border-neon-purple/25 hover:bg-neon-purple/25 hover:border-neon-purple/40' 
                    : 'bg-beige/10 beige-gradient-text border-beige/30 hover:bg-beige/20 hover:border-beige/50'
                }`}>
                  Next.js
                </span>
                <span className={`px-2.5 py-1 text-xs rounded-lg border font-body font-medium transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-neon-purple/15 text-neon-purple-light border-neon-purple/25 hover:bg-neon-purple/25 hover:border-neon-purple/40' 
                    : 'bg-beige/10 beige-gradient-text border-beige/30 hover:bg-beige/20 hover:border-beige/50'
                }`}>
                  GraphQL
                </span>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 mt-auto mb-3 relative z-10">
                <a
                  href="https://github.com/prajwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-300 underline font-medium ${
                    theme === 'dark' 
                      ? 'premium-white-subtle hover:text-neon-purple-light decoration-neon-purple/50 hover:decoration-neon-purple' 
                      : 'beige-gradient-text hover:opacity-80 decoration-beige/40 hover:decoration-beige'
                  }`}
                >
                  GitHub
                </a>
              </div>

              {/* Stats with improved design */}
              <div className={`grid grid-cols-3 gap-2 pt-4 mt-3 border-t relative z-10 transition-colors duration-300 ${
                theme === 'dark' ? 'border-neon-purple/20' : 'border-light-border'
              }`}>
                <div className={`text-center p-1.5 rounded-lg border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/30 border-neon-purple/10 group-hover:border-neon-purple/20' 
                    : 'bg-beige/5 border-light-border group-hover:border-beige/40'
                }`}>
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">7+</div>
                  <div className={`text-xs font-body uppercase tracking-wide transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Years</div>
                </div>
                <div className={`text-center p-1.5 rounded-lg border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/30 border-neon-purple/10 group-hover:border-neon-purple/20' 
                    : 'bg-beige/5 border-light-border group-hover:border-beige/40'
                }`}>
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">50K+</div>
                  <div className={`text-xs font-body uppercase tracking-wide transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Users</div>
                </div>
                <div className={`text-center p-1.5 rounded-lg border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/30 border-neon-purple/10 group-hover:border-neon-purple/20' 
                    : 'bg-beige/5 border-light-border group-hover:border-beige/40'
                }`}>
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">3</div>
                  <div className={`text-xs font-body uppercase tracking-wide transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>Countries</div>
                </div>
              </div>
            </div>

            {/* Developer Card - Pooja Saru */}
            <div className={`group relative p-5 md:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] card-entrance flex flex-col overflow-hidden ${
              theme === 'dark' 
                ? 'bg-dark-bg-light/50 border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] hover:border-neon-purple/50 border' 
                : 'bg-gradient-to-br from-[#F5F0E6] to-[#FAF5EE] beige-gradient-border'
            }`} style={{ animationDelay: "0.1s" }}>
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)]' 
                      : 'border-beige/40 shadow-[0_1px_3px_rgba(178,141,107,0.15)] group-hover:shadow-[0_2px_4px_rgba(178,141,107,0.2)]'
                  }`}>
                    <img 
                      src="https://ui-avatars.com/api/?name=Pooja&background=b256fe&color=fff&size=200&bold=true"
                      alt="Pooja"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-neon-purple/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-body font-bold premium-white-subtle mb-1 text-center relative z-10">
                Pooja
              </h3>

              {/* Role */}
              <p className="text-sm font-body font-semibold gradient-text mb-3 text-center relative z-10">
                CEO and Founder
              </p>

              {/* Bio */}
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-4 text-center flex-grow relative z-10">
                Strategic leader with extensive experience in CEO roles and project management. 
                Expert in driving business growth, managing cross-functional teams, and delivering 
                successful technology projects on time and within budget.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 relative z-10">
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Project Management
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Business Strategy
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Team Leadership
                </span>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 mt-auto mb-3 relative z-10">
                <a
                  href="#"
                  className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple font-medium"
                >
                  LinkedIn
                </a>
              </div>

              {/* Stats with improved design */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-3 border-t border-neon-purple/20 relative z-10">
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">10+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">5+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Years</div>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">100%</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Success</div>
                </div>
              </div>
            </div>

            {/* Developer Card - Amit Sharma */}
            <div className={`group relative p-5 md:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] card-entrance flex flex-col overflow-hidden ${
              theme === 'dark' 
                ? 'bg-dark-bg-light/50 border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] hover:border-neon-purple/50 border' 
                : 'bg-gradient-to-br from-[#F5F0E6] to-[#FAF5EE] beige-gradient-border'
            }`} style={{ animationDelay: "0.2s" }}>
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)]' 
                      : 'border-beige/40 shadow-[0_1px_3px_rgba(178,141,107,0.15)] group-hover:shadow-[0_2px_4px_rgba(178,141,107,0.2)]'
                  }`}>
                    <img 
                      src="https://ui-avatars.com/api/?name=Amit&background=b256fe&color=fff&size=200&bold=true"
                      alt="Amit"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-neon-purple/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-body font-bold premium-white-subtle mb-1 text-center relative z-10">
                Amit
              </h3>

              {/* Role */}
              <p className="text-sm font-body font-semibold gradient-text mb-3 text-center relative z-10">
                Experienced Backend Developer
              </p>

              {/* Bio */}
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-4 text-center flex-grow relative z-10">
                Seasoned backend developer with 7+ years of experience building scalable and robust 
                server-side applications. Expert in API development, database design, and cloud 
                infrastructure for enterprise-level solutions.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 relative z-10">
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Node.js
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Python
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  AWS
                </span>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 mt-auto mb-3 relative z-10">
                <a
                  href="https://github.com/amit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm premium-white-subtle hover:text-neon-purple-light transition-colors duration-300 underline decoration-neon-purple/50 hover:decoration-neon-purple font-medium"
                >
                  GitHub
                </a>
              </div>

              {/* Stats with improved design */}
              <div className="grid grid-cols-3 gap-2 pt-4 mt-3 border-t border-neon-purple/20 relative z-10">
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">7+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Years</div>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">20+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">5+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Tech Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`relative py-12 md:py-16 px-4 md:px-8 z-10 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-dark-bg-light/20' : 'bg-gradient-to-b from-[#FAF5EE] to-[#F5F0E6]'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            What Our Clients Say
          </NeonHeading>

          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-6 gradient-line transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>

          <p className={`text-center mb-12 text-base md:text-lg font-body max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Trusted by startups and enterprises worldwide. Here's what our clients have to say about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              className="animate-fade-up h-full"
              style={{ animationDelay: "0.1s" }}
            >
              <TestimonialCard
                name="Alex Chen"
                role="CTO, Fintech Startup"
                quote="42 Coding Labs delivered an exceptional mobile banking application that exceeded our expectations. Their expertise in React Native and fintech integration was evident throughout the project. Highly professional and reliable."
              />
            </div>
            <div
              className="animate-fade-up h-full"
              style={{ animationDelay: "0.2s" }}
            >
              <TestimonialCard
                name="Sarah Johnson"
                role="Product Manager, AI Company"
                quote="Working with 42 Coding Labs transformed our AI chat platform. They seamlessly integrated LLM capabilities and delivered a scalable solution. The team's technical expertise and communication were outstanding."
              />
            </div>
            <div
              className="animate-fade-up h-full"
              style={{ animationDelay: "0.3s" }}
            >
              <TestimonialCard
                name="Marcus Rivera"
                role="Founder, E-Commerce Platform"
                quote="From MVP to production, 42 Coding Labs guided us through every step. Their full-stack development services helped us launch faster than expected. Professional, responsive, and results-driven."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`relative py-12 md:py-16 px-4 md:px-8 z-10 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-dark-bg-light/20' : 'bg-gradient-to-b from-[#F5F0E6] to-[#FAF5EE]'
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            Contact Us
          </NeonHeading>

          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-6 gradient-line transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>

          <p className={`text-center mb-12 text-base md:text-lg font-body max-w-2xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to transform your ideas into reality? Get in touch with us to discuss your project. 
            We'll provide a detailed proposal and timeline tailored to your business needs.
          </p>

          <form
            className="mt-12 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 font-body transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-primary'
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/50 border-neon-purple/20 text-gray-200 focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)]' 
                    : 'bg-white border-light-border text-light-text-primary focus:border-beige focus:shadow-[0_0_0_3px_rgba(178,141,107,0.1)]'
                }`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block mb-2 font-body transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-primary'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/50 border-neon-purple/20 text-gray-200 focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)]' 
                    : 'bg-white border-light-border text-light-text-primary focus:border-beige focus:shadow-[0_0_0_3px_rgba(178,141,107,0.1)]'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className={`block mb-2 font-body transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-primary'
                }`}
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 appearance-none cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/50 border-neon-purple/20 text-gray-200 focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)]' 
                    : 'bg-white border-light-border text-light-text-primary focus:border-beige focus:shadow-[0_0_0_3px_rgba(178,141,107,0.1)]'
                }`}
                style={{
                  backgroundImage: theme === 'dark'
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c084fc'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")"
                    : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23B28D6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">Select a service...</option>
                <option value="mobile">Mobile App Development</option>
                <option value="fullstack">Full-Stack Development</option>
                <option value="product">Product Development</option>
                <option value="design">UI/UX Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block mb-2 font-body transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-light-text-primary'
                }`}
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                  theme === 'dark' 
                    ? 'bg-dark-bg-light/50 border-neon-purple/20 text-gray-200 focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)]' 
                    : 'bg-white border-light-border text-light-text-primary focus:border-beige focus:shadow-[0_0_0_3px_rgba(178,141,107,0.1)]'
                }`}
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex justify-center pt-4">
              <NeonButton type="submit" variant="primary">
                Send Message
              </NeonButton>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-12 px-4 md:px-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-dark-bg-light/20' : 'bg-gradient-to-b from-[#FAF5EE] to-[#F5F0E6]'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className={`h-px bg-gradient-to-r from-transparent to-transparent mb-8 transition-all duration-300 ${
            theme === 'dark' 
              ? 'via-neon-purple/60 shadow-[0_0_8px_rgba(178,111,255,0.3)]' 
              : 'via-beige/40 shadow-[0_0_8px_rgba(178,141,107,0.15)]'
          }`}></div>
          <div className={`text-center font-body transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p className="mb-2 inline-flex items-center space-x-2">
              <span className="font-body font-bold text-3xl md:text-4xl gradient-text">
                42
              </span>
              <div className="flex flex-col leading-tight">
                <span className={`font-body font-normal text-[10px] transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-secondary'
                }`}>
                  Coding
                </span>
                <span className={`font-body font-normal text-[10px] transition-colors duration-300 ${
                  theme === 'dark' ? 'premium-white-subtle' : 'text-light-text-secondary'
                }`}>
                  Labs
                </span>
              </div>
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
