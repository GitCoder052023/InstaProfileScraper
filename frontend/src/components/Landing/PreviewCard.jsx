import React from 'react';
import { Instagram } from 'lucide-react';

const PreviewCard = ({ isLoaded }) => {
  return (
    <div 
      id="preview"
      className={`backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl max-w-4xl mx-auto transition-all duration-1000 delay-1300 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-center text-sm text-gray-400">
          instagram-scraper.app
        </div>
      </div>
      
      <div className="bg-black/50 rounded-2xl p-6 border border-white/5">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <Instagram className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="w-32 h-4 bg-white/20 rounded mb-2 animate-pulse"></div>
            <div className="w-24 h-3 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square bg-white/10 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;