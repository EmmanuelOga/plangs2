import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+embedded", {
    name: "Embedded",
    description:
      "Microprocessor-based hardware system with software designed to perform a specific function, often real-time.",
    extHomeURL: "https://en.wikipedia.org/wiki/Embedded_system",
    keywords: ["embedded", "embedded systems", "microcontroller"],
  });
}
