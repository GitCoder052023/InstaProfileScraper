import { Image, Users, User, CheckCircle } from 'lucide-react';

export default function ProfileCard({ profile }) {
  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl">
      <div className="flex items-start gap-6">
        <div className="relative">
          <img
            src={`https://instaprofilescraper.onrender.com/proxy?url=${encodeURIComponent(profile.profilePicture)}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />


          {profile.isVerified && (
            <CheckCircle className="absolute -bottom-1 -right-1 w-6 h-6 text-blue-400 bg-black rounded-full p-1" />
          )}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-light">{profile.username}</h2>
              {profile.isPrivate && (
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-lg border border-yellow-500/30">
                  Private
                </span>
              )}
            </div>
            <h3 className="text-lg text-gray-300 font-light">{profile.fullName}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{profile.bio}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8 mt-8 pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <Image className="w-4 h-4 text-gray-400" />
            <span className="text-xl font-light">{profile.posts.toLocaleString()}</span>
          </div>
          <span className="text-sm text-gray-500">Posts</span>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-xl font-light">{profile.followers.toLocaleString()}</span>
          </div>
          <span className="text-sm text-gray-500">Followers</span>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-xl font-light">{profile.following.toLocaleString()}</span>
          </div>
          <span className="text-sm text-gray-500">Following</span>
        </div>
      </div>
    </div>
  );
}
