import { Glob } from "bun";

// @ts-ignore types for these?
import { basename, join } from "node:path";

import { marked } from "marked";
import render from "preact-render-to-string/jsx";
import YAML from "yaml";

import type { NPlang, NPost, PlangsGraph } from "@plangs/plangs";
import type { StrDate } from "@plangs/plangs/schema";
import { parseDate } from "@plangs/plangs/util";

import { Pill } from "@plangs/frontend/components/misc/pill";

import { ZERO_WIDTH } from "./utils/server";

/** Markdown Content and metadata generated from the .md files on packages/server/content/ */
export type Content = {
  author: string;
  basename: string;
  date: StrDate;
  html: string;
  pls: NPlang["key"][];
  title: string;
};

const YAML_KEYS = new Set(["title", "author", "pls", "hideDate"]);

/** {@param path} relative to the content/ folder (ex: "about.md"). */
export async function loadContent(path: string, pg: PlangsGraph): Promise<Content> {
  const date = parseDate(basename(path));
  if (!date) throw new Error(`Post ${path} is missing a date in the filename.`);

  const src = await Bun.file(join(import.meta.dir, "../content", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, mdBody] = match;

  const data = YAML.parse(yaml);
  const { title, author, pls, hideDate } = data;

  const unknown = new Set(Object.keys(data)).difference(YAML_KEYS);
  if (unknown.size) throw new Error(`Post ${path} has unknown fields in the YAML header: ${[...unknown].join(", ")}`);

  if (!title || !author) throw new Error(`Post ${path} is missing a title or author in the YAML header.`);

  const pills = [render(<Pill key={date} nodeKey={date} kind={"--date--"} name={date} />, { pretty: true })];
  if (pls !== undefined) {
    if (!Array.isArray(pls)) throw new Error(`Post ${path} has an invalid pls field in the YAML header.`);
    if (pls.length > 0) {
      for (const plKey of pls) {
        const pl = pg.nodes.pl.get(plKey);
        if (!pl) throw new Error(`Post ${path} references unknown PL ${plKey}`);
        pills.push(render(<Pill key={pl.key} nodeKey={pl.key} kind={pl.kind} name={pl.name} />, { pretty: true }));
      }
    }
  }

  const pillsHtml = `<div style="float: right;" class="${hideDate ? "hidden" : ""}">${pills.join("")}</div>`;
  const md = `${pillsHtml}\n\n# ${title}\n\n${mdBody.replace(ZERO_WIDTH, "")}`;
  const html = await marked.use(customHeadingId()).parse(md);

  return { title, author, pls: pls ?? [], date, html, basename: basename(path).replace(/\.md$/, "") };
}

/**
 * Scan the content folder and create matching NPost entries.
 */
export async function loadPosts(pg: PlangsGraph) {
  for await (const path of new Glob("*.md").scan(join(import.meta.dir, "../content/posts"))) {
    const { title, author, pls, date, basename } = await loadContent(`posts/${path}`, pg);

    const post = pg.nodes.post.set(`post+${basename}`, { path, name: title, author, date });

    post.link = { href: `/blog/${post.plainKey}`, title, kind: "plangs" };

    for (const plKey of pls) {
      if (!pg.nodes.pl.has(plKey)) throw new Error(`Post ${path} references unknown PL ${plKey}`);
      post.addPls([plKey]);
    }
  }
}

export async function loadBlogPost(pg: PlangsGraph, key: NPost["key"]): Promise<Content | undefined> {
  const post = pg.nodes.post.get(key);
  if (post?.path) return loadContent(`posts/${post.path}`, pg);
}

/**
 * Add a css ID to headings.
 * Lifted from https://github.com/markedjs/marked-custom-heading-id
 */
export function customHeadingId() {
  return {
    useNewRenderer: true,
    renderer: {
      heading({ text, depth }: { text: string; depth: number }) {
        const headingIdRegex = /(?: +|^)\{#([a-z][\w-]*)\}(?: +|$)/i;
        const hasId = text.match(headingIdRegex);
        if (!hasId) {
          // fallback to original heading renderer
          return false;
        }
        return `<h${depth} id="${hasId[1]}">${text.replace(headingIdRegex, "")}</h${depth}>\n`;
      },
    },
  };
}
