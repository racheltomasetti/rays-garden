"use client";

import { useState } from "react";
import Link from "next/link";
import { getCategoryColor } from "@/lib/categoryColors";
import { Post } from "@/types/post";

interface CategoryFilterProps {
  posts: Post[];
  categories: string[];
}

export default function CategoryFilter({ posts, categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Group posts by category
  const postsByCategory = categories.reduce((acc, category) => {
    acc[category] = posts.filter(post => post.frontmatter.category === category);
    return acc;
  }, {} as Record<string, Post[]>);

  // Filter categories to display based on selection
  const displayCategories = selectedCategory
    ? categories.filter(cat => cat === selectedCategory)
    : categories;

  // Helper to get category slug
  const getCategorySlug = (category: string) => {
    return category.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <>
      {/* Category Filters */}
      <div className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium font-poppins uppercase tracking-wide transition-all flex-shrink-0 text-sm sm:text-base min-w-[60px] sm:min-w-[80px] text-center ${
                selectedCategory === null
                  ? "text-white"
                  : "text-[var(--tx-2)] hover:text-[var(--tx)]"
              }`}
              style={{
                backgroundColor: selectedCategory === null ? "#54783fff" : "var(--bg-2)",
                border: selectedCategory === null ? "none" : "1px solid var(--ui-2)",
              }}
            >
              All
            </button>
            {categories.map((category) => {
              const categoryColor = getCategoryColor(category);
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(isSelected ? null : category)}
                  className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full font-medium font-poppins uppercase tracking-wide transition-all flex-shrink-0 text-sm sm:text-base min-w-[60px] sm:min-w-[80px] text-center ${
                    isSelected
                      ? "text-white"
                      : "text-[var(--tx-2)] hover:text-[var(--tx)]"
                  }`}
                  style={{
                    backgroundColor: isSelected ? categoryColor : "var(--bg-2)",
                    border: isSelected ? "none" : "1px solid var(--ui-2)",
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <ul className="space-y-6">
          {(selectedCategory === null ? posts : postsByCategory[selectedCategory] || []).map((post) => {
            const { title, category } = post.frontmatter;
            const { slug } = post;
            const categorySlug = getCategorySlug(category);
            const postUrl = `/${categorySlug}/${slug}`;

            return (
              <li key={slug} className="list-disc list-inside">
                <Link href={postUrl} className="group">
                  <span className="text-2xl font-semibold text-[var(--tx)] group-hover:text-[var(--accent)] transition-colors">
                    {title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
