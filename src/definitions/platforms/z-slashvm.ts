import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+z-slashvm", "z/VM", {
    websites: [{ kind: "wikipedia", title: "z/VM", href: "https://en.wikipedia.org/wiki/Z/VM" }],
  });
}
