import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "nwhepusy", 
  dataset: "production",
  apiVersion: "2024-02-07",
  useCdn: true,
});


