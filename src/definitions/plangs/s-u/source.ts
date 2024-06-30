import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+source").merge({
    name: "Source",
    websites: [
      { kind: "wikipedia", title: "Source", href: "https://en.wikipedia.org/wiki/Source_(programming_language)" },
    ],
    releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
  });
}
