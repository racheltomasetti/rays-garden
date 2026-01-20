import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getCategorySlug, getAllPosts } from "@/lib/mdx";
import MDXComponents from "@/components/MDXComponents";
import Link from "next/link";
import KiLogo from "@/app/components/KiLogo";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: getCategorySlug(post.frontmatter.category || "uncategorized"),
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(slug);

  // Verify the post exists and matches the category in the URL
  if (!post || getCategorySlug(post.frontmatter.category || "") !== category) {
    notFound();
  }

  const { frontmatter, content } = post;
  const { title, date, category: displayCategory, excerpt, featured_image } = frontmatter;

  // Format date (parse manually to avoid timezone issues)
  let formattedDate: string;
  const monthAbbreviations = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  
  // Ensure we're working with a string (gray-matter might parse dates, but we convert them back in mdx.ts)
  const dateStr = String(date);
  
  if (dateStr && dateStr.includes('-')) {
    // Parse string date directly
    const dateParts = dateStr.split("-");
    if (dateParts.length === 3) {
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // 0-indexed
      const day = parseInt(dateParts[2]);
      formattedDate = `${year} ${monthAbbreviations[month]} ${day}`;
    } else {
      // Fallback
      const dateObj = new Date(dateStr);
      formattedDate = `${dateObj.getFullYear()} ${monthAbbreviations[dateObj.getMonth()]} ${dateObj.getDate()}`;
    }
  } else {
    // Fallback to default Date parsing
    const dateObj = new Date(dateStr || Date.now());
    formattedDate = `${dateObj.getFullYear()} ${monthAbbreviations[dateObj.getMonth()]} ${dateObj.getDate()}`;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Back to Feed */}
      <div className="border-b border-[var(--ui-2)]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between relative">
            <Link
              href="/"
              className="text-[var(--tx)] hover:font-bold transition-colors inline-flex items-center gap-2"
            >
              ← back
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <KiLogo />
            </div>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Post Header */}
      <div className="flex items-center justify-center px-6 py-8">
        <header className="bg-[var(--bg-2)] border border-[var(--ui-2)] rounded-lg p-6 shadow-sm w-full max-w-4xl">
          <div className="flex flex-col items-center">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-[var(--tx)] mb-4">
              {title}
            </h1>
            <hr className="w-full border-[var(--ui-2)] mb-4" />

            {/* Category & Date */}
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-[var(--accent)] text-white px-3 py-1 rounded-full font-medium font-poppins uppercase tracking-wide">
                {displayCategory}
              </span>
              <span className="text-white px-3 py-1 rounded-full font-medium font-poppins" style={{ backgroundColor: '#54783fff' }}>
                {formattedDate}
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-[var(--tx-2)] leading-relaxed text-center mt-4">
            {excerpt}
          </p>
        </header>
      </div>

      {/* Post Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-lg max-w-none text-center">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
      </article>

      {/* Footer Navigation */}
      <div className="border-t border-[var(--ui-2)] mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-[var(--tx)] hover:font-bold transition-colors font-medium"
          >
            ← back
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontmatter.title} | Ray's Garden`,
    description: post.frontmatter.excerpt,
  };
}
