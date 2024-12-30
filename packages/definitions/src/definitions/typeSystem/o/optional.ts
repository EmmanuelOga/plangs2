import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.typeSystem.set("tsys+optional", {
    name: "Optional",
    description: "Allows for type annotations to be included or omitted, offering flexibility between static and dynamic typing.",
    extHomeURL: "https://en.wikipedia.org/wiki/Optional_typing",
    keywords: ["optional"],
  });
}
