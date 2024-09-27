import type { PlangsGraph } from "@plangs/plangs";

import { loadBlogPost, loadContent } from "./content";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { BlogPost } from "./pages/blog_post";
import { Browse } from "./pages/browse";
import { Pl } from "./pages/pl";

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path === "/") return <Browse pg={pg} />;
  if (path === "/about") return <About content={await loadContent("2024_09_20_about.md")} />;
  if (path === "/blog") return <Blog pg={pg} />;

  if (path.startsWith("/blog/") && path.length < 512) {
    const post = await loadBlogPost(pg, `post+${path.slice(6)}`);
    if (post) return <BlogPost post={post} />;
    console.warn(`Blog post not found: ${path}`);
    return;
  }

  if (path.startsWith("/pl/") && path.length < 64) {
    const pl = pg.nodes.pl.get(`pl+${path.slice(4)}`);
    if (pl) return <Pl pg={pg} pl={pl} />;
    console.warn(`PL not found: ${path}`);
    return;
  }
}
