import { useState } from 'react';
import axios from 'axios';

export default function useInstagramProfile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScrape = async (e) => {
    if (e) e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setProfile(null);

    try {
      const res = await axios.get(`https://instaprofilescraper.onrender.com/api/profile`, {
        params: { username }
      });

      const data = res.data;

      setProfile({
        username,
        fullName: data.fullName,
        bio: data.biography,
        followers: data.followersCount,
        following: data.followsCount,
        posts: data.posts.length,
        profilePicture: data.profilePicUrlHD,
        isVerified: data.isVerified,
        isPrivate: data.isPrivate,
        recentPosts: data.posts.map(post => ({
          id: post.id,
          thumbnail: post.displayUrl,
          likes: post.likesCount || 0
        }))
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Something went wrong while fetching profile.');
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    profile,
    error,
    loading,
    handleScrape
  };
}
