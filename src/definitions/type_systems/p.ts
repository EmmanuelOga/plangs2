import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const tb = g.typeSystemBuilder;

  tb.define("tsys+parametric", "Parametric", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/parametric_polymorphism",
      kind: "wikipedia",
    },
  ]);

  tb.define("tsys+polymorphic", "Polymorphic", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
      kind: "wikipedia",
    },
  ]);
}
