import React, { useEffect, useState } from 'react';
import { ChevronDown, Shirt, Heart, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const floatingElements = [
    { icon: Shirt, delay: '0s', x: '10%', y: '20%', size: 'w-8 h-8' },
    { icon: Heart, delay: '0.5s', x: '85%', y: '30%', size: 'w-6 h-6' },
    { icon: Star, delay: '1s', x: '15%', y: '70%', size: 'w-7 h-7' },
    { icon: Sparkles, delay: '1.5s', x: '80%', y: '65%', size: 'w-5 h-5' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-wairly-50 via-wairly-100 to-wairly-200 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle bg-wairly-300 opacity-20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: (Math.random() * 4 + 4) + 's',
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay,
            animationDuration: '4s',
          }}
        >
          <element.icon className={`${element.size} text-wairly-400 opacity-40 animate-pulse-slow`} />
        </div>
      ))}

      {/* Morphing Background Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-wairly-300 to-wairly-400 opacity-20 animate-morph"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-charcoal-300 to-charcoal-400 opacity-10 animate-morph" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 relative z-10">
        <div className="text-center">
          {/* Animated Logo */}
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-wairly-200 to-wairly-300 rounded-3xl shadow-2xl mb-6 relative overflow-hidden group">
              {/* Main Hanger SVG */}
              <svg viewBox="0 0 120 120" className="w-20 h-20 animate-hanger">
                {/* Hanger hook */}
                <path
                  d="M55 20 Q55 15, 60 15 Q65 15, 65 20 Q65 25, 60 25"
                  stroke="#3d3d3d"
                  strokeWidth="4"
                  fill="none"
                  className="animate-pulse-slow"
                />
                {/* Hanger body */}
                <path
                  d="M25 45 Q60 35, 95 45 Q100 50, 95 55 L25 55 Q20 50, 25 45"
                  stroke="#3d3d3d"
                  strokeWidth="4"
                  fill="none"
                />
                {/* AI circuit nodes */}
                <g className="animate-circuit">
                  <circle cx="75" cy="35" r="3" fill="#a69580" className="animate-pulse" />
                  <circle cx="85" cy="40" r="2" fill="#a69580" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="80" cy="50" r="2" fill="#a69580" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <path d="M75 35 L85 40 L80 50" stroke="#a69580" strokeWidth="2" fill="none" className="animate-pulse" />
                </g>
                {/* Flowing fabric with enhanced animation */}
                <path
                  d="M35 55 Q40 70, 30 85 Q35 100, 45 85 Q50 70, 55 85"
                  stroke="#3d3d3d"
                  strokeWidth="3"
                  fill="none"
                  className="animate-float"
                />
                <path
                  d="M65 55 Q70 70, 65 85 Q70 100, 80 85 Q85 70, 90 85"
                  stroke="#3d3d3d"
                  strokeWidth="3"
                  fill="none"
                  className="animate-float"
                  style={{ animationDelay: '0.7s' }}
                />
              </svg>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-wairly-400 to-wairly-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-glow"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Heading with enhanced typography */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 mb-6 leading-tight transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Your AI Wardrobe
            <br />
            <span className="gradient-text animate-pulse-slow">
              Assistant
            </span>
          </h1>

          {/* Subtitle with typewriter effect */}
          <p className={`text-xl md:text-2xl text-charcoal-600 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Revolutionize your style with AI-powered outfit suggestions, smart closet organization, and personalized fashion recommendations.
          </p>

          {/* Enhanced CTA Button */}
          <div className={`mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="group relative bg-charcoal-900 text-wairly-50 px-10 py-4 rounded-full text-lg font-semibold hover:bg-wairly-600 hover:text-charcoal-900 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Try Wairly Free</span>
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              {/* Button glow */}
              <div className="absolute inset-0 bg-wairly-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>

          {/* Enhanced Stats with animations */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { number: '50K+', label: 'Happy Users', delay: '0s' },
              { number: '1M+', label: 'Outfits Created', delay: '0.2s' },
              { number: '98%', label: 'Satisfaction Rate', delay: '0.4s' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-2 group-hover:text-wairly-600 transition-colors duration-300 animate-scale-in"
                  style={{ animationDelay: stat.delay }}
                >
                  {stat.number}
                </div>
                <div className="text-charcoal-600 group-hover:text-charcoal-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown className="w-8 h-8 text-wairly-500 animate-pulse" />
          <div className="w-1 h-8 bg-gradient-to-b from-wairly-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;