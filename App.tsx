import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import StyleFeed from './sections/StyleFeed';
import Pricing from './sections/Pricing';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-wairly-50 to-wairly-100 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          {/* Enhanced loading spinner with exact logo */}
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-wairly-300 border-t-charcoal-900 rounded-full animate-spin"></div>
            {/* Exact logo in center */}
            <div className="absolute inset-2 flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <path
                  d="M18 6 Q18 4, 20 4 Q22 4, 22 6 Q22 8, 20 8"
                  stroke="#3d3d3d"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M8 14 Q20 10, 32 14 Q34 16, 32 18 L8 18 Q6 16, 8 14"
                  stroke="#3d3d3d"
                  strokeWidth="1.5"
                  fill="none"
                />
                <g className="animate-circuit">
                  <circle cx="26" cy="10" r="1" fill="#a69580" />
                  <circle cx="30" cy="12" r="0.75" fill="#a69580" />
                  <circle cx="28" cy="14" r="0.5" fill="#a69580" />
                  <path d="M26 10 L30 12 L28 14" stroke="#a69580" strokeWidth="0.5" fill="none" />
                </g>
                <path
                  d="M12 18 Q14 22, 10 26 Q12 30, 14 26 Q16 22, 18 26"
                  stroke="#3d3d3d"
                  strokeWidth="1"
                  fill="none"
                  className="animate-float"
                />
                <path
                  d="M22 18 Q24 22, 22 26 Q24 30, 26 26 Q28 22, 30 26"
                  stroke="#3d3d3d"
                  strokeWidth="1"
                  fill="none"
                  className="animate-float"
                  style={{ animationDelay: '0.3s' }}
                />
              </svg>
            </div>
          </div>
          <p className="text-charcoal-700 font-medium animate-pulse">Loading Wairly...</p>
          {/* Loading dots */}
          <div className="flex space-x-1 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-wairly-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wairly-50">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <StyleFeed />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;