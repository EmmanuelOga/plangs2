import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+visionos", "visionOS", {
    websites: [{ kind: "wikipedia", title: "visionOS", href: "https://en.wikipedia.org/wiki/VisionOS" }],
  });
}
