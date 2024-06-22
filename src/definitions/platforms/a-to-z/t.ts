import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+tvos", "tvOS", {
    websites: [{ kind: "wikipedia", title: "tvOS", href: "https://en.wikipedia.org/wiki/TvOS" }],
  });

  /**/
}
