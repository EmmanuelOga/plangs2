import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+insa-lyon", "INSA Lyon", {
    websites: [
      {
        title: "INSA Lyon",
        href: "https://en.wikipedia.org/wiki/Institut_national_des_sciences_appliqu%C3%A9es_de_Lyon",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
