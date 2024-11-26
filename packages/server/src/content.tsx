import { Glob } from "bun";

// @ts-ignore types for these?
import { basename, join } from "node:path";

import { marked } from "marked";
import render from "preact-render-to-string/jsx";
import YAML from "yaml";

import type { NPost, PlangsGraph, VPlang } from "@plangs/plangs";
import { parseDate } from "@plangs/plangs/auxiliar/str_date";
import type { StrDate } from "@plangs/plangs/schema";

import { ZERO_WIDTH } from "./utils/server";

/** Markdown Content and metadata generated from the .md files on packages/server/content/ */
export type Content = {
  author: string;
  basename: string;
  date: StrDate;
  html: string;
  pls: VPlang["key"][];
  title: string;
};

const YAML_KEYS = new Set(["title", "author", "pls", "hideDate"]);

/** {@param path} relative to the content/ folder (ex: "about.md"). */
export async function loadContent(path: string, pg: PlangsGraph): Promise<Content> {
  const date = parseDate(basename(path.slice(0, 10)));
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

  const metadata = [render(<div class="text-primary opacity-75">{date}</div>)];

  if (pls !== undefined) {
    if (!Array.isArray(pls)) throw new Error(`Post ${path} has an invalid pls field in the YAML header.`);
    if (pls.length > 0) {
      for (const plKey of pls) {
        const pl = pg.plang.get(plKey);
        if (!pl) throw new Error(`Post ${path} references unknown PL ${plKey}`);
        metadata.push(render(<a href={`/${pl.plainKey}`}>{pl.name}</a>));
      }
    }
  }

  const pillsHtml = `<div style="float: right;" class="${hideDate ? "hidden" : ""}">${metadata.join("")}</div>`;
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

    for (const plKey of pls) {
      if (!pg.plang.has(plKey)) throw new Error(`Post ${path} references unknown PL ${plKey}`);
      post.relPlangs.add([plKey]);
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
