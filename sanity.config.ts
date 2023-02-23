import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  // BasePath tells me exactly where i am going to render it on the website
  basePath: "/studio",
  name: "CodingAdda_Blog_Studio",
  title: "CodingAdda_Blog_Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],
  // VisionTool allows us to test out our block queries. The desktool allows to update the information on the Sanity Studio.

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
