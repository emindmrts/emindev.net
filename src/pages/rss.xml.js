import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { client, blogPostsAllQuery, projectsAllQuery } from "@lib/sanity";

export async function GET(context) {
  const blog = (await client.fetch(blogPostsAllQuery)).filter(
    (post) => !post.draft,
  );
  const projects = (await client.fetch(projectsAllQuery)).filter(
    (project) => !project.draft,
  );
  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.title,
      description: item.description,
      pubDate: new Date(item.date),
      link: `/${item._type === "blog" ? "blog" : "projects"}/${item.slug}/`,
    })),
  });
}
