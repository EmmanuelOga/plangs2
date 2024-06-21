import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+object-arts", "Object Arts", []);

  //-------------------------------------------------------------------------------

  lb.define("person+ola-bini", "Ola Bini", []);

  //-------------------------------------------------------------------------------

  lb.define("person+ole-johan-dahl", "Ole-Johan Dahl", [
    { title: "Ole-Johan Dahl", href: "https://en.wikipedia.org/wiki/Ole-Johan_Dahl", kind: "wikipedia" },
  ]);
}
