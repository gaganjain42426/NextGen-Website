/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import LiquidEther from './LiquidEther';
import ProfileCard from './ProfileCard';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="bg-white/80 backdrop-blur-xl border border-purple-200/50 shadow-xl shadow-purple-500/20 rounded-2xl px-4 sm:px-6 py-3 ring-1 ring-purple-100/50">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <img src="/logo.png" alt="NextGen Communications" className="h-8 sm:h-10 w-auto hover:scale-105 transition-transform duration-300" />
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                <a href="#about" className="relative px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  <span className="relative z-10">About</span>
                  <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
                <a href="#services" className="relative px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
                <a href="#industries" className="relative px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  <span className="relative z-10">Industries</span>
                  <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
                <a href="/whatsapp-demo" className="relative px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  <span className="relative z-10">WhatsApp Demo</span>
                  <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
                <a href="#contact" className="relative px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 group">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-purple-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
              </div>
              
              {/* CTA Button - Desktop */}
              <div className="hidden sm:flex items-center">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <a href="#about" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300">
                  About
                </a>
                <a href="#services" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300">
                  Services
                </a>
                <a href="#industries" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300">
                  Industries
                </a>
                <a href="/whatsapp-demo" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300">
                  WhatsApp Demo
                </a>
                <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors duration-300">
                  Contact
                </a>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* LiquidEther Background */}
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            dt={0.014}
            BFECC={true}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={1000}
            autoRampDuration={0.6}
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pointer-events-none">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 scroll-animate">
            <img src="/logo.png" alt="NextGen Communications" className="h-14 sm:h-20 w-auto mx-auto mb-3 sm:mb-4" />
            <div className="flex items-center justify-center text-purple-600 font-medium mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm">✨ AI-Powered Digital Solutions</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight scroll-animate scroll-animate-delay-1">
            <span className="text-gray-900">Verified Messaging</span>
            <span className="text-gray-900"> + </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-600 bg-clip-text text-transparent">
              Modern Websites
            </span>
            <br />
            <span className="text-gray-900">for Businesses</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed scroll-animate scroll-animate-delay-2 px-4">
            We help schools, startups, and SMEs build trust and visibility with AI-powered 
            digital solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center scroll-animate scroll-animate-delay-3 px-4">
            <button className="w-full sm:w-auto pointer-events-auto bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              📅 Book a Demo
            </button>
            <button className="w-full sm:w-auto pointer-events-auto bg-white/95 backdrop-blur-sm text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-purple-300 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              See Our Work →
            </button>
          </div>
        </div>
      </section>

      {/* Digital Presence Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Digital Presence. Simplified.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <p className="text-lg text-gray-700 mb-6">
                NextGen Communications is a <span className="text-purple-600 font-semibold">Jaipur-based AI agency</span> helping organizations modernize their communication and build a strong digital presence.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We provide verified <span className="text-yellow-600 font-semibold">WhatsApp Business API setup</span>, landing pages, automation tools, and AI-driven website design to help schools, startups, and small businesses thrive in the digital age.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">AI-Driven Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Verified Messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Modern Design</span>
                </div>
              </div>
            </div>
            
            <div className="relative scroll-animate scroll-animate-delay-2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* WhatsApp Business API */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.28-3.87-.78l-.28-.13-2.85.48.48-2.85-.13-.28C4.78 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp Business API</h3>
              <p className="text-gray-600 leading-relaxed">
                Get verified green tick status and professional messaging capabilities for your business.
              </p>
            </div>
            
            {/* Automated Messaging */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-1">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Automated Messaging & Chatbots</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart AI-powered chatbots that handle customer queries 24/7 with intelligent responses.
              </p>
            </div>
            
            {/* Website & Landing Pages */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-2">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Website & Landing Pages</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern, responsive websites and high-converting landing pages designed to impress.
              </p>
            </div>
            
            {/* Lead Funnels */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-3">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead Funnels & Campaigns</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic digital campaigns and optimized funnels to capture and convert leads.
              </p>
            </div>
            
            {/* Payment Reminders */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-4">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payment Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Automated payment reminder systems to improve cash flow and reduce follow-ups.
              </p>
            </div>
            
            {/* AI-Driven Design */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-5">
              <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Driven Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Cutting-edge AI tools to create stunning visuals and engaging digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by diverse businesses across multiple sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Schools & Education */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Schools & Education</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Streamline parent communication, fee reminders, and announcements with verified messaging.
              </p>
            </div>
            
            {/* Startups */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-1">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Startups</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Build your brand identity and digital presence from the ground up with modern solutions.
              </p>
            </div>
            
            {/* Clinics & Healthcare */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Clinics & Healthcare</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Appointment reminders, patient communication, and health tips via automated messaging.
              </p>
            </div>
            
            {/* Small Businesses */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-3">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Small Businesses</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Enhance customer engagement and grow your business with professional digital tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals driving digital transformation for businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Bhuvanesh - Left (Co-Founder) */}
            <div className="flex flex-col items-center scroll-animate">
              <div className="mb-4 text-center">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  CO-FOUNDER
                </span>
              </div>
              <ProfileCard
                avatarUrl="/team/bhuvanesh.png"
                miniAvatarUrl="/team/bhuvanesh.png"
                name="Bhuvanesh Jaiswal"
                title="Co-Founder"
                handle="bhuvanesh"
                status="Available"
                contactText="Contact"
                onContactClick={() => window.open('https://wa.me/918003225164', '_blank')}
              />
            </div>

            {/* Gagan - Center (Founder) - Larger/Featured */}
            <div className="flex flex-col items-center md:scale-110 md:z-10 scroll-animate scroll-animate-delay-1">
              <div className="mb-4 text-center">
                <span className="inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 text-white px-8 py-2.5 rounded-full text-base font-bold tracking-wide shadow-xl animate-pulse">
                  FOUNDER & CEO
                </span>
              </div>
              <ProfileCard
                avatarUrl="/team/gagan.png"
                miniAvatarUrl="/team/gagan.png"
                name="Gagan Jain"
                title="Founder"
                handle="gaganjain"
                status="Available"
                contactText="Contact"
                onContactClick={() => window.open('https://wa.me/918003225164', '_blank')}
              />
            </div>

            {/* Nikhil - Right (Co-Founder) */}
            <div className="flex flex-col items-center scroll-animate scroll-animate-delay-2">
              <div className="mb-4 text-center">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  CO-FOUNDER
                </span>
              </div>
              <ProfileCard
                avatarUrl="/team/nikhil.png"
                miniAvatarUrl="/team/nikhil.png"
                name="Nikhil Rajawat"
                title="Co-Founder"
                handle="nikhil"
                status="Available"
                contactText="Contact"
                onContactClick={() => window.open('https://wa.me/918003225164', '_blank')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* See Your Brand Stand Out Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              See Your Brand Stand Out
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Verified communication and modern design that builds trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* WhatsApp Demo */}
            <div className="bg-white p-8 rounded-2xl shadow-xl scroll-animate">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.28-3.87-.78l-.28-.13-2.85.48.48-2.85-.13-.28C4.78 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Verified WhatsApp</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    Business Account 
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">Your Business Name ✓</p>
                <p className="text-gray-700 mb-4">
                  Hello! Thank you for contacting us. We&apos;re here to help with all your digital needs. How can we assist you today?
                </p>
                <p className="text-xs text-gray-500 italic">Sent via verified WhatsApp Business API</p>
              </div>
            </div>
            
            {/* Modern Website */}
            <div className="bg-white p-8 rounded-2xl shadow-xl scroll-animate scroll-animate-delay-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Modern Website</h3>
                  <p className="text-sm text-gray-600">Professional Design</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" 
                  alt="Modern website design" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Clean, responsive, and conversion-focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let&apos;s Build Your Digital Future
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with us today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 scroll-animate">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-2xl flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.28-3.87-.78l-.28-.13-2.85.48.48-2.85-.13-.28C4.78 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/918003225164" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                    +91 8003225164
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Click to chat with us instantly</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-2xl flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:comms.next.gen.india@gmail.com" className="text-purple-600 hover:text-purple-700 font-semibold break-all">
                    comms.next.gen.india@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="https://wa.me/918003225164" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Chat with Us on WhatsApp
              </a>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200 scroll-animate scroll-animate-delay-2">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Business Name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="NextGen Communications" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Digital Presence. Simplified.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                AI-driven digital solutions for schools, startups, and SMEs.
              </p>
              
              <div className="flex gap-4">
                <a href="https://wa.me/918003225164" className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                  </svg>
                </a>
                <a href="mailto:comms.next.gen.india@gmail.com" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>WhatsApp Business API</li>
                <li>Website Design</li>
                <li>Chatbot Solutions</li>
                <li>Digital Marketing</li>
                <li>AI-Driven Design</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2025 NextGen Communications. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Made with ❤️ in Jaipur, Rajasthan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
