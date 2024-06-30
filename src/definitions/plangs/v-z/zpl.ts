import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+zpl").merge({
    name: "ZPL",
    websites: [
      { kind: "wikipedia", title: "ZPL", href: "https://en.wikipedia.org/wiki/ZPL_(programming_language)" },
      {
        kind: "homepage",
        title: "www.cs.washington.edu",
        href: "https://web.archive.org/web/20060211013421/http://www.cs.washington.edu/research/zpl/home/",
      },
      { kind: "homepage", title: "[1]", href: "https://research.cs.washington.edu/zpl/home/index.html" },
    ],
  });
}
