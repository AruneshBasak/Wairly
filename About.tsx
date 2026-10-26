import React from 'react';
import { Users, Target, Lightbulb, Heart, Award, Globe, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of AI and fashion technology to create revolutionary experiences that transform how people interact with their wardrobes.',
      color: 'from-wairly-400 to-wairly-600',
    },
    {
      icon: Heart,
      title: 'Personal Expression',
      description: 'Everyone deserves to feel confident and express their unique style with ease. We believe fashion is a powerful form of self-expression.',
      color: 'from-charcoal-400 to-charcoal-600',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We build with and for our community, listening to feedback and evolving together to create the best possible styling experience.',
      color: 'from-wairly-500 to-charcoal-500',
    },
    {
      icon: Lightbulb,
      title: 'Sustainability',
      description: 'We promote mindful fashion choices and help reduce waste through smart styling that maximizes your existing wardrobe.',
      color: 'from-wairly-600 to-wairly-700',
    },
  ];

  const achievements = [
    { icon: Users, value: '50K+', label: 'Active Users', color: 'text-wairly-600' },
    { icon: Globe, value: '25+', label: 'Countries', color: 'text-charcoal-600' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate', color: 'text-wairly-600' },
    { icon: TrendingUp, value: '1M+', label: 'Outfits Created', color: 'text-charcoal-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-wairly-50 to-white relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced hero section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-wairly-100 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Zap className="w-4 h-4 text-wairly-600" />
            <span className="text-sm font-medium text-wairly-700">Our Story & Mission</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6 animate-fade-in-up">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wairly-600 to-charcoal-600">
              Wairly
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We're on a mission to democratize personal styling through artificial intelligence. 
            Founded in 2023, Wairly combines cutting-edge AI technology with deep fashion expertise 
            to help everyone look and feel their best, every single day.
          </p>
        </div>

        {/* Enhanced story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-charcoal-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-charcoal-600" />
              <span className="text-sm font-medium text-charcoal-700">Our Journey</span>
            </div>
            <h3 className="text-4xl font-bold text-charcoal-900 mb-8">
              From Frustration to Innovation
            </h3>
            <div className="space-y-6 text-charcoal-600 leading-relaxed">
              <p className="text-lg">
                The idea for Wairly was born from a universal frustration: standing in front of a full closet 
                with "nothing to wear." Our founder, <strong className="text-charcoal-800">Arunesh Basak</strong>, 
                experienced this daily struggle and realized that technology could solve this age-old problem.
              </p>
              <p>
                What started as a personal project quickly evolved into a revolutionary platform that combines 
                artificial intelligence with fashion expertise. We discovered that the challenge wasn't about 
                having enough clothes—it was about making smart, confident choices with what you already own.
              </p>
              <p>
                Today, we're proud to help thousands of people discover their personal style, organize their 
                wardrobes efficiently, and feel confident in their daily outfit choices. Our AI doesn't just 
                suggest clothes—it understands style, personality, lifestyle, and the subtle nuances that make 
                each person's fashion journey unique.
              </p>
              <p className="text-lg font-medium text-charcoal-800">
                We believe that everyone deserves to feel stylish and confident, regardless of their fashion 
                background, budget, or time constraints. That's why we're building the most accessible and 
                intelligent styling platform in the world.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-40 bg-gradient-to-br from-wairly-200 to-wairly-400 rounded-3xl shadow-lg animate-float relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-32 bg-gradient-to-br from-wairly-300 to-wairly-500 rounded-3xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-32 bg-gradient-to-br from-charcoal-300 to-charcoal-500 rounded-3xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
                <div className="h-40 bg-gradient-to-br from-charcoal-400 to-charcoal-600 rounded-3xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
            {/* Central floating element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-wairly-500 to-charcoal-500 rounded-full shadow-xl animate-pulse flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-white animate-pulse-slow" />
            </div>
          </div>
        </div>

        {/* Enhanced values section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-charcoal-900 mb-6 animate-fade-in-up">
              Our Core Values
            </h3>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              These principles guide everything we do, from product development to customer relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  <value.icon className="w-10 h-10 text-white animate-pulse-slow" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h4 className="text-xl font-bold text-charcoal-900 mb-4 group-hover:text-wairly-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced team section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-charcoal-900 mb-6 animate-fade-in-up">
              Meet Our Founder
            </h3>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The visionary behind Wairly's revolutionary AI styling platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {[...Array(32)].map((_, i) => (
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
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                {/* Profile image placeholder */}
                <div className="text-center lg:text-left">
                  <div className="w-48 h-48 bg-gradient-to-br from-wairly-400 to-charcoal-500 rounded-full mx-auto lg:mx-0 mb-6 shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {/* Avatar pattern */}
                    <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-white/40 rounded-full"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-wairly-300 to-charcoal-400 rounded-full"></div>
                    {/* Initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">AB</span>
                    </div>
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h4 className="text-3xl font-bold text-charcoal-900 mb-2 group-hover:text-wairly-600 transition-colors duration-300">
                    Arunesh Basak
                  </h4>
                  <p className="text-xl text-wairly-600 font-medium mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-charcoal-600 leading-relaxed mb-6">
                    Arunesh is a visionary entrepreneur with a passion for combining technology and fashion. 
                    With a background in AI and machine learning, he recognized the potential to revolutionize 
                    personal styling through intelligent algorithms. His vision for Wairly stems from a belief 
                    that everyone deserves to feel confident and stylish, regardless of their fashion expertise.
                  </p>
                  
                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-wairly-50 rounded-xl p-4 group-hover:bg-wairly-100 transition-colors duration-300">
                      <div className="text-2xl font-bold text-wairly-600 mb-1">5+</div>
                      <div className="text-sm text-charcoal-600">Years in AI</div>
                    </div>
                    <div className="bg-charcoal-50 rounded-xl p-4 group-hover:bg-charcoal-100 transition-colors duration-300">
                      <div className="text-2xl font-bold text-charcoal-600 mb-1">50K+</div>
                      <div className="text-sm text-charcoal-600">Users Helped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced achievements section */}
        <div className="bg-gradient-to-r from-charcoal-800 to-charcoal-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-2 h-full">
              {[...Array(60)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-wairly-400 rounded animate-pulse" 
                  style={{ 
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '4s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-4xl font-bold mb-4 animate-fade-in-up">
              Our Impact in Numbers
            </h3>
            <p className="text-wairly-300 text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We're proud of the community we've built and the positive impact we've made on people's daily lives
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <achievement.icon className={`w-8 h-8 ${achievement.color} group-hover:animate-pulse`} />
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold mb-2 text-wairly-300 group-hover:text-wairly-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform duration-300">
                  {achievement.value}
                </div>
                <div className="text-wairly-400 group-hover:text-wairly-300 transition-colors duration-300">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 relative z-10">
            <p className="text-wairly-300 mb-6 text-lg">
              Join thousands of users who've already transformed their style journey
            </p>
            <button className="bg-white text-charcoal-900 px-8 py-4 rounded-xl font-semibold hover:bg-wairly-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Start Your Style Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-wairly-200/50 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;