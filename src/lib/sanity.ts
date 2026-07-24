import { createClient, type ClientConfig } from "@sanity/client";

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  draft?: boolean;
  tags?: string[];
  content?: unknown[];
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  draft?: boolean;
  demoURL?: string;
  repoURL?: string;
  content?: unknown[];
}

export interface BlockContent {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{ text?: string }>;
}

const config: ClientConfig = {
  projectId: import.meta.env.SANITY_PROJECT_ID || "3k9hzpz8",
  dataset: import.meta.env.SANITY_DATASET || "production",
  apiVersion: import.meta.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: import.meta.env.PROD,
  perspective: "published",
};

export const client = createClient(config);

export const blogPostsQuery = `*[_type == "blog" && draft != true] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const blogPostsAllQuery = `*[_type == "blog"] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const blogPostQuery = `*[_type == "blog" && slug.current == $slug][0]{
  ..., content[]{..., "asset": asset->}
}`;

export const projectsQuery = `*[_type == "projects" && draft != true] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, demoURL, repoURL
}`;

export const projectsAllQuery = `*[_type == "projects"] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, demoURL, repoURL
}`;

export const projectQuery = `*[_type == "projects" && slug.current == $slug][0]{
  ..., content[]{..., "asset": asset->}
}`;

export const blogPostsByTagQuery = `*[_type == "blog" && draft != true && $tag in tags] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const allTagsQuery = `*[_type == "blog" && defined(tags)][].tags[]`;
