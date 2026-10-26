import React, { useState } from 'react';
import { Check, Sparkles, Crown, Star, Zap, Gift, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started with AI styling',
      features: [
        'Basic outfit suggestions',
        'Upload up to 50 items',
        'Weather-based recommendations',
        'Mobile app access',
        'Basic color matching',
        'Community style feed access',
      ],
      color: 'from-wairly-400 to-wairly-500',
      buttonStyle: 'bg-wairly-100 text-wairly-800 hover:bg-wairly-200 border-2 border-wairly-300',
      borderColor: 'border-wairly-200',
      badge: null,
    },
    {
      name: 'Premium',
      icon: Crown,
      price: { monthly: 19, yearly: 199 },
      description: 'Advanced AI styling for fashion enthusiasts',
      features: [
        'Unlimited outfit suggestions',
        'Unlimited wardrobe items',
        'Occasion-specific styling',
        'Mood-based recommendations',
        'Style analytics & insights',
        'Priority customer support',
        'Advanced color & pattern matching',
        'Calendar integration',
        'Shopping recommendations',
        'Style trend alerts',
      ],
      color: 'from-charcoal-500 to-charcoal-600',
      buttonStyle: 'bg-charcoal-600 text-white hover:bg-charcoal-700 shadow-lg hover:shadow-xl',
      borderColor: 'border-charcoal-300',
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Pro',
      icon: Star,
      price: { monthly: 39, yearly: 399 },
      description: 'Professional styling with premium features',
      features: [
        'Everything in Premium',
        'Personal stylist consultation (monthly)',
        'Custom style profile creation',
        'Brand partnership discounts',
        'API access for developers',
        'Style trend predictions',
        'Exclusive fashion content',
        'White-label solutions',
        'Advanced analytics dashboard',
        'Priority feature requests',
        'Custom integrations',
      ],
      color: 'from-wairly-600 to-charcoal-600',
      buttonStyle: 'bg-gradient-to-r from-wairly-600 to-charcoal-600 text-white hover:from-wairly-700 hover:to-charcoal-700 shadow-lg hover:shadow-xl',
      borderColor: 'border-wairly-300',
      badge: 'Enterprise',
    },
  ];

  const features = [
    {
      category: 'AI Styling',
      items: [
        { name: 'Basic outfit suggestions', free: true, premium: true, pro: true },
        { name: 'Advanced AI recommendations', free: false, premium: true, pro: true },
        { name: 'Mood-based styling', free: false, premium: true, pro: true },
        { name: 'Occasion-specific outfits', free: false, premium: true, pro: true },
        { name: 'Personal stylist consultation', free: false, premium: false, pro: true },
      ]
    },
    {
      category: 'Wardrobe Management',
      items: [
        { name: 'Items limit', free: '50 items', premium: 'Unlimited', pro: 'Unlimited' },
        { name: 'Photo recognition', free: true, premium: true, pro: true },
        { name: 'Auto-categorization', free: true, premium: true, pro: true },
        { name: 'Advanced analytics', free: false, premium: true, pro: true },
        { name: 'Custom tags & notes', free: false, premium: true, pro: true },
      ]
    },
    {
      category: 'Integrations',
      items: [
        { name: 'Weather integration', free: true, premium: true, pro: true },
        { name: 'Calendar sync', free: false, premium: true, pro: true },
        { name: 'Shopping platforms', free: false, premium: true, pro: true },
        { name: 'API access', free: false, premium: false, pro: true },
        { name: 'Custom integrations', free: false, premium: false, pro: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white to-wairly-50 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-wairly-200 to-wairly-300 opacity-10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-charcoal-200 to-charcoal-300 opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-wairly-100 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-wairly-600" />
            <span className="text-sm font-medium text-wairly-700">Flexible Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal-900 mb-6 animate-fade-in-up">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wairly-600 to-charcoal-600">
              Style Journey
            </span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Start free and upgrade as your style needs grow. Every plan includes our core AI styling features with increasing levels of personalization and premium benefits.
          </p>

          {/* Enhanced billing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className={`text-sm transition-all duration-300 ${!isYearly ? 'text-charcoal-900 font-semibold scale-110' : 'text-charcoal-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 ${
                isYearly ? 'bg-charcoal-900' : 'bg-wairly-300'
              } shadow-lg hover:shadow-xl`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
              <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                isYearly ? 'bg-charcoal-400 opacity-30' : 'bg-wairly-400 opacity-30'
              } animate-pulse`}></div>
            </button>
            <span className={`text-sm transition-all duration-300 ${isYearly ? 'text-charcoal-900 font-semibold scale-110' : 'text-charcoal-600'}`}>
              Yearly
            </span>
            {isYearly && (
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-wairly-500 to-charcoal-500 text-white text-xs px-3 py-1 rounded-full animate-bounce shadow-lg flex items-center space-x-1">
                  <Gift className="w-3 h-3" />
                  <span>Save 20%</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed pricing cards with proper alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${plan.borderColor} group overflow-hidden h-full flex flex-col ${
                plan.popular ? 'ring-4 ring-charcoal-300 ring-opacity-50 scale-105' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-charcoal-600 to-charcoal-700 text-white' 
                      : 'bg-gradient-to-r from-wairly-600 to-wairly-700 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="p-8 lg:p-10 relative z-10 flex flex-col h-full">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <plan.icon className="w-10 h-10 text-white animate-pulse-slow" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-900 mb-3 group-hover:text-wairly-600 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Enhanced price */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-charcoal-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                    <span className="text-xl text-charcoal-600 font-normal">
                      {plan.price.monthly === 0 ? '' : isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="space-y-1">
                      <p className="text-sm text-charcoal-500 animate-fade-in-up">
                        ${Math.round(plan.price.yearly / 12)}/month billed annually
                      </p>
                      <p className="text-xs text-wairly-600 font-medium">
                        Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                      </p>
                    </div>
                  )}
                </div>

                {/* Enhanced features - flex grow to fill space */}
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-wairly-400 to-wairly-500 rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-charcoal-600 text-sm leading-relaxed group-hover/item:text-charcoal-800 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA button - always at bottom */}
                <div className="mt-auto">
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn ${plan.buttonStyle}`}>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {plan.name === 'Free' ? (
                        <>
                          <Zap className="w-5 h-5" />
                          <span>Get Started Free</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          <span>Start 14-Day Free Trial</span>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>

                  {plan.name !== 'Free' && (
                    <p className="text-xs text-charcoal-500 text-center mt-3">
                      No credit card required • Cancel anytime
                    </p>
                  )}
                </div>
              </div>

              {/* Card shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Enhanced feature comparison */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wairly-50 to-charcoal-50 opacity-50"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold text-charcoal-900 mb-4">
              Compare All Features
            </h3>
            <p className="text-charcoal-600 max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best choice for your styling needs
            </p>
          </div>

          <div className="relative z-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-wairly-200">
                  <th className="text-left py-4 px-6 font-semibold text-charcoal-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Free</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Premium</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={4} className="py-6">
                        <h4 className="font-bold text-lg text-charcoal-800 border-l-4 border-wairly-500 pl-4">
                          {category.category}
                        </h4>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-wairly-100 hover:bg-wairly-50 transition-colors duration-200">
                        <td className="py-3 px-6 text-charcoal-700">{item.name}</td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.free === 'boolean' ? (
                            item.free ? (
                              <Check className="w-5 h-5 text-wairly-500 mx-auto" />
                            ) : (
                              <span className="text-charcoal-400">—</span>
                            )
                          ) : (
                            <span className="text-sm text-charcoal-600">{item.free}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.premium === 'boolean' ? (
                            item.premium ? (
                              <Check className="w-5 h-5 text-charcoal-500 mx-auto" />
                            ) : (
                              <span className="text-charcoal-400">—</span>
                            )
                          ) : (
                            <span className="text-sm text-charcoal-600">{item.premium}</span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {typeof item.pro === 'boolean' ? (
                            item.pro ? (
                              <Check className="w-5 h-5 text-wairly-600 mx-auto" />
                            ) : (
                              <span className="text-charcoal-400">—</span>
                            )
                          ) : (
                            <span className="text-sm text-charcoal-600">{item.pro}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Enhanced FAQ section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-charcoal-900 mb-12 animate-fade-in-up">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'Can I change plans anytime?',
                answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
                delay: '0s'
              },
              {
                question: 'Is there really a free trial?',
                answer: 'Yes! Premium and Pro plans include a full 14-day free trial with access to all features. No credit card required to start.',
                delay: '0.1s'
              },
              {
                question: 'How accurate is the AI styling?',
                answer: 'Our AI has a 95% accuracy rate and continuously learns from your feedback. The more you use it, the better it gets at understanding your style.',
                delay: '0.2s'
              },
              {
                question: 'What happens to my data if I cancel?',
                answer: 'Your data remains secure and accessible for 30 days after cancellation. You can export your wardrobe data anytime before permanent deletion.',
                delay: '0.3s'
              },
              {
                question: 'Do you offer student discounts?',
                answer: 'Yes! Students get 50% off Premium and Pro plans with a valid student email. Contact support to verify your student status.',
                delay: '0.4s'
              },
              {
                question: 'Can I use Wairly offline?',
                answer: 'The mobile app works offline for viewing your wardrobe and saved outfits. AI recommendations require an internet connection.',
                delay: '0.5s'
              }
            ].map((faq, index) => (
              <div key={index} className="text-left group animate-fade-in-up bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: faq.delay }}>
                <h4 className="font-bold text-charcoal-900 mb-3 group-hover:text-wairly-600 transition-colors duration-300 text-lg">
                  {faq.question}
                </h4>
                <p className="text-charcoal-600 leading-relaxed group-hover:text-charcoal-700 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;