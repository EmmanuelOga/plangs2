import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+birger-m-ller-pedersen", "Birger Møller-Pedersen", {
    websites: [
      {
        title: "Birger Møller-Pedersen",
        href: "https://en.wikipedia.org/wiki/Birger_M%C3%B8ller-Pedersen",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
