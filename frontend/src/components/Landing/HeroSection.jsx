import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ isLoaded, onCTAClick }) => {
  return (
    <div 
      id="hero"
      className={`container mx-auto px-6 py-20 max-w-6xl transition-all duration-1000 delay-300 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-center mb-16">
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Now Available</span>
        </div>
        
        <h1 
          className={`text-5xl md:text-7xl font-light tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Instagram Profile
          <br />
          <span className="text-4xl md:text-6xl">Scraper</span>
        </h1>
        
        <p 
          className={`text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Extract public Instagram profile data and analyze recent posts with our clean, 
          fast, and secure scraping tool
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button 
            onClick={onCTAClick}
            className="group px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl cursor-pointer hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={onCTAClick}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all duration-300 cursor-pointer hover:scale-105"
          >
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;