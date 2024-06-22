import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+object-arts", "Object Arts", {});

  /**/

  lb.define("person+ola-bini", "Ola Bini", {});

  /**/

  lb.define("person+ole-johan-dahl", "Ole-Johan Dahl", {
    websites: [{ title: "Ole-Johan Dahl", href: "https://en.wikipedia.org/wiki/Ole-Johan_Dahl", kind: "wikipedia" }],
  });

  /**/
}
