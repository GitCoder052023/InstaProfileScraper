import { ApifyClient } from 'apify-client';
import 'dotenv/config';

const client = new ApifyClient({
  token: process.env.apify_token
});

export default async function GetProfileData(url) {
  const input = {
    directUrls: [url],
    resultsType: 'details',
    resultsLimit: 200,
    searchType: 'user',
    searchLimit: 1,
    addParentData: false
  };

  const run = await client.actor('shu8hvrXbJbY3Eb9W').call(input);
  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  if (!items || items.length === 0) return null;

  const data = items[0];

  const posts = (data.latestPosts || []).map(post => ({
    id: post.id,
    type: post.type,
    caption: post.caption,
    url: post.url,
    displayUrl: post.displayUrl,
    likesCount: post.likesCount,
    commentsCount: post.commentsCount,
    timestamp: post.timestamp,
    locationName: post.locationName ?? null
  }));

  return {
    url: data.url,
    fullName: data.fullName,
    biography: data.biography,
    followersCount: data.followersCount,
    followsCount: data.followsCount,
    profilePicUrlHD: data.profilePicUrlHD,
    isPrivate: data.private,
    isVerified: data.verified,
    posts
  };
}
