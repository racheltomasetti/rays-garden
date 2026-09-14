export type ProjectCategory = "client" | "personal" | "ki";
export type ProjectStatus = "active" | "completed" | "exploring";

interface SanityImageAsset {
  _id: string;
  url: string;
  metadata?: {
    lqip?: string;
    dimensions?: { width: number; height: number };
  };
}

export interface SanityImageValue {
  asset: SanityImageAsset;
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityFileValue {
  asset?: { _id: string; url: string };
}

export interface MediaItem {
  _key?: string;
  mediaType: "image" | "video";
  image?: SanityImageValue;
  video?: SanityFileValue;
}

export interface LinkItem {
  _key?: string;
  label: string;
  url: string;
}

// Loosely typed for now — refine once the Portable Text renderer is built.
export type PortableTextBody = Record<string, unknown>[];

export interface Project {
  _id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  summary?: string;
  body?: PortableTextBody;
  coverMedia?: MediaItem;
  gallery?: MediaItem[];
  techStack?: string[];
  links?: LinkItem[];
  status: ProjectStatus;
  featured?: boolean;
  order?: number;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings {
  name?: string;
  bio?: string;
  now?: string;
  contactEmail?: string;
  socialLinks?: SocialLink[];
}
