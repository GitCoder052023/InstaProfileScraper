import { Search, ArrowRight } from 'lucide-react';

export default function SearchBar({ username, setUsername, handleScrape, loading }) {
  return (
    <div className="mb-12">
      <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 shadow-2xl">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onClick={(e) => e.key === 'Enter' && handleScrape(e)}
              placeholder="Enter Instagram username"
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
            />
          </div>
          <button
            onClick={handleScrape}
            disabled={loading || !username.trim()}
            className="px-3 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-gray-600 border border-white/20 rounded-xl font-medium transition-all duration-300 cursor-pointer hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <span className="sm:hidden">
              <ArrowRight className="w-5 h-5" />
            </span>
            <span className="hidden sm:inline">
              {loading ? 'Scraping...' : 'Scrape Profile'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}