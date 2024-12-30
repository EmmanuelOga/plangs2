import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+assembly", {
    name: "Assembly",
    description:
      "Low-level language with strong (generally one-to-one) correspondence between the language and the architecture's machine code instructions.",
    extHomeURL: "https://en.wikipedia.org/wiki/Assembly_language",
    keywords: ["assembly"],
  });
}
