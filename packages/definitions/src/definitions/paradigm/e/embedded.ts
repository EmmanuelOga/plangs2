import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+embedded", {
    name: "Embedded",
    description:
      "Specialized computing systems integrated into larger systems.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded"],
  });
}
