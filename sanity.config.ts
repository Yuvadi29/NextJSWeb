import { defineConfig, StudioLogo } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";

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
  studio: {
    components: {
      // Can change the logo with the brand name
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
});
