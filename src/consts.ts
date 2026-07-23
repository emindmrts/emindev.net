import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "emin",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "emindmrts@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About me and what I use",
};

export const DISCORD_ID = "1133067172298633336";

export const SOCIALS: Socials = [
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/premiumnigga55/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/emindmrts",
  },
];
