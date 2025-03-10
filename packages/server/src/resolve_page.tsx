import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { join } from "node:path";
import type { PlangsPage } from "./components/layout";
import { loadContent } from "./content";
import { Blog } from "./pages/blog";
import { ContentPage } from "./pages/content-page";
import { Edit } from "./pages/edit";
import { Vertex } from "./pages/vertex";
import { VertexGrid } from "./pages/vertex-grid";
import { VertexReference } from "./pages/vertex-reference";

export const GRID_PATHS = new Map<string, { vertexName: TPlangsVertexName; page: PlangsPage }>([
  ["/", { vertexName: "plang", page: "plangs" }],
  ["/apps", { vertexName: "app", page: "apps" }],
  ["/communities", { vertexName: "community", page: "communities" }],
  ["/learning", { vertexName: "learning", page: "learnings" }],
  ["/libraries", { vertexName: "library", page: "libraries" }],
  ["/plangs", { vertexName: "plang", page: "plangs" }],
  ["/subsystems", { vertexName: "subsystem", page: "subsystems" }],
  ["/tools", { vertexName: "tool", page: "tools" }],
]);

export const REFERENCE_PATHS = new Map<string, { vertexName: TPlangsVertexName; page: PlangsPage; heading: string }>([
  ["/licenses", { vertexName: "license", page: "license", heading: "Licenses" }],
  ["/paradigms", { vertexName: "paradigm", page: "paradigm", heading: "Paradigms" }],
  ["/platforms", { vertexName: "platform", page: "platform", heading: "Platforms" }],
  ["/tags", { vertexName: "tag", page: "tag", heading: "Tags" }],
  ["/typeSystems", { vertexName: "typeSystem", page: "typesystems", heading: "Type Systems" }],
  ["/typesystems", { vertexName: "typeSystem", page: "typesystems", heading: "Type Systems" }],
]);

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path.length > 128) return;

  if (path === "/edit") return <Edit />;
  if (path === "/about") return <ContentPage page="about" content={await loadContent("2024_12_31_about.md", pg)} />;

  if (path === "/blog") return <Blog pg={pg} />;
  if (path.startsWith("/blog/") && path.length < 128) {
    const post = pg.post.get(`post+${path.slice(6)}`);
    if (post?.path) {
      const content = await loadContent(join("posts", post.path), pg);
      if (content) return <ContentPage page="blog" content={content} />;
    }
    console.warn(`Blog post not found: ${path}`);
    return;
  }

  const gp = GRID_PATHS.get(path);
  if (gp) return <VertexGrid pg={pg} page={gp.page} vertexName={gp.vertexName} />;

  const rp = REFERENCE_PATHS.get(path);
  if (rp) return <VertexReference pg={pg} page={rp.page} heading={rp.heading} vertexName={rp.vertexName} />;

  /** Routes that are rendered with the {@link <Vertex/>} component. */
  if (path.length < 32 && path.startsWith("/") && path.length > 1) {
    const postSlash = path.slice(1);

    // All routes are expected to be /${vertexName}/${vertexPlainKey} (the key without the kind),
    // ... except for plangs that are the main vertices and can be accessed without the vertexName.
    if (!postSlash.includes("/")) {
      const pl = pg.plang.get(`pl+${postSlash}`);
      if (pl) return <Vertex pg={pg} page={"plang"} vertex={pl} />;
    }

    const [vname, vertexKey] = postSlash.split("/");
    if (!vertexKey || vertexKey.length === 0) return;
    const vertexName = (vname === "typesystem" ? "typeSystem" : vname) as TPlangsVertexName;
    if (!PlangsGraph.vertexKind.has(vertexName)) return;

    const kind = PlangsGraph.vertexKind.get(vertexName);
    const vertex = pg[vertexName].get(`${kind}+${vertexKey}` as any);
    if (vertex) return <Vertex pg={pg} page={vertexName} vertex={vertex} />;
  }
}
