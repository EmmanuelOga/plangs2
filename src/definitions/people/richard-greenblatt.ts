import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+richard-greenblatt", "Richard Greenblatt", {
    websites: [
      {
        title: "Richard Greenblatt",
        href: "https://en.wikipedia.org/wiki/Richard_Greenblatt_(programmer)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
