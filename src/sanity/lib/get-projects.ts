import { sanityFetch } from "./live";
import { FEATURED_PROJECTS_QUERY, PROJECTS_BY_CATEGORY_QUERY, PROJECTS_QUERY } from "./queries";
import type { Project, ProjectCategory } from "./types";

export async function getProjects(): Promise<Project[]> {
  try {
    const { data } = await sanityFetch({ query: PROJECTS_QUERY });
    return data as Project[];
  } catch {
    return [];
  }
}

export async function getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
  try {
    const { data } = await sanityFetch({ query: PROJECTS_BY_CATEGORY_QUERY, params: { category } });
    return data as Project[];
  } catch {
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const { data } = await sanityFetch({ query: FEATURED_PROJECTS_QUERY });
    return data as Project[];
  } catch {
    return [];
  }
}
