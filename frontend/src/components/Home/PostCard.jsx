import { ExternalLink } from 'lucide-react';

export default function PostCard({ post }) {
    return (
        <div className="group relative aspect-square rounded-xl overflow-hidden bg-white/5 hover:scale-105 transition-all duration-300">
            <img
                src={`https://instaprofilescraper.onrender.com/proxy?url=${encodeURIComponent(post.thumbnail)}`}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <ExternalLink className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm">{post.likes} likes</p>
                </div>
            </div>
        </div>
    );
}
