import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+dependent", "Dependent", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/dependent_type",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("tsys+duck", "Duck", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/duck_typing",
      kind: "wikipedia",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("tsys+dynamic", "Dynamic", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/dynamic_typing",
      kind: "wikipedia",
    },
  ]);
}
