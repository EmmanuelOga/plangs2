import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+national-security-agency", "National Security Agency", {
    websites: [
      {
        title: "National Security Agency",
        href: "https://en.wikipedia.org/wiki/National_Security_Agency",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
