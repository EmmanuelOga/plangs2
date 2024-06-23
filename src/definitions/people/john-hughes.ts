import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+john-hughes", "John Hughes", {
    websites: [
      {
        title: "John Hughes",
        href: "https://en.wikipedia.org/wiki/John_Hughes_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
