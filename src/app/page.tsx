import HomeContent from "@/app/components/HomeContent";
import { getProjects } from "@/sanity/lib/get-projects";
import { getSiteSettings } from "@/sanity/lib/get-site-settings";

export default async function RootPage() {
  const [siteSettings, projects] = await Promise.all([getSiteSettings(), getProjects()]);

  return <HomeContent siteSettings={siteSettings} projects={projects} />;
}
