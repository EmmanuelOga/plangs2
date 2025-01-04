import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+protocol", {
    name: "Protocol-Oriented",
    description:
      "Focuses on the design and use of interfaces or protocols to define program behavior.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
    keywords: ["interface", "protocol"],
  });
}
