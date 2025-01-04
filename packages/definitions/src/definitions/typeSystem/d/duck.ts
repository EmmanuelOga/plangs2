import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+duck", {
    name: "Duck",
    description:
      "Style of dynamic typing where an object's behavior determines its type rather than its inheritance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Duck_typing",
    keywords: ["duck"],
  });
}
