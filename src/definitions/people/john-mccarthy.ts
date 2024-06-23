import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-mccarthy", "John McCarthy", {
    websites: [
      {
        title: "John McCarthy",
        href: "https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
