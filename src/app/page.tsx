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
            <span className="text-gray-900">End-to-End</span>
            <span className="text-gray-900"> </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-600 bg-clip-text text-transparent">
              Social Media Marketing
            </span>
            <br />
            <span className="text-gray-900">for Jaipur Brands</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed scroll-animate scroll-animate-delay-2 px-4">
            We help local Jaipur brands create engaging content, build presence, and scale sales
            through professional social media marketing.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center scroll-animate scroll-animate-delay-3 px-4">
            <button className="w-full sm:w-auto pointer-events-auto bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500 hover:from-purple-700 hover:via-purple-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              🎬 Start Your Campaign
            </button>
            <button className="w-full sm:w-auto pointer-events-auto bg-white/95 backdrop-blur-sm text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-purple-300 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              View Portfolio →
            </button>
          </div>
        </div>
      </section>

      {/* Digital Presence Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Content. Authentic Storytelling.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <p className="text-lg text-gray-700 mb-6">
                <span className="text-purple-600 font-semibold">Rogue Studio</span> is a full-service social media marketing agency based in Jaipur, specializing in creating authentic, engaging content for local brands.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From <span className="text-yellow-600 font-semibold">scriptwriting to final Meta ad deployment</span>, we handle every aspect of your social media strategy. Whether you&apos;re a F&B brand, salon, retail store, or service business, we bring your story to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Complete Content Cycle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Professional Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Results-Driven Ads</span>
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

      {/* Services Workflow Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Complete Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to conversion - we handle your complete social media marketing journey
            </p>
          </div>
          
          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
            
            {/* Timeline Steps */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-4">
              {/* Step 1: Script */}
              <div className="relative scroll-animate">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53h-.5c-1.45 0-3 .5-4.08 1.63L5 13.07C4.4 13.62 4 14.35 4 15.07V19c0 .55.45 1 1 1h3.93c.72 0 1.45-.4 2-1.05L18.37 9.58c1.12-1.05 1.63-2.63 1.63-4.08v-.5c0-.75-.29-1.46-.76-2.01zM9 16.17L7.83 15h1.17v1.17zM18 9c0 .82-.65 1.65-1.59 2.54L9.5 16.65h-2.3L16.6 6h.4c.91 0 1.65.74 1.65 1.65v1.35z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center text-sm font-bold text-purple-600">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 text-center">Script</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    We create compelling scripts tailored to your brand voice and audience, designed for platform optimization.
                  </p>
                </div>
              </div>

              {/* Step 2: Shoot */}
              <div className="relative scroll-animate scroll-animate-delay-1">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center text-sm font-bold text-purple-600">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 text-center">Shoot</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Professional video and photo production with high-quality equipment and creative direction.
                  </p>
                </div>
              </div>

              {/* Step 3: Edit */}
              <div className="relative scroll-animate scroll-animate-delay-2">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center text-sm font-bold text-purple-600">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 text-center">Edit</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Expert video editing with color grading, graphics, transitions, and audio enhancement.
                  </p>
                </div>
              </div>

              {/* Step 4: Post */}
              <div className="relative scroll-animate scroll-animate-delay-3">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.05v2.71h1.38v-2.71h2.05l-2.73-3.54zM9 9h6v2H9z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center text-sm font-bold text-purple-600">4</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 text-center">Post</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Strategic content scheduling across Instagram, Facebook, and other platforms with optimal timing.
                  </p>
                </div>
              </div>

              {/* Step 5: Meta Ads */}
              <div className="relative scroll-animate scroll-animate-delay-4">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-600 flex items-center justify-center text-sm font-bold text-purple-600">5</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 text-center">Meta Ads</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Targeted Facebook and Instagram ad campaigns with data-driven optimization for maximum ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Brands We Work With
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering Jaipur's best brands to tell their story and grow online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* F&B & Restaurants */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c1.1 0 2 .9 2 2 0 2.3-1.5 4.3-3.7 4.9-.3 1.4 1 2.5 1 5.6 0 2.8-1.8 5-4.8 5-1.3-.2-2.5-.9-3.3-2H0V4c0-1.1.9-2 2-2h10zm9 9c.6 0 1 .4 1 1v10h3v2h-3v3h-2v-3h-3v-2h3v-10c0-.6.4-1 1-1h3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">F&B & Restaurants</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Showcase your culinary creations with mouth-watering content and drive footfall with targeted ads.
              </p>
            </div>
            
            {/* Fashion & Retail */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-1">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Fashion & Retail</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Create stunning visual content that makes your collections stand out and drive online sales.
              </p>
            </div>
            
            {/* Health & Wellness */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-2">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Health & Wellness</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Build trust and educate your audience with authentic wellness content and targeted promotions.
              </p>
            </div>
            
            {/* Professional Services */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-3">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Professional Services</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Establish authority and generate qualified leads through strategic content and professional branding.
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

      {/* Social Media Showcase Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Content That Converts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality content paired with strategic ads that drive real business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Social Media Content */}
            <div className="bg-white p-8 rounded-2xl shadow-xl scroll-animate">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.05v2.71h1.38v-2.71h2.05l-2.73-3.54zM9 9h6v2H9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Professional Content</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    Instagram, Facebook & More
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">Your Brand Story</p>
                <p className="text-gray-700 mb-4">
                  From short-form Reels to long-form storytelling, we create content that resonates with your audience and keeps them coming back.
                </p>
                <p className="text-xs text-gray-500 italic">Created with professional equipment and expert editing</p>
              </div>
            </div>
            
            {/* Meta Ads & Performance */}
            <div className="bg-white p-8 rounded-2xl shadow-xl scroll-animate scroll-animate-delay-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-yellow-500 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-1h2v19h-2zm4 4h2v15h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Meta Ads Campaign</h3>
                  <p className="text-sm text-gray-600">Data-Driven Results</p>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-200">
                <div className="bg-gradient-to-br from-purple-50 to-yellow-50 p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Campaign Performance</span>
                    <span className="text-green-600 font-bold text-lg">↑ 240%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Impressions</span>
                      <span className="font-semibold text-gray-900">1.2M</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-gray-300">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conversions</span>
                      <span className="font-semibold text-gray-900">342</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-yellow-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
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
