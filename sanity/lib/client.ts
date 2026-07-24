import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: import.meta.env.SANITY_PROJECT_ID || "",
  dataset: import.meta.env.SANITY_DATASET || "production",
  apiVersion: import.meta.env.SANITY_API_VERSION || "2024-01-01",
  useCdn: import.meta.env.PROD,
  perspective: "published",
};

export const client = createClient(config);
