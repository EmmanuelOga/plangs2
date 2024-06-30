import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+faust").merge({
    name: "FAUST",
    websites: [
      { kind: "wikipedia", title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)" },
    ],
    releases: [{ version: "2.60.3", date: "2023-01-01", kind: "stable" }],
  });
}
