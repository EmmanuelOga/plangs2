import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+power-isa", "POWERPC64", {
    websites: [{ kind: "wikipedia", title: "Power", href: "https://en.wikipedia.org/wiki/Power_ISA" }],
  });
}
