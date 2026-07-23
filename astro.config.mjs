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
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.KEYSTATIC_SECRET': JSON.stringify(process.env.KEYSTATIC_SECRET),
      'import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID': JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
      'import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET': JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
    }
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
