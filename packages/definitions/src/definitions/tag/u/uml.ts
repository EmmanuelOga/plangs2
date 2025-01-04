import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+uml", {
    name: "Unified Modeling Language (UML)",
    description:
      "Standardized modeling language used in software engineering to visualize system architecture and design.",
    extHomeURL: "https://en.wikipedia.org/wiki/Unified_Modeling_Language",
    keywords: ["UML", "software design", "system modeling"],
  });
}
