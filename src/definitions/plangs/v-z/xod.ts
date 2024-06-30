import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+xod").merge({
    name: "XOD",
    websites: [{ kind: "wikipedia", title: "XOD", href: "https://en.wikipedia.org/wiki/XOD_(programming_language)" }],
    releases: [{ version: "0.38.0", date: "2021-01-01", kind: "stable" }],
  });
}
