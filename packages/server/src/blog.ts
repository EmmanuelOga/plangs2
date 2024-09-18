import { Glob } from "bun";

// @ts-ignore: TODO: find the types for this.
import { basename } from "node:path";

import { marked } from "marked";
import YAML from "yaml";

import type { NPlang, PlangsGraph, StrDate } from "@plangs/plangs/index";

import { packagesPath, parseDate } from "./util";

async function postPaths(): Promise<string[]> {
  const glob = new Glob("**/*.md");
  const postPaths: string[] = [];
  for await (const path of glob.scan(packagesPath("server/posts"))) {
    postPaths.push(path);
  }
  return postPaths.sort((a, b) => b.localeCompare(a));
}

type BlogPost = {
  title: string;
  author: string;
  plKeys: NPlang["key"][];
  date: StrDate;
  htmlContent: string;
};

export async function loadBlogPost(path: string): Promise<BlogPost> {
  const date = parseDate(basename(path));
  if (!date) throw new Error(`Post ${path} is missing a date in the filename.`);

  const src = await Bun.file(packagesPath("server/posts", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, mdBody] = match;

  const { title, author, plKeys } = YAML.parse(yaml);
  if (!title || !author) throw new Error(`Post ${path} is missing a title or author in the YAML header.`);
  if (plKeys !== undefined && !Array.isArray(plKeys)) throw new Error(`Post ${path} has an invalid plKeys field in the YAML header.`);

  const htmlContent = await marked.parse(`${date}\n# ${title}\n\n${mdBody}`.replace(ZERO_WIDTH, ""));

  return { title, author, plKeys: plKeys ?? [], date, htmlContent };
}

// biome-ignore lint/suspicious/noMisleadingCharacterClass: remove zero width characters
const ZERO_WIDTH = /^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/;

/**
 * Scan the blog posts folder and create NPost entries.
 */
export async function loadBlogPosts(pg: PlangsGraph) {
  for (const path of await postPaths()) {
    const { title, author, plKeys, date } = await loadBlogPost(path);

    const post = pg.nodes.post.set(`post+${basename(path).replace(/\.md$/, "")}`, { path, title, author, date });

    post.link = { href: `/blog/${post.plainKey}`, title, kind: "plangsPost" };

    for (const plKey of plKeys) {
      const pl = pg.nodes.pl.get(plKey as NPlang["key"]);
      if (!pl) throw new Error(`Post ${path} references unknown PL ${plKey}`);
      pl.addPosts([post.key]);
    }
  }
}

// const pg = new PlangsGraph();
// await loadAllDefinitions(pg);
// await loadBlogPosts(pg);
