import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+xbox", "Xbox Series X/S", {
    websites: [
      { kind: "wikipedia", title: "Xbox One", href: "https://en.wikipedia.org/wiki/Xbox_One" },
      { kind: "wikipedia", title: "Xbox Series X/S", href: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S" },
    ],
  });
}
