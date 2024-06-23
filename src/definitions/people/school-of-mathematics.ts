import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+school-of-mathematics", "School of Mathematics", {
    websites: [
      {
        title: "School of Mathematics and Statistics",
        href: "https://en.wikipedia.org/wiki/Sydney_School_of_Mathematics_and_Statistics",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
