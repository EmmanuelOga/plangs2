import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+arc").merge({
    name: "Arc",
    websites: [{ kind: "wikipedia", title: "Arc", href: "https://en.wikipedia.org/wiki/Arc_(programming_language)" }],
    releases: [{ version: "3.2", date: "2018-01-01", kind: "stable" }],
  });
}
