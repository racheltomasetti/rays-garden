export type Category =
  | "Projects"
  | "Essays"
  | "Resources"
  | "Ki";

export interface PostFrontmatter {
  title: string;
  created: string;
  updated?: string;
  category: Category;
  featured_image?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface PostWithMDX extends Post {
  mdxSource: unknown; // MDXRemote compiled source
}
