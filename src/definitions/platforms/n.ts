import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+nintendo_switch", "Nintendo Switch", [
    {
      kind: "wikipedia",
      title: "Nintendo Switch",
      href: "https://en.wikipedia.org/wiki/Nintendo_Switch",
    },
  ]);
}
