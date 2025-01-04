import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+nominal", {
    name: "Nominal",
    description:
      "Compatibility between types is determined by explicit declarations or names, rather than structure.",
    extHomeURL: "https://en.wikipedia.org/wiki/Nominal_type_system",
    keywords: ["nominal", "nominative"],
  });
}
