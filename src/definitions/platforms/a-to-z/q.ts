import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+qnx", "QNX", {
    websites: [{ kind: "wikipedia", title: "QNX", href: "https://en.wikipedia.org/wiki/QNX" }],
  });

  /**/
}
