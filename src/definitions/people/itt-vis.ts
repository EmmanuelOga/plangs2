import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+itt-vis", "ITT VIS", {
    websites: [
      {
        title: "ITT Visual Information Solutions (ITT VIS)",
        href: "https://en.wikipedia.org/wiki/ITT_Visual_Information_Solutions",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
