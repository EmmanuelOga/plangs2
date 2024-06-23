import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+zx-spectrum", "ZX Spectrum, +, 128, +2, +3", {
    websites: [
      { kind: "wikipedia", title: "ZX Spectrum, +, 128, +2, +3", href: "https://en.wikipedia.org/wiki/ZX_Spectrum" },
    ],
  });

  /**/
}
