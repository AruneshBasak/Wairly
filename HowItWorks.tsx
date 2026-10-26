import React, { useEffect, useState } from 'react';
import { Upload, Brain, Sparkles, Shirt, ArrowRight, Zap, Target } from 'lucide-react';

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Wardrobe',
      description: 'Simply snap photos of your clothes or connect your shopping accounts. Our advanced AI instantly recognizes, categorizes, and organizes every piece in your collection.',
      color: 'from-wairly-400 to-wairly-600',
      bgColor: 'bg-gradient-to-br from-wairly-50 to-wairly-100',
      features: ['Photo recognition', 'Auto-categorization', 'Color analysis', 'Brand detection'],
    },
    {
      icon: Brain,
      title: 'AI Analysis & Learning',
      description: 'Our machine learning algorithms analyze colors, patterns, styles, fit, and your personal preferences to build a comprehensive understanding of your unique fashion DNA.',
      color: 'from-charcoal-400 to-charcoal-600',
      bgColor: 'bg-gradient-to-br from-charcoal-50 to-charcoal-100',
      features: ['Style profiling', 'Preference learning', 'Trend analysis', 'Fit optimization'],
    },
    {
      icon: Sparkles,
      title: 'Personalized Styling',
      description: 'Receive curated outfit recommendations tailored to your style, the weather, your schedule, and the occasion. Every suggestion is uniquely yours.',
      color: 'from-wairly-500 to-charcoal-500',
      bgColor: 'bg-gradient-to-br from-wairly-50 to-charcoal-50',
      features: ['Weather integration', 'Occasion matching', 'Mood styling', 'Calendar sync'],
    },
  ];

  const demoSteps = [
    { title: 'Uploading...', progress: 100, color: 'bg-wairly-500' },
    { title: 'Analyzing...', progress: 100, color: 'bg-charcoal-500' },
    { title: 'Styling...', progress: 100, color: 'bg-gradient-to-r from-wairly-500 to-charcoal-500' },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-wairly-50 to-white relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-20 rounded-full transform translate-x-48 -translate-y-48 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-15 rounded-full transform -translate-x-36 translate-y-36 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-wairly-100 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4 text-wairly-600" />
            <span className="text-sm font-medium text-wairly-700">Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6 animate-fade-in-up">
            How Wairly
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wairly-600 to-charcoal-600">
              Transforms Your Style
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the future of personal styling with our revolutionary AI technology that learns, adapts, and evolves with your unique fashion preferences.
          </p>
        </div>

        {/* Enhanced steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className={`relative transform transition-all duration-1000 group ${
                visibleSteps.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-12 h-1 bg-gradient-to-r from-wairly-300 to-wairly-400 transform translate-x-0 z-0 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                  <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-wairly-500 animate-pulse" />
                </div>
              )}

              {/* Enhanced card */}
              <div className={`${step.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-white/50`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-6 gap-2 h-full">
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-charcoal-400 rounded animate-pulse" 
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '4s'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Icon container */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white animate-pulse-slow" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4 group-hover:text-wairly-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-wairly-400 to-charcoal-400 rounded-full animate-pulse"></div>
                        <span className="text-charcoal-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fixed step number positioning */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                  <div className="absolute inset-0 rounded-full bg-wairly-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced interactive demo */}
        <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
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
          
          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-wairly-300" />
              <span className="text-sm font-medium text-wairly-300">Live Demo</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Watch AI in Action
            </h3>
            <p className="text-wairly-300 max-w-2xl mx-auto">
              See how our AI processes your wardrobe and creates personalized styling recommendations in real-time
            </p>
          </div>

          {/* Interactive demo visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Input visualization */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Your Wardrobe</h4>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-wairly-200 to-wairly-400 rounded-xl shadow-lg animate-pulse relative overflow-hidden"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Shirt className="w-8 h-8 text-charcoal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* AI Processing */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">AI Processing</h4>
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-charcoal-600 to-charcoal-700 rounded-full flex items-center justify-center shadow-xl relative overflow-hidden">
                <Brain className="w-12 h-12 text-wairly-400 animate-pulse" />
                {/* Neural network visualization */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-wairly-400 opacity-30 animate-pulse"
                      style={{
                        top: `${15 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                {/* Progress indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-xs text-wairly-300 mb-1">{demoSteps[activeDemo].title}</div>
                  <div className="w-16 h-1 bg-charcoal-500 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${demoSteps[activeDemo].color} transition-all duration-1000 rounded-full`}
                      style={{ width: `${demoSteps[activeDemo].progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Output visualization */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Perfect Outfit</h4>
              <div className="bg-gradient-to-br from-wairly-500 to-charcoal-500 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <Sparkles className="w-16 h-16 text-white mx-auto mb-4 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="text-white text-sm">
                  <div className="mb-2">✨ Perfect color match</div>
                  <div className="mb-2">🌤️ Weather appropriate</div>
                  <div className="mb-2">👔 Occasion ready</div>
                  <div>💫 Style confidence: 98%</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative z-10">
            {[
              { value: '< 3s', label: 'Processing Time' },
              { value: '95%', label: 'Accuracy Rate' },
              { value: '1M+', label: 'Style Combinations' },
              { value: '24/7', label: 'Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl font-bold text-wairly-300 group-hover:text-wairly-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-wairly-400 text-sm group-hover:text-wairly-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;