import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+d").merge({
    name: "D",
    websites: [
      { kind: "wikipedia", title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)" },
      { kind: "wikipedia", title: "D programming language", href: "https://en.wikipedia.org/wiki/D_language" },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg" },
    ],
    releases: [{ version: "2.108.0", date: "2024-01-01", kind: "stable" }],
  });
}
