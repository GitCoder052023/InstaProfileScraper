import React from 'react';
import { Search, Instagram, Shield, Zap, Users } from 'lucide-react';

const FeaturesSection = ({ visibleSections }) => {
  const features = [
    {
      icon: Search,
      title: "Profile Discovery",
      description: "Extract comprehensive public profile information with a single search"
    },
    {
      icon: Instagram,
      title: "Recent Posts",
      description: "View and analyze recent posts with engagement metrics"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Only accesses publicly available information, respecting privacy"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get results instantly with our optimized scraping technology"
    },
    {
      icon: Users,
      title: "Follower Insights",
      description: "Detailed follower and following statistics at a glance"
    }
  ];

  return (
    <div className="relative z-10 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div 
          id="features"
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Everything you need to analyze Instagram profiles and gather insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:border-white/20 ${
                visibleSections.has('features') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleSections.has('features') ? `${index * 100 + 200}ms` : '0ms'
              }}
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gray-300" />
              </div>
              
              <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;