import { getAllPosts } from "@/lib/mdx";
import PostCard from "./components/PostCard";
import HeaderWithKi from "./components/HeaderWithKi";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 -mt-1 -mb-1">
          <HeaderWithKi />
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="flex items-center justify-center min-h-[calc(100vh-150px)] md:min-h-[calc(100vh-200px)] -mt-8 md:mt-0">
            <p className="text-2xl text-[var(--tx-2)] italic">
              coming soon... 
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
