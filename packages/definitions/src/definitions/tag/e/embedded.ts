import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+embedded", {
    name: "Embedded System",
    description:
      "Combination of hardware and software designed to perform a dedicated function.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded system", "firmware", "real-time systems"],
  });
}
