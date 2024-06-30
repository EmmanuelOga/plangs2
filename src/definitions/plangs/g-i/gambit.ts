import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+gambit").merge({
    name: "Gambit",
    websites: [
      { kind: "wikipedia", title: "Gambit", href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)" },
    ],
    releases: [{ version: "4.9.5", date: "2023-01-01", kind: "stable" }],
  });
}
