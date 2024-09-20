import type { PlangsGraph } from "@plangs/plangs";

import { loadContent } from "./content";
import { Blog } from "./pages/blog";
import { Browse } from "./pages/browse";
import { HtmlContent } from "./pages/html_content";
import { Pl } from "./pages/pl";

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path === "/") return <Browse pg={pg} />;
  if (path === "/about") return <HtmlContent content={await loadContent("about.md")} />;
  if (path === "/blog") return <Blog pg={pg} />;

  if (path.startsWith("/blog/") && path.length < 512) {
    const post = pg.nodes.post.get(`post+${path.slice(6)}`);
    if (post?.path) return <HtmlContent content={await loadContent(post.path)} />;
    console.warn(`Blog post not found: ${path}`);
  }

  if (path.startsWith("/pl/") && path.length < 64) {
    const pl = pg.nodes.pl.get(`pl+${path.slice(4)}`);
    if (pl) return <Pl pg={pg} pl={pl} />;
  }
}
