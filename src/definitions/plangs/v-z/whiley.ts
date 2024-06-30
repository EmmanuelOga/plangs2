import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+whiley").merge({
    name: "Whiley",
    websites: [
      { kind: "wikipedia", title: "Whiley", href: "https://en.wikipedia.org/wiki/Whiley_(programming_language)" },
    ],
    releases: [{ version: "0.6.1", date: "2022-01-01", kind: "stable" }],
  });
}
