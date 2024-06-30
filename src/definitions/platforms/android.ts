import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+android", "Android", {
    websites: [
      { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Android_(operating_system)" },
    ],
  });
}
