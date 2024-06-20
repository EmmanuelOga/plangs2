import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+object-oriented", "Object-Oriented", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/object_(computer_science)",
      kind: "wikipedia",
    },
  ]);

  lb.define("tsys+optional", "Optional", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/optional_typing",
      kind: "wikipedia",
    },
  ]);
}
