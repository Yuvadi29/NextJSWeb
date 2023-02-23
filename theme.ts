import { buildLegacyTheme } from "sanity";

// This will be used to design the Sanity Studio

const props = {
  "--my-white": "#fff",
  "--my-darkblue": "#151725",
  "--my-blue": "#0a7cb2",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-darkblue"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-white"],
  "--component-text-color": props["--my-darkblue"],

  /* Brand */
  "--brand-primary": props["--my-blue"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-blue"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-darkblue"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-blue"],
});
