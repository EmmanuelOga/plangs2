import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+gnu", "GNU", {
    websites: [{ kind: "wikipedia", title: "GNU", href: "https://en.wikipedia.org/wiki/GNU" }],
  });
}
