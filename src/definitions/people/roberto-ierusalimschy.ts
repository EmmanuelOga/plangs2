import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+roberto-ierusalimschy", "Roberto Ierusalimschy", {
    websites: [
      {
        title: "Roberto Ierusalimschy",
        href: "https://en.wikipedia.org/wiki/Roberto_Ierusalimschy",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
