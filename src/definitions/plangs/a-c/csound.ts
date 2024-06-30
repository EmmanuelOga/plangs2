import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+csound").merge({
    name: "Csound",
    websites: [{ kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" }],
    releases: [{ version: "6.18.1", date: "2022-01-01", kind: "stable" }],
  });
}
