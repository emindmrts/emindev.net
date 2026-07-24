import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Astro Micro",
  projectId: "3k9hzpz8",
  dataset: "production",
  plugins: [structureTool(), codeInput()],
  schema: { types: schemaTypes },
});
