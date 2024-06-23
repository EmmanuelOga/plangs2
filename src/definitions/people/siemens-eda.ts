import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+siemens-eda", "Siemens EDA", {
    websites: [
      {
        title: "Siemens EDA",
        href: "https://en.wikipedia.org/wiki/Siemens_Digital_Industries_Software",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
