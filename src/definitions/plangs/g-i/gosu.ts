import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gosu").merge({
    name: "Gosu",
    websites: [{ kind: "wikipedia", title: "Gosu", href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)" }],
    releases: [{ version: "1.17.10", date: "2024-01-01", kind: "stable" }],
  });
}
