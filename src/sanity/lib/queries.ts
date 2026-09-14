import { defineQuery } from "next-sanity";

const MEDIA_ITEM_PROJECTION = `{
  _key,
  mediaType,
  image {
    asset -> {
      _id,
      url,
      metadata { lqip, dimensions { width, height } }
    },
    alt,
    hotspot,
    crop
  },
  video {
    asset -> { _id, url }
  }
}`;

const PROJECT_PROJECTION = `{
  _id,
  "slug": slug.current,
  title,
  category,
  client,
  summary,
  body,
  status,
  featured,
  order,
  techStack,
  links[] { _key, label, url },
  coverMedia ${MEDIA_ITEM_PROJECTION},
  gallery[] ${MEDIA_ITEM_PROJECTION}
}`;

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && hidden != true] | order(order asc) ${PROJECT_PROJECTION}
`);

export const PROJECTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "project" && hidden != true && category == $category] | order(order asc) ${PROJECT_PROJECTION}
`);

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && hidden != true && featured == true] | order(order asc) ${PROJECT_PROJECTION}
`);

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0] {
    name,
    bio,
    now,
    contactEmail,
    socialLinks[] { platform, url }
  }
`);
