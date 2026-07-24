import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

export default defineConfig({
  site: "https://www.emindev.net/",
  output: "server",
  integrations: [
    sitemap(),
    pagefind(),
    react(),
    sanity({
      projectId: SANITY_PROJECT_ID || "3k9hzpz8",
      dataset: SANITY_DATASET || "production",
      useCdn: true,
      apiVersion: "2024-01-01",
    }),
  ],
  adapter: vercel({
    webAnalytics: { enabled: true },
    runtime: "nodejs20.x",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
