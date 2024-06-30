import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+mach", "Mach", {
    websites: [{ kind: "wikipedia", title: "Mach", href: "https://en.wikipedia.org/wiki/Mach_(kernel)" }],
  });
}
