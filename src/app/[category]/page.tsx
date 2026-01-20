import { notFound } from "next/navigation";
import { getPostsByCategory, getCategories, getCategoryDisplayName } from "@/lib/mdx";
import PostCard from "../components/PostCard";
import Link from "next/link";
import { getCategoryColor } from "@/lib/categoryColors";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  const displayName = getCategoryDisplayName(category);
  const categoryColor = getCategoryColor(displayName);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Back to Feed */}
      <div className="border-b border-[var(--ui-2)]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors inline-flex items-center gap-2"
          >
            ← Back to The Feed
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[var(--bg)] px-3 py-1 rounded-full font-medium text-sm"
              style={{ backgroundColor: categoryColor }}
            >
              {displayName}
            </span>
            <span className="text-[var(--tx-3)]">{posts.length} posts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--tx)]">
            {displayName}
          </h1>
        </div>
      </header>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const displayName = getCategoryDisplayName(category);

  return {
    title: `${displayName} | Ray's Garden`,
    description: `Explore all posts in ${displayName}`,
  };
}
