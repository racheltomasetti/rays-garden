import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter, Category } from "@/types/post";

const contentDirectory = path.join(process.cwd(), "content");

// Category folders - matches the Category type slugs
const categoryFolders = [
  "projects",
  "essays",
  "resources",
  "ki",
];

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
 * Get all posts from all category directories
 */
export function getAllPosts(): Post[] {
  const allPosts: Post[] = [];

  categoryFolders.forEach((folder) => {
    const folderPath = path.join(contentDirectory, folder);

    if (!fs.existsSync(folderPath)) {
      return;
    }

    const files = fs.readdirSync(folderPath);
    files.forEach((filename) => {
      if (filename.endsWith(".mdx") || filename.endsWith(".md")) {
        const slug = filename.replace(/\.mdx?$/, "");
        const post = getPostBySlug(slug, folder);
        if (post) {
          allPosts.push(post);
        }
      }
    });
  });

  // Sort by created date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.frontmatter.created).getTime() - new Date(a.frontmatter.created).getTime();
  });
}

/**
 * Get a single post by slug, optionally from a specific folder
 */
export function getPostBySlug(slug: string, folder?: string): Post | null {
  try {
    let fullPath: string | null = null;

    // If folder is specified, look there first
    if (folder) {
      const folderPath = path.join(contentDirectory, folder);
      fullPath = path.join(folderPath, `${slug}.mdx`);
      if (!fs.existsSync(fullPath)) {
        fullPath = path.join(folderPath, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
          fullPath = null;
        }
      }
    }

    // If no folder specified or not found, search all category folders
    if (!fullPath) {
      for (const categoryFolder of categoryFolders) {
        const folderPath = path.join(contentDirectory, categoryFolder);
        let testPath = path.join(folderPath, `${slug}.mdx`);
        if (fs.existsSync(testPath)) {
          fullPath = testPath;
          break;
        }
        testPath = path.join(folderPath, `${slug}.md`);
        if (fs.existsSync(testPath)) {
          fullPath = testPath;
          break;
        }
      }
    }

    if (!fullPath) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Ensure created and updated dates are always strings to avoid timezone issues
    if (data.created instanceof Date) {
      // Convert Date back to YYYY-MM-DD string format
      const year = data.created.getUTCFullYear();
      const month = String(data.created.getUTCMonth() + 1).padStart(2, '0');
      const day = String(data.created.getUTCDate()).padStart(2, '0');
      data.created = `${year}-${month}-${day}`;
    }

    if (data.updated instanceof Date) {
      // Convert Date back to YYYY-MM-DD string format
      const year = data.updated.getUTCFullYear();
      const month = String(data.updated.getUTCMonth() + 1).padStart(2, '0');
      const day = String(data.updated.getUTCDate()).padStart(2, '0');
      data.updated = `${year}-${month}-${day}`;
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
  const allSlugs: string[] = [];

  categoryFolders.forEach((folder) => {
    const folderPath = path.join(contentDirectory, folder);

    if (!fs.existsSync(folderPath)) {
      return;
    }

    const files = fs.readdirSync(folderPath);
    const slugs = files
      .filter((filename) => filename.endsWith(".mdx") || filename.endsWith(".md"))
      .map((filename) => filename.replace(/\.mdx?$/, ""));

    allSlugs.push(...slugs);
  });

  return allSlugs;
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
