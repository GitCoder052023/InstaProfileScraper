import PostCard from './PostCard';

export default function RecentPosts({ posts }) {
  return (
    <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-light">Recent Posts</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
