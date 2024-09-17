import { Glob } from "bun";
import { basename } from "node:path";

import { marked } from "marked";
import YAML from "yaml";

import type { NPlang, PlangsGraph } from "@plangs/plangs/index";

import { packagesPath, parseDate } from "./util";

async function postPaths(): Promise<string[]> {
  const glob = new Glob("**/*.md");
  const postPaths: string[] = [];
  for await (const path of glob.scan(packagesPath("server/posts"))) {
    postPaths.push(path);
  }
  return postPaths.sort((a, b) => b.localeCompare(a));
}

// biome-ignore lint/suspicious/noExplicitAny: we don't know what the header will look like.
async function loadBlogPost(path: string): Promise<{ header: any; html: string }> {
  const src = await Bun.file(packagesPath("server/posts", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, md] = match;

  const header = YAML.parse(yaml);
  // biome-ignore lint/suspicious/noMisleadingCharacterClass: remove zero width characters
  const html = await marked.parse(md.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""));

  return { header, html };
}

/**
 * Scan the blog posts folder and create NPost entries.
 */
export async function loadBlogPosts(pg: PlangsGraph) {
  const errors = [];

  for (const path of await postPaths()) {
    const { header } = await loadBlogPost(path);
    const { title, author, pls } = header;
    const date = parseDate(basename(path));

    if (date === undefined) {
      errors.push(`Invalid date in post ${path}`);
      continue;
    }

    if (date && typeof title === "string" && typeof author === "string" && (pls === undefined || Array.isArray(pls))) {
      const post = pg.nodes.post.set(`post+${basename(path).replace(/\.md$/, "")}`, { path, title, author, date });

      post.link = { href: `/blog/${post.plainKey}`, title, kind: "plangsPost" };

      for (const plKey of pls ?? []) {
        const pl = pg.nodes.pl.get(plKey as NPlang["key"]);
        if (!pl) {
          errors.push(`Post ${path} references unknown PL ${plKey}`);
          continue;
        }
        pl.addPosts([post.key]);
      }

      continue;
    }

    errors.push(`Invalid header for post ${path}: ${JSON.stringify(header)}`);
  }

  if (errors.length) throw new Error(errors.join("\n"));
}

// const pg = new PlangsGraph();
// await loadAllDefinitions(pg);
// await loadBlogPosts(pg);
