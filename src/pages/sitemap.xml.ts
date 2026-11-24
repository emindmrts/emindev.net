import type { APIRoute } from "astro";
import {
  client,
  blogPostsQuery,
  projectsQuery,
  allTagsQuery,
  type SanityPost,
  type SanityProject,
} from "@lib/sanity";

export const prerender = false;

const staticRoutes = ["", "/about", "/blog", "/projects", "/tags"];

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL("https://www.emindev.net/"))
    .toString()
    .replace(/\/$/, "");

  const urls = [...staticRoutes];

  try {
    const [posts, projects, tags] = await Promise.all([
      client.fetch(blogPostsQuery),
      client.fetch(projectsQuery),
      client.fetch(allTagsQuery),
    ]);

    for (const post of posts as SanityPost[]) urls.push(`/blog/${post.slug}`);
    for (const project of projects as SanityProject[])
      urls.push(`/projects/${project.slug}`);
    for (const tag of new Set(tags as string[]))
      urls.push(`/tags/${encodeURIComponent(tag)}`);
  } catch {
    // serve static routes even if the CMS is unreachable
  }

  const entries = [...new Set(urls)]
    .map((path) => `  <url><loc>${base}${path === "" ? "/" : path}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
