import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter, Category } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content", "posts");

/**
 * Get all unique categories from existing posts (dynamic discovery)
 */
export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    if (post.frontmatter.category) {
      categories.add(post.frontmatter.category);
    }
  });

  return Array.from(categories).sort();
}

/**
 * Get all posts from the posts directory
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const allPosts: Post[] = [];

  files.forEach((filename) => {
    if (filename.endsWith(".mdx") || filename.endsWith(".md")) {
      const slug = filename.replace(/\.mdx?$/, "");
      const post = getPostBySlug(slug);
      if (post) {
        allPosts.push(post);
      }
    }
  });

  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(fullPath)) {
        return null;
      }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    // Ensure date is always a string to avoid timezone issues
    if (data.date instanceof Date) {
      // Convert Date back to YYYY-MM-DD string format
      const year = data.date.getUTCFullYear();
      const month = String(data.date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(data.date.getUTCDate()).padStart(2, '0');
      data.date = `${year}-${month}-${day}`;
    }

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all posts from a specific category (filters by frontmatter)
 */
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) =>
      post.frontmatter.category &&
      post.frontmatter.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
  );
}

/**
 * Get all post slugs (for static generation)
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((filename) => filename.endsWith(".mdx") || filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.mdx?$/, ""));
}

/**
 * Convert category slug to display name (dynamic from posts)
 */
export function getCategoryDisplayName(categorySlug: string): string {
  const allPosts = getAllPosts();
  const post = allPosts.find(
    (p) =>
      p.frontmatter.category &&
      p.frontmatter.category.toLowerCase().replace(/\s+/g, "-") === categorySlug.toLowerCase()
  );
  return post?.frontmatter.category || categorySlug;
}

/**
 * Convert category display name to slug
 */
export function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Get recent posts (limit)
 */
export function getRecentPosts(limit: number = 5): Post[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, limit);
}

/**
 * Search posts by title or excerpt
 */
export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts();
  const lowerQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().includes(lowerQuery) ||
      post.frontmatter.excerpt.toLowerCase().includes(lowerQuery)
    );
  });
}
