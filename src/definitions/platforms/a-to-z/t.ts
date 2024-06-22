import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+tvos", "tvOS", [{ kind: "wikipedia", title: "tvOS", href: "https://en.wikipedia.org/wiki/TvOS" }]);
}
