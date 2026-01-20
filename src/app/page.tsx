import { getAllPosts, getCategorySlug } from "@/lib/mdx";
import HeaderWithKi from "./components/HeaderWithKi";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  // Format date helper function
  const formatDate = (date: string | Date) => {
    const monthAbbreviations = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    const dateStr = String(date);
    
    if (dateStr && dateStr.includes('-')) {
      const dateParts = dateStr.split("-");
      if (dateParts.length === 3) {
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // 0-indexed
        const day = parseInt(dateParts[2]);
        return `${year} ${monthAbbreviations[month]} ${day}`;
      } else {
        const dateObj = new Date(dateStr);
        return `${dateObj.getFullYear()} ${monthAbbreviations[dateObj.getMonth()]} ${dateObj.getDate()}`;
      }
    } else {
      const dateObj = new Date(dateStr || Date.now());
      return `${dateObj.getFullYear()} ${monthAbbreviations[dateObj.getMonth()]} ${dateObj.getDate()}`;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Header */}
      <header className="border-b border-[var(--ui-2)] bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-6 -mt-1 -mb-1">
          <HeaderWithKi />
        </div>
      </header>

      {/* Posts Section */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-8">
          {posts.map((post) => {
            const { title, date, category, excerpt } = post.frontmatter;
            const { slug } = post;
            const displayCategory = category || "uncategorized";
            const formattedDate = formatDate(date || new Date().toISOString());
            const postUrl = `/${getCategorySlug(displayCategory)}/${slug}`;

            return (
              <Link
                key={slug}
                href={postUrl}
                className="w-full max-w-4xl"
              >
                <header className="bg-[var(--bg-2)] border border-[var(--ui-2)] rounded-lg p-6 shadow-sm w-full hover:shadow-md transition-shadow cursor-pointer">
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
                  {excerpt && (
                    <p className="text-lg text-[var(--tx-2)] leading-relaxed text-center mt-4">
                      {excerpt}
                    </p>
                  )}
                </header>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
