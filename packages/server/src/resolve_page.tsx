import type { PlangsGraph } from "@plangs/plangs";

import { loadBlogPost, loadContent } from "./content";
import { About } from "./pages/about";
import { Apps } from "./pages/apps";
import { Blog } from "./pages/blog";
import { BlogPost } from "./pages/blog_post";
import { Libs } from "./pages/libs";
import { Licenses } from "./pages/licenses";
import { Paradigms } from "./pages/paradigms";
import { Pl } from "./pages/pl";
import { Plangs } from "./pages/plangs";
import { Platforms } from "./pages/platforms";
import { Tags } from "./pages/tags";
import { Tools } from "./pages/tools";
import { TSys } from "./pages/tsys";

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path === "/") return <Plangs pg={pg} />;
  if (path === "/apps") return <Apps pg={pg} />;
  if (path === "/blog") return <Blog pg={pg} />;
  if (path === "/libs") return <Libs pg={pg} />;
  if (path === "/licenses") return <Licenses pg={pg} />;
  if (path === "/paradigms") return <Paradigms pg={pg} />;
  if (path === "/platforms") return <Platforms pg={pg} />;
  if (path === "/tags") return <Tags pg={pg} />;
  if (path === "/tools") return <Tools pg={pg} />;
  if (path === "/tsys") return <TSys pg={pg} />;

  if (path === "/about") return <About content={await loadContent("2024_09_20_about.md", pg)} />;

  if (path.startsWith("/blog/") && path.length < 512) {
    const post = await loadBlogPost(pg, `post+${path.slice(6)}`);
    if (post) return <BlogPost post={post} />;
    console.warn(`Blog post not found: ${path}`);
    return;
  }

  if (path.startsWith("/") && path.length > 1 && path.length < 32) {
    const pl = pg.nodes.pl.get(`pl+${path.slice(1)}`);
    if (pl) return <Pl pl={pl} />;
    return;
  }
}
