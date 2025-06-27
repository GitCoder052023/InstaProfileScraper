import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingOverlay from '../components/Landing/LoadingOverlay';
import HeroSection from '../components/Landing/HeroSection';
import PreviewCard from '../components/Landing/PreviewCard';
import FeaturesSection from '../components/Landing/FeaturesSection';
import StatsSection from '../components/Landing/StatsSection';
import CTASection from '../components/Landing/CTASection';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/app');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const observeTimer = setTimeout(() => {
      const sections = ['hero', 'preview', 'features', 'stats', 'cta'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(observeTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <LoadingOverlay isLoaded={isLoaded} />

      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      <div className="relative z-10">
        <HeroSection isLoaded={isLoaded} onCTAClick={handleCTAClick} />
        <PreviewCard isLoaded={isLoaded} />
      </div>
      
      <FeaturesSection visibleSections={visibleSections} />
      <StatsSection visibleSections={visibleSections} />
      <CTASection visibleSections={visibleSections} onCTAClick={handleCTAClick} />
    </div>
  );
}