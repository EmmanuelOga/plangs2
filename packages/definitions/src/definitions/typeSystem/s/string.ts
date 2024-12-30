import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+string", {
    name: "String",
    description: "Handling and validation of types through strings.",
    extHomeURL: "https://en.wikipedia.org/wiki/String_(programming)",
    keywords: ["string"],
  });
}
