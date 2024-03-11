import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    tailwind(),
    mdx(),
  ],
  site: "https://kzk4043-knowledge-base.netlify.app/"
});
