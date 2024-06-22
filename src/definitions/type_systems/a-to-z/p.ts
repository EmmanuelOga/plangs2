import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+parametric", "Parametric", [
    { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/parametric_polymorphism", kind: "wikipedia" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("tsys+polymorphic", "Polymorphic", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
      kind: "wikipedia",
    },
  ]);
}
