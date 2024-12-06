import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { loadBlogPost, loadContent } from "./content";

import type { PlangsPage } from "./components/layout";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { BlogPost } from "./pages/blog-post";
import { Licenses } from "./pages/licenses";
import { Paradigms } from "./pages/paradigms";
import { Platforms } from "./pages/platforms";
import { Tags } from "./pages/tags";
import { TSys } from "./pages/tsys";
import { Vertex } from "./pages/vertex";
import { VertexGrid } from "./pages/vertex-grid";

const GRID_PATHS = new Map<string, { vertexName: TPlangsVertexName; page: PlangsPage }>([
  ["/", { vertexName: "plang", page: "plangs" }],
  ["/plangs", { vertexName: "plang", page: "plangs" }],
  ["/tools", { vertexName: "tool", page: "tools" }],
  ["/apps", { vertexName: "app", page: "apps" }],
  ["/libs", { vertexName: "library", page: "libs" }],
  ["/learning", { vertexName: "learning", page: "learning" }],
  ["/communities", { vertexName: "community", page: "communities" }],
]);

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path.length > 128) return;

  const gp = GRID_PATHS.get(path);
  if (gp) return <VertexGrid pg={pg} page={gp.page} vertexName={gp.vertexName} />;

  if (path === "/blog") return <Blog pg={pg} />;

  // TODO: remove duplication from this "reference" pages.
  if (path === "/licenses") return <Licenses pg={pg} />;
  if (path === "/paradigms") return <Paradigms pg={pg} />;
  if (path === "/platforms") return <Platforms pg={pg} />;
  if (path === "/tags") return <Tags pg={pg} />;
  if (path === "/typesystems" || path === "/typeSystems") return <TSys pg={pg} />;

  if (path === "/about") return <About pg={pg} content={await loadContent("2024_09_20_about.md", pg)} />;

  if (path.startsWith("/blog/") && path.length < 128) {
    const post = await loadBlogPost(pg, `post+${path.slice(6)}`);
    if (post) return <BlogPost pg={pg} post={post} />;
    console.warn(`Blog post not found: ${path}`);
    return;
  }

  /** Routes that are rendered with the {@link <Vertex/>} component. */
  if (path.length < 32 && path.startsWith("/") && path.length > 1) {
    const postSlash = path.slice(1);

    // All routes are expected to be /${vertexName}/${vertexPlainKey} (the key without the kind),
    // ... except for plangs that are the main vertices and can be accessed without the vertexName.
    if (!postSlash.includes("/")) {
      const pl = pg.plang.get(`pl+${postSlash}`);
      if (pl) return <Vertex pg={pg} vertex={pl} />;
    }

    const [vname, vertexKey] = postSlash.split("/");
    if (!vertexKey || vertexKey.length === 0) return;
    const vertexName = (vname === "typesystem" ? "typeSystem" : vname) as TPlangsVertexName;
    if (!PlangsGraph.vertexKind.has(vertexName)) return;

    const kind = PlangsGraph.vertexKind.get(vertexName);
    const vertex = pg[vertexName].get(`${kind}+${vertexKey}` as any);
    if (vertex) return <Vertex pg={pg} vertex={vertex} />;
  }
}
