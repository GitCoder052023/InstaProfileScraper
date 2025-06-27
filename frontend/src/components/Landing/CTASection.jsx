import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ visibleSections, onCTAClick }) => {
  return (
    <div className="relative z-10 py-20">
      <div 
        id="cta"
        className={`container mx-auto px-6 max-w-4xl text-center transition-all duration-1000 ${
          visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 
          className={`text-3xl md:text-4xl font-light mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Ready to get started?
        </h3>
        <p 
          className={`text-gray-400 font-light mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Start analyzing Instagram profiles today with our powerful and intuitive tool
        </p>
        
        <button 
          onClick={onCTAClick}
          className={`group px-10 py-5 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-700 flex items-center gap-3 mx-auto shadow-2xl cursor-pointer hover:scale-105 ${
            visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: visibleSections.has('cta') ? '600ms' : '0ms'
          }}
        >
          Launch App
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CTASection;