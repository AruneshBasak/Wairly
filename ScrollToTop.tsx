import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-charcoal-900 text-white rounded-full shadow-lg hover:bg-wairly-600 hover:text-charcoal-900 transition-all duration-300 transform hover:scale-110 z-50 group relative overflow-hidden"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 mx-auto animate-bounce" />
          {/* Button glow */}
          <div className="absolute inset-0 bg-wairly-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;