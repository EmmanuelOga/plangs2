import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+nintendo_switch", "Nintendo Switch", {
    websites: [{ kind: "wikipedia", title: "Nintendo Switch", href: "https://en.wikipedia.org/wiki/Nintendo_Switch" }],
  });

  /**/
}
