import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+boomerang").merge({
    name: "Boomerang",
    websites: [
      { kind: "wikipedia", title: "Boomerang", href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)" },
    ],
    releases: [{ version: "0.2", date: "2009-01-01", kind: "stable" }],
  });
}
