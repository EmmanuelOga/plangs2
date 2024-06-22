import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+watchos", "watchOS", {
    websites: [{ kind: "wikipedia", title: "watchOS", href: "https://en.wikipedia.org/wiki/WatchOS" }],
  });
}
