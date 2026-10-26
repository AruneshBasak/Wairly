import React, { useEffect, useState } from 'react';
import { Heart, Share2, Bookmark, Eye } from 'lucide-react';

const StyleFeed = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElements = document.querySelectorAll('[data-card]');
    cardElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const styleCards = [
    {
      id: 1,
      title: 'Casual Friday Vibes',
      category: 'Work',
      likes: 234,
      views: 1240,
      gradient: 'from-wairly-400 to-wairly-600',
    },
    {
      id: 2,
      title: 'Weekend Brunch Look',
      category: 'Casual',
      likes: 189,
      views: 890,
      gradient: 'from-charcoal-400 to-charcoal-600',
    },
    {
      id: 3,
      title: 'Date Night Elegant',
      category: 'Evening',
      likes: 456,
      views: 2100,
      gradient: 'from-wairly-500 to-charcoal-500',
    },
    {
      id: 4,
      title: 'Business Professional',
      category: 'Work',
      likes: 312,
      views: 1560,
      gradient: 'from-charcoal-500 to-charcoal-700',
    },
    {
      id: 5,
      title: 'Summer Festival Style',
      category: 'Event',
      likes: 567,
      views: 3200,
      gradient: 'from-wairly-600 to-wairly-800',
    },
    {
      id: 6,
      title: 'Cozy Winter Layers',
      category: 'Casual',
      likes: 298,
      views: 1780,
      gradient: 'from-wairly-300 to-charcoal-400',
    },
  ];

  return (
    <section id="style-feed" className="py-20 bg-gradient-to-br from-wairly-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-10 rounded-full animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 animate-fade-in-up">
            Style Feed & Inspiration
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover trending outfits and get inspired by our AI-curated fashion feed
          </p>
        </div>

        {/* Enhanced Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {styleCards.map((card, index) => (
            <div
              key={card.id}
              data-card={index}
              className={`group relative bg-gradient-to-br ${card.gradient} rounded-2xl aspect-[4/5] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Animated pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 gap-1 h-full">
                  {[...Array(32)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded animate-pulse" 
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '4s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between relative z-10">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="glass text-white px-3 py-1 rounded-full text-sm font-medium animate-slide-down">
                    {card.category}
                  </span>
                  <button className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 animate-slide-down" style={{ animationDelay: '0.1s' }}>
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Title and Stats */}
                <div className="text-white animate-slide-up">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-wairly-200 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 group-hover:text-red-300 transition-colors duration-300">
                        <Heart className="w-4 h-4 animate-pulse" />
                        <span>{card.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 group-hover:text-blue-300 transition-colors duration-300">
                        <Eye className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <span>{card.views}</span>
                      </div>
                    </div>
                    <button className="hover:scale-110 transition-transform duration-300 hover:text-wairly-200">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Personalization Demo */}
        <div className="bg-gradient-to-br from-wairly-100 to-charcoal-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-10 gap-2 h-full">
              {[...Array(50)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-charcoal-400 rounded animate-pulse" 
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8 relative z-10">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-2 animate-fade-in-up">
              Personalized Just for You
            </h3>
            <p className="text-charcoal-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our AI learns your preferences and curates a feed that matches your unique style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: Heart,
                title: 'Style Matching',
                description: 'AI analyzes your preferences to show similar styles',
                color: 'from-wairly-500 to-wairly-600',
                delay: '0s'
              },
              {
                icon: Eye,
                title: 'Trend Prediction',
                description: 'Stay ahead with AI-predicted fashion trends',
                color: 'from-charcoal-500 to-charcoal-600',
                delay: '0.2s'
              },
              {
                icon: Share2,
                title: 'Social Styling',
                description: 'Share and get inspired by the community',
                color: 'from-wairly-600 to-charcoal-600',
                delay: '0.4s'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: item.delay }}>
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <item.icon className="w-8 h-8 text-white animate-pulse-slow" />
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h4 className="font-bold text-charcoal-900 mb-2 group-hover:text-wairly-600 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-charcoal-600 text-sm group-hover:text-charcoal-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleFeed;