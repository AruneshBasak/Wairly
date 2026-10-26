import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-wairly-50 to-wairly-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-20 rounded-full animate-float"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 animate-fade-in-up">
            Get Started Today
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to transform your wardrobe? Join thousands of users who've revolutionized their style with Wairly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden group animate-fade-in-up">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-2 h-full">
                {[...Array(32)].map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-wairly-400 rounded animate-pulse" 
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-8 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white animate-pulse-slow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 group-hover:text-wairly-600 transition-colors duration-300">Contact Us</h3>
                <p className="text-charcoal-600">We'd love to hear from you</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 relative z-10 animate-scale-in">
                <div className="w-16 h-16 bg-gradient-to-br from-wairly-400 to-wairly-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900 mb-2">Thank you!</h4>
                <p className="text-charcoal-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="animate-fade-in-up">
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-wairly-300 rounded-xl focus:ring-2 focus:ring-wairly-500 focus:border-transparent transition-all duration-200 hover:border-wairly-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-wairly-300 rounded-xl focus:ring-2 focus:ring-wairly-500 focus:border-transparent transition-all duration-200 hover:border-wairly-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-wairly-300 rounded-xl focus:ring-2 focus:ring-wairly-500 focus:border-transparent transition-all duration-200 hover:border-wairly-400"
                    placeholder="Tell us about your style goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-charcoal-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-wairly-600 hover:text-charcoal-900 disabled:bg-charcoal-400 transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl relative overflow-hidden group/btn animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                  {/* Button shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            )}
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-8">
            {/* Get Started Card */}
            <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 gap-2 h-full">
                  {[...Array(24)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-wairly-400 rounded animate-pulse" 
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '4s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white animate-pulse-slow" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Start Your Style Journey</h3>
                  <p className="text-wairly-300">It's free to get started</p>
                </div>
              </div>
              
              <p className="text-wairly-300 mb-6 leading-relaxed relative z-10">
                Join over 50,000 users who've transformed their style with Wairly. 
                Start with our free plan and upgrade when you're ready.
              </p>
              
              <button className="w-full bg-white text-charcoal-900 py-4 px-6 rounded-xl font-semibold hover:bg-wairly-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group/btn">
                <span className="relative z-10">Try Wairly Free</span>
                {/* Button shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-wairly-200/50 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Features Highlight */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-wairly-50 to-charcoal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h4 className="text-xl font-bold text-charcoal-900 mb-6 relative z-10 group-hover:text-wairly-600 transition-colors duration-300">
                What You'll Get
              </h4>
              <div className="space-y-4 relative z-10">
                {[
                  'AI-powered outfit suggestions',
                  'Smart wardrobe organization',
                  'Personalized style recommendations',
                  'Mobile app access'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group/item">
                    <div className="w-6 h-6 bg-gradient-to-br from-wairly-400 to-wairly-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-charcoal-700 group-hover/item:text-charcoal-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;