import React, { useEffect, useState } from 'react';
import { DoorClosed as Closet, Brain, Palette, Calendar, Smartphone, Shield } from 'lucide-react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureIndex = parseInt(entry.target.getAttribute('data-feature') || '0');
            setVisibleFeatures(prev => [...prev, featureIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = document.querySelectorAll('[data-feature]');
    featureElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Closet,
      title: 'Virtual Closet',
      description: 'Digitize your entire wardrobe with smart categorization and visual organization.',
      color: 'from-wairly-400 to-wairly-600',
      bgGradient: 'from-wairly-50 to-wairly-100',
    },
    {
      icon: Brain,
      title: 'Smart Outfit Suggestions',
      description: 'AI-powered recommendations based on your style, weather, and schedule.',
      color: 'from-charcoal-400 to-charcoal-600',
      bgGradient: 'from-charcoal-50 to-charcoal-100',
    },
    {
      icon: Palette,
      title: 'Mood-based Styling',
      description: 'Express yourself with outfits that match your mood and personality.',
      color: 'from-wairly-500 to-charcoal-500',
      bgGradient: 'from-wairly-50 to-charcoal-50',
    },
    {
      icon: Calendar,
      title: 'Occasion Picker',
      description: 'Perfect outfits for work, dates, parties, and every moment in between.',
      color: 'from-wairly-600 to-wairly-700',
      bgGradient: 'from-wairly-100 to-wairly-200',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Access your wardrobe and get styled anywhere with our mobile app.',
      color: 'from-charcoal-500 to-charcoal-700',
      bgGradient: 'from-charcoal-100 to-charcoal-200',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your style data is encrypted and secure. Your fashion choices stay private.',
      color: 'from-wairly-700 to-charcoal-700',
      bgGradient: 'from-wairly-200 to-charcoal-200',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-wairly-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-10 rounded-full transform -translate-x-32 animate-float"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-10 rounded-full transform translate-x-24 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 animate-fade-in-up">
            Powerful Features
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Everything you need to revolutionize your style and organize your wardrobe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature={index}
              className={`group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${
                visibleFeatures.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              {/* Animated icon container */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white animate-pulse-slow" />
                
                {/* Icon glow effect */}
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float"
                      style={{
                        top: `${20 + Math.sin(i * 90 * Math.PI / 180) * 30}%`,
                        left: `${50 + Math.cos(i * 90 * Math.PI / 180) * 30}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '4s',
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-charcoal-900 mb-4 group-hover:text-wairly-600 transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed relative z-10 group-hover:text-charcoal-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-charcoal-800 to-charcoal-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-wairly-400 rounded animate-pulse" 
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-bold mb-6 animate-fade-in-up">
                AI That Understands Your Style
              </h3>
              <p className="text-wairly-200 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our advanced machine learning algorithms analyze millions of fashion combinations to understand what works best for your unique style, body type, and lifestyle.
              </p>
              <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { value: '95%', label: 'Accuracy' },
                  { value: '10K+', label: 'Style Patterns' },
                  { value: '24/7', label: 'Available' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl font-bold text-wairly-300 group-hover:text-wairly-200 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-wairly-400 group-hover:text-wairly-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-full h-24 bg-gradient-to-br from-wairly-600 to-wairly-700 rounded-xl animate-pulse shadow-lg relative overflow-hidden"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-wairly-400 to-wairly-500 rounded-lg opacity-50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  </div>
                ))}
              </div>
              {/* Animated shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;