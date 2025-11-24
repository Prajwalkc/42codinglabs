"use client";

import React from "react";
import Navigation from "@/components/Navigation";
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
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 overflow-x-hidden relative">
      <Navigation />
      <GradientBackground />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 bg-dark-bg-light/20"
      >
        <ParticleBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl animate-fade-up">
              <div className="flex items-center space-x-4 mb-8">
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-body font-bold tracking-tighter leading-[0.9] uppercase gradient-text">
                  42
                </h1>
                <div className="flex flex-col leading-tight">
                  <span className="premium-white font-body font-normal text-xl md:text-3xl lg:text-4xl">
                    Coding
                  </span>
                  <span className="premium-white font-body font-normal text-xl md:text-3xl lg:text-4xl">
                    Labs
                  </span>
                </div>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 font-body font-normal leading-relaxed max-w-2xl">
                Transform your ideas into production-ready applications with our expert development team. 
                We specialize in mobile apps, full-stack web solutions, AI integration, and UI/UX design. 
                From startups to enterprises, we deliver scalable, high-quality software solutions that drive business growth.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 premium-white-subtle font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_12px_rgba(178,111,255,0.3),0_0_20px_rgba(178,111,255,0.2)] gradient-border hover:gradient-border-hover"
                aria-label="Explore Services"
              >
                Our Services
              </button>
            </div>
            
            {/* Hero Image */}
            <div className="hidden md:block relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden border border-neon-purple/30 shadow-[0_0_30px_rgba(178,111,255,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&q=80"
                  alt="Software Development"
                  className="w-full h-[500px] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 md:px-8 bg-dark-bg-light/20 z-10">
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            About
          </NeonHeading>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* About Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-neon-purple/30 shadow-[0_0_30px_rgba(178,111,255,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="Team Collaboration"
                  className="w-full h-[400px] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent z-20"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-body font-normal order-1 md:order-2">
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
              is a leading IT outsourcing company specializing in custom software development, 
              mobile applications, and cutting-edge technology solutions. With years of experience 
              in fintech, AI integration, and enterprise applications, we help businesses transform 
              their digital presence and scale their operations.
            </p>
            <p>
              Our team of expert developers brings real-world experience from building production-ready 
              applications that serve thousands of users across multiple countries. We've delivered 
              solutions ranging from mobile banking platforms and AI-powered chat applications to 
              full-stack web applications and UI/UX design services.
            </p>
            <p>
              Whether you're a startup looking to build an MVP or an enterprise seeking to modernize 
              your technology stack, we provide end-to-end development services tailored to your needs. 
              From initial concept to deployment and ongoing maintenance, we're committed to delivering 
              high-quality, scalable solutions that drive your business forward.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 px-4 md:px-8 bg-dark-bg-light/20 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            Services
          </NeonHeading>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-12 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-body">
              We offer comprehensive IT outsourcing services tailored to your business needs. 
              From mobile app development to full-stack solutions, our expert team delivers 
              production-ready applications using industry best practices and cutting-edge technologies.
            </p>
          </div>

          {/* Services Background Image */}
          <div className="relative mb-16 rounded-2xl overflow-hidden border border-neon-purple/30 shadow-[0_0_30px_rgba(178,111,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&q=80"
              alt="Technology Services"
              className="w-full h-[300px] object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/40 to-transparent z-20"></div>
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="text-center px-8">
                <h3 className="text-3xl md:text-4xl font-bold premium-white-subtle mb-4">Innovation Meets Excellence</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">Delivering cutting-edge solutions that transform businesses</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
                className="group flex items-center justify-between p-6 bg-dark-bg-light/30 border border-neon-purple/20 rounded-sm hover:border-neon-purple/50 transition-all duration-300"
              >
                <span className="text-lg md:text-xl text-gray-200 font-body font-medium">
                  {project.name}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-purple font-semibold relative group-hover:text-neon-purple-light transition-colors duration-300"
                >
                  <span className="relative">
                    Visit Link
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(178,111,255,0.8)]"></span>
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
        className="relative py-16 md:py-20 px-4 md:px-8 bg-dark-bg-light/20 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center mb-6">
            Meet Our Team
          </NeonHeading>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-6 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          <p className="text-center text-gray-300 mb-12 text-base md:text-lg font-body max-w-2xl mx-auto">
            Our team of experienced developers brings real-world expertise from building production-ready 
            applications. With hands-on experience in mobile, AI, and web technologies, we deliver 
            solutions that scale and perform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {/* Developer Card */}
            <div className="group relative p-5 md:p-6 rounded-2xl bg-dark-bg-light/50 border border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-neon-purple/50 card-entrance flex flex-col overflow-hidden">
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)] transition-all duration-300">
                    <img 
                      src="https://ui-avatars.com/api/?name=Prajwal&background=b256fe&color=fff&size=200&bold=true"
                      alt="Prajwal"
                      className="w-full h-full object-cover"
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
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-4 text-center flex-grow relative z-10">
                Expert in building production-ready applications serving thousands of users. 
                Specializing in React Native, Next.js, and GraphQL with extensive experience in 
                fintech, AI integration, and enterprise solutions.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 relative z-10">
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  React Native
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  Next.js
                </span>
                <span className="px-2.5 py-1 text-xs bg-neon-purple/15 text-neon-purple-light rounded-lg border border-neon-purple/25 font-body font-medium hover:bg-neon-purple/25 hover:border-neon-purple/40 transition-all duration-200">
                  GraphQL
                </span>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 mt-auto mb-3 relative z-10">
                <a
                  href="https://github.com/prajwal"
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
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">50K+</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Users</div>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-dark-bg-light/30 border border-neon-purple/10 group-hover:border-neon-purple/20 transition-all duration-300">
                  <div className="text-lg md:text-xl font-bold gradient-text mb-0.5">3</div>
                  <div className="text-xs text-gray-400 font-body uppercase tracking-wide">Countries</div>
                </div>
              </div>
            </div>

            {/* Developer Card - Pooja Saru */}
            <div className="group relative p-5 md:p-6 rounded-2xl bg-dark-bg-light/50 border border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-neon-purple/50 card-entrance flex flex-col overflow-hidden" style={{ animationDelay: "0.1s" }}>
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)] transition-all duration-300">
                    <img 
                      src="https://ui-avatars.com/api/?name=Pooja&background=b256fe&color=fff&size=200&bold=true"
                      alt="Pooja"
                      className="w-full h-full object-cover"
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
            <div className="group relative p-5 md:p-6 rounded-2xl bg-dark-bg-light/50 border border-neon-purple/20 shadow-[0_0_3px_rgba(178,111,255,0.15),0_0_6px_rgba(178,111,255,0.1)] hover:shadow-[0_0_8px_rgba(178,111,255,0.25),0_0_15px_rgba(178,111,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:border-neon-purple/50 card-entrance flex flex-col overflow-hidden" style={{ animationDelay: "0.2s" }}>
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Avatar with enhanced styling */}
              <div className="flex justify-center mb-4 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neon-purple/40 shadow-[0_0_15px_rgba(178,111,255,0.3)] group-hover:shadow-[0_0_20px_rgba(178,111,255,0.4)] transition-all duration-300">
                    <img 
                      src="https://ui-avatars.com/api/?name=Amit&background=b256fe&color=fff&size=200&bold=true"
                      alt="Amit"
                      className="w-full h-full object-cover"
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
        className="relative py-24 px-4 md:px-8 bg-dark-bg-light/20 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            What Our Clients Say
          </NeonHeading>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-6 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          <p className="text-center text-gray-300 mb-12 text-base md:text-lg font-body max-w-2xl mx-auto">
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
        className="relative py-24 px-4 md:px-8 bg-dark-bg-light/20 z-10"
      >
        <div className="max-w-2xl mx-auto">
          <NeonHeading level={2} variant="section" className="text-center">
            Contact Us
          </NeonHeading>

          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-6 shadow-[0_0_8px_rgba(178,111,255,0.3)] gradient-line"></div>

          <p className="text-center text-gray-300 mb-12 text-base md:text-lg font-body max-w-2xl mx-auto">
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
                className="block text-gray-300 mb-2 font-body"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-dark-bg-light/50 border border-neon-purple/20 rounded-lg text-gray-200 focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)] transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-body"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-dark-bg-light/50 border border-neon-purple/20 rounded-lg text-gray-200 focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)] transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-gray-300 mb-2 font-body"
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 bg-dark-bg-light/50 border border-neon-purple/20 rounded-lg text-gray-200 focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)] transition-all duration-300 appearance-none cursor-pointer"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c084fc'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
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
                className="block text-gray-300 mb-2 font-body"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-dark-bg-light/50 border border-neon-purple/20 rounded-lg text-gray-200 focus:outline-none focus:border-neon-purple/50 focus:shadow-[0_0_8px_rgba(178,111,255,0.2)] transition-all duration-300 resize-none"
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
      <footer className="relative py-12 px-4 md:px-8 bg-dark-bg-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/60 to-transparent mb-8 shadow-[0_0_8px_rgba(178,111,255,0.3)]"></div>
          <div className="text-center text-gray-400 font-body">
            <p className="mb-2 inline-flex items-center space-x-2">
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
