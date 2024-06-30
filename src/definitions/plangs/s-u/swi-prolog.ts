import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+swi-prolog").merge({
    name: "SWI-Prolog",
    websites: [{ kind: "wikipedia", title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog" }],
    releases: [
      { version: "9.2.2", date: "2024-01-01", kind: "stable" },
      { version: "9.3.2", date: "2024-01-01", kind: "preview" },
    ],
  });
}
