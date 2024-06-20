import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+Ulf-Norell", "Ulf Norell", []);

  lb.define("person+Urban-Muller", "Urban Müller", []);

  lb.define("person+Uwe-Zdun", "Uwe Zdun", []);
}
