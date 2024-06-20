import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+hindley-milner", "Hindley-Milner", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/hindley%e2%80%93milner_type_system",
      kind: "wikipedia",
    },
  ]);
}
