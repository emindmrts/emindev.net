export const blogPostsQuery = `*[_type == "blog" && draft != true] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const blogPostsAllQuery = `*[_type == "blog"] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const blogPostQuery = `*[_type == "blog" && slug.current == $slug][0]`;

export const projectsQuery = `*[_type == "projects" && draft != true] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, demoURL, repoURL
}`;

export const projectsAllQuery = `*[_type == "projects"] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, demoURL, repoURL
}`;

export const projectQuery = `*[_type == "projects" && slug.current == $slug][0]`;

export const blogPostsByTagQuery = `*[_type == "blog" && draft != true && $tag in tags] | order(date desc) {
  _id, title, "slug": slug.current, description, date, draft, tags
}`;

export const allTagsQuery = `*[_type == "blog" && defined(tags)][].tags[]`;

export const allSlugsQuery = `*[_type in ["blog", "projects"] && draft != true] {
  _type, "slug": slug.current
}`;
