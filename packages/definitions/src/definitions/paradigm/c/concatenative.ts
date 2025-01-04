import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+concatenative", {
    name: "Concatenative",
    description:
      "A point-free programming language in which all expressions denote functions, and the juxtaposition of expressions denotes function composition.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/Concatenative_programming_language",
    keywords: ["concatenative"],
  });
}
