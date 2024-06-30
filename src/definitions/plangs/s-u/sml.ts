import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sml").merge({
    name: "SML/NJ",
    websites: [
      { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
      { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
    ],
    releases: [
      { version: "110.99.4", date: "2023-01-01", kind: "stable" },
      { version: "unknown", date: "1997-01-01", kind: "stable" },
    ],
  });
}
