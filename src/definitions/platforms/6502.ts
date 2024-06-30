import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+6502", "MOS Technology 6502", {
    websites: [
      { kind: "wikipedia", title: "MOS Technology 6502", href: "https://en.wikipedia.org/wiki/MOS_Technology_6502" },
    ],
  });
}
