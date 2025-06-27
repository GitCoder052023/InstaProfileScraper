import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound({ onGoHome, onGoBack, onGoToApp }) {
  const handleGoHome = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/';
  };

  const handleGoBack = () => {
    if (onGoBack) onGoBack();
    else window.history.back();
  };

  const handleGoToApp = () => {
    if (onGoToApp) onGoToApp();
    else window.location.href = '/app';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-light text-white/20 leading-none">
            404
          </h1>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-light text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another location.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoHome}
            className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Go to Landing Page
          </button>

          <button
            onClick={handleGoToApp}
            className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Go to App
          </button>

          <button
            onClick={handleGoBack}
            className="w-full px-6 py-3 bg-transparent hover:bg-white/5 border border-white/5 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="inline-block p-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}