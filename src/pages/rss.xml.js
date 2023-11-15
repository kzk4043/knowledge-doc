import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { SITE } from "../config";

export async function GET(context) {
  return rss({
    // `<title>` field in output xml
    title: SITE.title,
    // `<description>` field in output xml
    description: SITE.description,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site || "http://localhost:4321",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.{md,mdx}")),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
