import { Glob } from "bun";

// @ts-ignore types for these?
import { basename, join } from "node:path";

import { marked } from "marked";
import render from "preact-render-to-string/jsx";
import YAML from "yaml";

import { Pill } from "@plangs/frontend/components/misc/pill";
import { parseDate } from "@plangs/plangs/auxiliar/str_date";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { VPostKey } from "@plangs/plangs/graph/generated";
import type { StrDate } from "@plangs/plangs/graph/vertex_data_schemas";

import { ZERO_WIDTH } from "./utils/server";

/** Markdown Content and metadata generated from the .md files on packages/server/content/ */
export type Content = {
  basename: string;
  date: StrDate;
  html: string;
  rels: string[];
  title: string;
};

const YAML_KEYS = new Set(["title", "rels", "hideMeta"]);

/** {@param path} relative to the content/ folder (ex: "about.md"). */
export async function loadContent(path: string, pg: PlangsGraph): Promise<Content> {
  const date = parseDate(basename(path).slice(0, 10));
  if (!date) throw new Error(`Post ${path} is missing a date in the filename.`);

  const src = await Bun.file(join(import.meta.dir, "../content", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, mdBody] = match;

  const data = YAML.parse(yaml);
  const { title, rels, hideMeta } = data;

  const unknown = new Set(Object.keys(data)).difference(YAML_KEYS);
  if (unknown.size) throw new Error(`Post ${path} has unknown fields in the YAML header: ${[...unknown].join(", ")}`);

  if (!title) throw new Error(`Post ${path} is missing a title in the YAML header.`);

  const metadata = [
    render(
      <Pill>
        <time datetime={date}>{date}</time>
      </Pill>,
    ),
  ];

  if (rels !== undefined) {
    if (!Array.isArray(rels)) throw new Error(`Post ${path} has an invalid rels field in the YAML header.`);
    if (rels.length > 0) {
      // Put authors last.
      rels.sort((a, b) => {
        const aIsAuthor = a.startsWith("author");
        const bIsAuthor = b.startsWith("author");
        if (aIsAuthor && !bIsAuthor) return 1;
        if (!aIsAuthor && bIsAuthor) return -1;
        return a.localeCompare(b);
      });

      for (const vertexKey of rels) {
        const v = pg.getVertex(vertexKey);
        if (!v) throw new Error(`Post ${path} references unknown vertex ${vertexKey}`);
        const link = (
          <Pill>
            <a class="mr-1" href={v.href} title={v.vertexDesc}>
              {v.vertexKind === "author" ? v.plainKey : v.name}
            </a>
          </Pill>
        );
        metadata.push(render(link));
      }
    }
  }
  const klass = `flex flex-row flex-wrap${hideMeta ? " hidden" : ""}`;
  const dateAndLinks = `<div class="${klass}">${metadata.join("")}</div>`;
  const md = `${dateAndLinks}\n\n# ${title}\n\n${mdBody.replace(ZERO_WIDTH, "")}`;
  const html = await marked.use(customHeadingId()).parse(md);

  return { title, rels: rels ?? [], date, html, basename: basename(path).replace(/\.md$/, "") };
}

/**
 * Scan the content folder and create matching VPost entries.
 */
export async function loadPosts(pg: PlangsGraph) {
  for await (const path of new Glob("*.md").scan(join(import.meta.dir, "../content/posts"))) {
    const { title, rels, date, basename } = await loadContent(`posts/${path}`, pg);
    const post = pg.post.set(`post+${basename}`, { path, name: title, date });
    // Add the post to the related vertices for "news" sections of vertices that support it.
    for (const vkey of rels) {
      const vertex = pg.getVertex(vkey);
      if (!vertex) throw new Error(`Post ${path} references unknown vertex ${vkey}`);
      if ("relPosts" in vertex) vertex.relPosts.add(post.key);
      else console.warn(`Vertex ${vkey} does not have a relPosts field.`);
    }
  }
}

export async function loadBlogPost(pg: PlangsGraph, key: VPostKey): Promise<Content | undefined> {
  const post = pg.post.get(key);
  if (post?.path) return loadContent(`posts/${post.path}`, pg);
}

/** Add a link to headings other than h1. */
export function customHeadingId() {
  return {
    useNewRenderer: true,
    renderer: {
      heading({ text, depth }: { text: string; depth: number }) {
        const cssId = text.toLowerCase().replace(/[^\w]+/g, "-");
        const link = `<a class="px-2 text-foreground opacity-30 group-hover:opacity-90 decoration-0" href="#${cssId}">#</a>`;
        return `<h${depth} class="group" id="${cssId}">${text}${depth > 1 ? link : ""}</h${depth}>\n`;
      },
    },
  };
}
