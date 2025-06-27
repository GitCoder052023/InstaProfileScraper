import SearchBar from '../components/Home/SearchBar';
import Loader from '../components/Home/Loader';
import ErrorBox from '../components/Home/ErrorBox';
import ProfileCard from '../components/Home/ProfileCard';
import RecentPosts from '../components/Home/RecentPosts';
import useInstagramProfile from '../hooks/useInstagramProfile';

export default function Home() {
  const {
    username,
    setUsername,
    profile,
    error,
    loading,
    handleScrape
  } = useInstagramProfile();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wide mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Instagram Profile Scraper
          </h1>
          <p className="text-gray-400 font-light">
            Extract public Instagram profile information and recent posts
          </p>
        </div>

        <SearchBar
          username={username}
          setUsername={setUsername}
          handleScrape={handleScrape}
          loading={loading}
        />

        {loading && <Loader />}
        {error && <ErrorBox error={error} />}

        {profile && (
          <div className="space-y-8 animate-fadeIn">
            <ProfileCard profile={profile} />
            {profile.recentPosts.length > 0 ? (
              <RecentPosts posts={profile.recentPosts} profile={profile} />
            ) : (
              <p className="text-center text-zinc-400 mt-10">No recent posts found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
