import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+apple_ii", "Apple IIGS", {
    websites: [
      { kind: "wikipedia", title: "Apple II series", href: "https://en.wikipedia.org/wiki/Apple_II_series" },
      { kind: "wikipedia", title: "Apple II", href: "https://en.wikipedia.org/wiki/Apple_II" },
      { kind: "wikipedia", title: "Apple IIGS", href: "https://en.wikipedia.org/wiki/Apple_IIGS" },
    ],
  });
}
