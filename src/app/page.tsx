import { getAllPosts, getCategories } from "@/lib/mdx";
import HeaderWithKi from "./components/HeaderWithKi";
import CategoryFilter from "./components/CategoryFilter";

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 -mt-1 -mb-1">
          <HeaderWithKi />
        </div>
      </header>

      {/* Category Filters and Posts */}
      <CategoryFilter posts={posts} categories={categories} />
    </div>
  );
}
