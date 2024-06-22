import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+fpga", "FPGA", {
    websites: [
      { kind: "wikipedia", title: "FPGA", href: "https://en.wikipedia.org/wiki/Field_Programmable_Gate_Array" },
    ],
  });

  /**/

  lb.define("platf+fuchsia", "Google Fuchsia", {
    websites: [{ kind: "wikipedia", title: "Google Fuchsia", href: "https://en.wikipedia.org/wiki/Google_Fuchsia" }],
  });

  /**/
}
