import { basename, join } from "node:path";
import { Glob } from "bun";

import { type MarkedExtension, type Tokens, marked } from "marked";
import render from "preact-render-to-string";
import YAML from "yaml";

import { type StrDate, parseDate } from "@plangs/auxiliar/str_date";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { PlangsGraph } from "@plangs/plangs/graph";

import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { ZERO_WIDTH } from "./utils/server";

/** Markdown Content and metadata generated from the .md files on packages/server/content/ */
export type Content = {
  basename: string;
  date: StrDate;
  html: string;
  rels: string[];
  title: string;
  keyFound: Set<string>;
  keyNotFound: Set<string>;
};

const YAML_KEYS = new Set(["title", "rels", "hideMeta"]);

/** {@param path} relative to the content/ folder (ex: "about.md"). */
export async function loadContent(path: string, pg: PlangsGraph): Promise<Content> {
  const renderVertices = (keys: string[], pill = true) =>
    keys
      .map(key => {
        const v = pg.getVertex(key);
        if (!v) throw new Error(`Post ${path} references unknown vertex: ${key}`);
        return v;
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(v => render(vertexLink(v, pill)));

  const date = parseDate(basename(path).slice(0, 10));
  if (!date) throw new Error(`Post ${path} is missing a date in the filename.`);

  const src = await Bun.file(join(import.meta.dir, "../content", path)).text();

  const match = src.match(/^(.*?)\n---\n(.*)$/s);
  if (!match) throw new Error(`Post ${path} is missing a YAML header.`);
  const [_, yaml, mdBody] = match;

  const data = YAML.parse(yaml);
  if (data.rels && !Array.isArray(data.rels)) throw new Error(`Post ${path} has an invalid rels field in the YAML header.`);
  const { title, hideMeta } = data;

  const unknown = new Set(Object.keys(data)).difference(YAML_KEYS);
  if (unknown.size) throw new Error(`Post ${path} has unknown fields in the YAML header: ${[...unknown].join(", ")}`);

  if (!title) throw new Error(`Post ${path} is missing a title in the YAML header.`);

  const keyFound = new Set<string>();
  const keyNotFound = new Set<string>();

  const forHeader = [render(<time datetime={date} children={date} />), ...renderVertices(data.rels ?? [], false)];
  const klass = `flex flex-row flex-wrap${hideMeta ? " hidden" : ""}`;
  const htmlHeader = `<div class="${klass} gap-4 italic opacity-80">${forHeader.join("")}</div>`;

  // Parse the markdown body: as a side effect, it will populate the found and not found sets.
  const htmlBody = await marked
    .use(plangsMarkdown(pg, keyFound, keyNotFound))
    .parse(`${htmlHeader}\n\n# ${title}\n\n${mdBody.replace(ZERO_WIDTH, "")}`);

  const forFooter = renderVertices(Array.from(keyFound));
  const boxy = "bg-secondary/10 ring-1 ring-primary/15 p-4 mt-[4rem]";
  const htmlFooter = `<div class="${klass} ${boxy}">${forFooter.join("")}</div>`;

  return {
    title,
    rels: [...(data.rels ?? []), ...Array.from(keyFound)],
    date,
    html: `${htmlBody}\n${htmlFooter}`,
    basename: basename(path).replace(/\.md$/, ""),
    keyFound,
    keyNotFound,
  };
}

function vertexLink(v: TPlangsVertex, pill: boolean) {
  const link = (
    <a href={v.href} title={v.vertexDesc} class={tw("inline-block", "mr-1", v.vertexKind === "author" && "uppercase")}>
      {v.vertexKind === "author" ? v.plainKey : v.name}
    </a>
  );
  return pill ? <Pill>{link}</Pill> : link;
}

/**
 * Scan the content folder and create matching VPost entries.
 */
export async function loadPosts(pg: PlangsGraph) {
  for await (const path of new Glob("*.md").scan(join(import.meta.dir, "../content/posts"))) {
    const { title, rels, date, basename } = await loadContent(`posts/${path}`, pg);
    const post = pg.post.set(`post+${basename}`, { path, name: title, created: date });
    // Add the post to the related vertices for "news" sections of vertices that support it.
    for (const vkey of rels) {
      const vertex = pg.getVertex(vkey);
      if (!vertex) throw new Error(`Post ${path} references unknown vertex ${vkey}`);
      if ("relPosts" in vertex) vertex.relPosts.add(post.key);
      else console.warn(`Vertex ${vkey} does not have a relPosts field.`);
    }
  }
}

const REFS = /\(([a-z]+)\+([a-zA-Z0-9\_\+\-]+)\)/g; // Matches (kind+key) references.

/** Process markdown adding some custom features. */
export function plangsMarkdown(pg: PlangsGraph, keyFound: Set<string>, keyNotFound: Set<string>): MarkedExtension {
  return {
    useNewRenderer: true,
    renderer: {
      heading({ text, depth }: { text: string; depth: number }) {
        const cssId = text.toLowerCase().replace(/[^\w]+/g, "-");
        const link = `<a class="px-2 text-foreground opacity-30 group-hover:opacity-90 decoration-0" href="#${cssId}">#</a>`;
        return `<h${depth} class="group" id="${cssId}">${text}${depth > 1 ? link : ""}</h${depth}>\n`;
      },
      text(token: Tokens.Text | Tokens.Escape | Tokens.Tag) {
        if (token.type === "text") {
          return token.text.replaceAll(REFS, (match, kind, plainKey) => {
            const key = `${kind}+${plainKey}`;
            const vertex = pg.getVertex(key);

            if (!vertex) {
              keyNotFound.add(key);
              return match;
            }

            // Only link the first occurrence of each vertex.
            if (keyFound.has(vertex.key)) return vertex.name;
            keyFound.add(vertex.key);

            return `<a href="${vertex.href}">${vertex.name}</a>`;
          });
        }
        return token.text;
      },
    },
  };
}
