import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import codingAddabrand from "./components/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2ki5nvnp';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  // BasePath tells me exactly where i am going to render it on the website
  basePath: "/studio",
  name: "CodingAdda_Blog_Studio",
  title: "CodingAdda_Blog_Studio",
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],
  // VisionTool allows us to test out our block queries. The desktool allows to update the information on the Sanity Studio.

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // Can change the logo with the brand name
      logo: codingAddabrand,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
});
