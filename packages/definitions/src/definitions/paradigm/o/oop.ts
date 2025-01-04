import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+oop", {
    name: "Object-Oriented",
    description:
      "Objects can contain data (fields) and code (methods). Programs are made out of objects that interact with one another.",
    extHomeURL: "https://en.wikipedia.org/wiki/Object-orientation",
    keywords: ["class-based", "object", "oop"],
  });
}
