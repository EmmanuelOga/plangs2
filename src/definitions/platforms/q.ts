import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+qnx", "QNX", [{ kind: "wikipedia", title: "QNX", href: "https://en.wikipedia.org/wiki/QNX" }]);
}