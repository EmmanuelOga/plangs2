import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+prolog").merge({
    name: "Prolog",
    websites: [{ kind: "wikipedia", title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog" }],
    releases: [{ version: "unknown", date: "1995-01-01", kind: "stable" }],
    extensions: [".P", ".pl", ".pro"],
  });
}
