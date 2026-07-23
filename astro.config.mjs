import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.emindev.net/",
  integrations: [sitemap(), mdx(), pagefind(), react(), keystatic()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
