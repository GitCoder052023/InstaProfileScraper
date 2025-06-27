import React from 'react';

const StatsSection = ({ visibleSections }) => {
  const stats = [
    { label: "Profiles Analyzed", value: "10K+" },
    { label: "Data Points", value: "500K+" },
    { label: "Success Rate", value: "99.9%" },
    { label: "Response Time", value: "<2s" }
  ];

  return (
    <div className="relative z-10 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div 
          id="stats"
          className={`backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-12 text-center transition-all duration-1000 ${
            visibleSections.has('stats') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h3 
            className={`text-2xl font-light mb-12 text-gray-300 transition-all duration-1000 delay-200 ${
              visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Trusted by professionals worldwide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`space-y-2 transition-all duration-1000 ${
                  visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: visibleSections.has('stats') ? `${index * 100 + 400}ms` : '0ms'
                }}
              >
                <div className="text-2xl md:text-3xl font-light">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;