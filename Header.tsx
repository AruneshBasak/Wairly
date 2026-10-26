import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Style Feed', href: '#style-feed' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Exact recreation */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Hanger hook */}
                  <path
                    d="M45 15 Q45 10, 50 10 Q55 10, 55 15 Q55 20, 50 20"
                    stroke="#3d3d3d"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse-slow"
                  />
                  {/* Hanger body */}
                  <path
                    d="M20 35 Q50 25, 80 35 Q85 40, 80 45 L20 45 Q15 40, 20 35"
                    stroke="#3d3d3d"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* AI circuit lines - exact match */}
                  <g className="animate-circuit">
                    <circle cx="65" cy="25" r="2" fill="#a69580" />
                    <circle cx="75" cy="30" r="1.5" fill="#a69580" />
                    <circle cx="70" cy="35" r="1" fill="#a69580" />
                    <path d="M65 25 L75 30 L70 35" stroke="#a69580" strokeWidth="1" fill="none" />
                  </g>
                  {/* Flowing fabric - exact match */}
                  <path
                    d="M30 45 Q35 55, 25 65 Q30 75, 35 65 Q40 55, 45 65"
                    stroke="#3d3d3d"
                    strokeWidth="2"
                    fill="none"
                    className="animate-float"
                  />
                  <path
                    d="M55 45 Q60 55, 55 65 Q60 75, 65 65 Q70 55, 75 65"
                    stroke="#3d3d3d"
                    strokeWidth="2"
                    fill="none"
                    className="animate-float"
                    style={{ animationDelay: '0.5s' }}
                  />
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-wairly-400 rounded-full opacity-20 animate-glow"></div>
            </div>
            <span className="text-2xl font-bold text-charcoal-900 group-hover:text-wairly-600 transition-colors duration-300">
              Wairly
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal-700 hover:text-wairly-600 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wairly-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-charcoal-900 text-wairly-50 px-6 py-2 rounded-full hover:bg-wairly-600 hover:text-charcoal-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Try Wairly
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-charcoal-700 hover:text-wairly-600 hover:bg-wairly-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-wairly-200 animate-slide-down">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-charcoal-700 hover:text-wairly-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-charcoal-900 text-wairly-50 px-6 py-3 rounded-full hover:bg-wairly-600 hover:text-charcoal-900 transition-all duration-200 mt-4">
                  Try Wairly
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;