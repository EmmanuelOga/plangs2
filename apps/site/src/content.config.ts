import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Legacy post filenames encode the date: `YYYY_MM_DD_slug.md`. */
const frontmatter = z.object({
  title: z.string(),
  /** Legacy vertex keys (e.g. `author+geo`, `pl+python`) related to the entry. */
  rels: z.array(z.string()).default([]),
  hideMeta: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: frontmatter,
});

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: frontmatter,
});

export const collections = { blog, pages };
