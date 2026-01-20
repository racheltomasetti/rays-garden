import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";
import { getCategorySlug } from "@/lib/mdx";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;
  const { title, created, category, featured_image } = frontmatter;

  // Format created date as "Created on January 20, 2026"
  // Parse date string (YYYY-MM-DD) as local time to avoid timezone issues
  const createdStr = String(created);
  let formattedDate: string;
  
  try {
    if (createdStr.includes('-')) {
      const [year, month, day] = createdStr.split('-').map(Number);
      const dateObj = new Date(year, month - 1, day); // month is 0-indexed
      formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } else {
      const dateObj = new Date(createdStr);
      formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  } catch {
    formattedDate = createdStr;
  }

  // Get category slug for URL
  const categorySlug = getCategorySlug(category || "uncategorized");

  return (
    <Link href={`/${categorySlug}/${slug}`}>
      <article className="group bg-[var(--bg)] border border-[var(--ui-2)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg">
        {/* Featured Image */}
        {featured_image && (
          <div className="relative w-full h-48 md:h-64 overflow-hidden bg-[var(--bg-2)]">
            <Image
              src={featured_image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--tx)] mb-3 group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h2>

          {/* Date */}
          <div className="text-sm text-[var(--tx-2)]">
            Created on {formattedDate}
          </div>
        </div>
      </article>
    </Link>
  );
}
