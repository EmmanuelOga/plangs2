import { Glob } from "bun";

// @ts-ignore types for these?
import { basename, join } from "node:path";

import { marked } from "marked";
import YAML from "yaml";

import type { NPlang, PlangsGraph, StrDate } from "@plangs/plangs";
import { parseDate } from "@plangs/plangs/util";

import { ZERO_WIDTH } from "./util";

/** Markdown Content and metadata generated from the .md files on packages/server/content/ */
export type Content = {
  author: string;
  basename: string;
  date: StrDate;
  html: string;
  plKeys: NPlang["key"][];
  title: string;
};

/** {@param path} relative to the content/ folder (ex: "about.md"). */
export async function loadContent(path: string): Promise<Content> {
  const date = parseDate(basename(path));
  if (!date) throw new Error(`Post ${path} is missing a date in the filename.`);

  const src = await Bun.file(join(import.meta.dir, "../content", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, mdBody] = match;

  const { title, author, plKeys } = YAML.parse(yaml);
  if (!title || !author) throw new Error(`Post ${path} is missing a title or author in the YAML header.`);
  if (plKeys !== undefined && !Array.isArray(plKeys)) throw new Error(`Post ${path} has an invalid plKeys field in the YAML header.`);

  const htmlContent = await marked.parse(`${date}\n# ${title}\n\n${mdBody}`.replace(ZERO_WIDTH, ""));

  return { title, author, plKeys: plKeys ?? [], date, html: htmlContent, basename: basename(path).replace(/\.md$/, "") };
}

/**
 * Scan the content folder and create matching NPost entries.
 */
export async function createNPosts(pg: PlangsGraph) {
  for await (const path of new Glob("*.md").scan(join(import.meta.dir, "../content/posts"))) {
    const { title, author, plKeys, date, basename } = await loadContent(`posts/${path}`);

    const post = pg.nodes.post.set(`post+${basename}`, { path, title, author, date });

    post.link = { href: `/blog/${post.plainKey}`, title, kind: "plangsPost" };

    for (const plKey of plKeys) {
      if (!pg.nodes.pl.has(plKey)) throw new Error(`Post ${path} references unknown PL ${plKey}`);
      post.addPls([plKey]);
    }
  }
}