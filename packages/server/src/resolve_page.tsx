import type { JSX } from "preact/jsx-runtime";

import type { PlangsGraph } from "@plangs/plangs";

import { loadContent } from "./content";
import { Layout } from "./layout";
import { Blog } from "./pages/blog";
import { Browse } from "./pages/browse";
import { HtmlContent } from "./pages/html_content";
import { Pl } from "./pages/pl";

export async function resolvePage(path: string, pg: PlangsGraph) {
  let content: JSX.Element | undefined;

  if (path === "/") content = <Browse pg={pg} />;
  if (path === "/about") content = <HtmlContent content={await loadContent("about.md")} />;
  if (path === "/blog") content = <Blog pg={pg} />;

  if (path.startsWith("/blog/") && path.length < 512) {
    const post = pg.nodes.post.get(`post+${path.slice(6)}`);
    if (post?.path) content = <HtmlContent content={await loadContent(post.path)} />;
    console.warn(`Blog post not found: ${path}`);
    return;
  }

  if (path.startsWith("/pl/") && path.length < 64) {
    const pl = pg.nodes.pl.get(`pl+${path.slice(4)}`);
    if (pl) content = <Pl pg={pg} pl={pl} />;
  }

  if (content) return <Layout>{content}</Layout>;
}
