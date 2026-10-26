import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Style Feed', href: '#style-feed' },
      { name: 'Mobile App', href: '#' },
      { name: 'API Access', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partnerships', href: '#' },
      { name: 'Investors', href: '#' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Bug Reports', href: '#' },
      { name: 'Feature Requests', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  return (
    <footer className="bg-charcoal-900 text-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1 h-full">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="bg-wairly-400 rounded animate-pulse" 
              style={{ 
                animationDelay: `${i * 0.02}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              {/* Exact logo recreation */}
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Hanger hook */}
                  <path
                    d="M45 15 Q45 10, 50 10 Q55 10, 55 15 Q55 20, 50 20"
                    stroke="#f5f3f0"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse-slow"
                  />
                  {/* Hanger body */}
                  <path
                    d="M20 35 Q50 25, 80 35 Q85 40, 80 45 L20 45 Q15 40, 20 35"
                    stroke="#f5f3f0"
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
                    stroke="#f5f3f0"
                    strokeWidth="2"
                    fill="none"
                    className="animate-float"
                  />
                  <path
                    d="M55 45 Q60 55, 55 65 Q60 75, 65 65 Q70 55, 75 65"
                    stroke="#f5f3f0"
                    strokeWidth="2"
                    fill="none"
                    className="animate-float"
                    style={{ animationDelay: '0.5s' }}
                  />
                </svg>
              </div>
              <span className="text-3xl font-bold group-hover:text-wairly-300 transition-colors duration-300">Wairly</span>
            </div>
            <p className="text-wairly-400 mb-6 leading-relaxed text-lg">
              Revolutionizing personal style with AI-powered wardrobe management and outfit suggestions. 
              Join thousands who've transformed their fashion journey with intelligent styling.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-wairly-400 hover:text-wairly-300 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-wairly-400 hover:text-wairly-300 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-wairly-400 hover:text-wairly-300 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@wairly.com</span>
              </div>
            </div>
            
            {/* Enhanced social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-charcoal-800 rounded-xl flex items-center justify-center hover:bg-wairly-600 hover:text-charcoal-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl group relative overflow-hidden"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6 text-wairly-200">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-wairly-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wairly-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Newsletter */}
        <div className="border-t border-charcoal-800 pt-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-3 text-wairly-200">Stay in Style</h4>
              <p className="text-wairly-400 text-lg leading-relaxed">
                Get the latest fashion insights, styling tips, and product updates delivered to your inbox. 
                Join our community of style enthusiasts and never miss a trend.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-4 bg-charcoal-800 border border-charcoal-700 rounded-xl focus:ring-2 focus:ring-wairly-500 focus:border-transparent transition-all duration-200 text-white placeholder-wairly-400"
                />
                <button className="bg-wairly-600 hover:bg-wairly-500 text-charcoal-900 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 font-semibold relative overflow-hidden group">
                  <Mail className="w-5 h-5" />
                  <span>Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
              <p className="text-xs text-wairly-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-wairly-400 text-sm">
            <p className="hover:text-wairly-300 transition-colors duration-300">
              © 2024 Wairly. All rights reserved. Made with ❤️ for fashion enthusiasts worldwide.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-wairly-500">Powered by AI</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-wairly-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;