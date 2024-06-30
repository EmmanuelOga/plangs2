import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+class").merge({
    name: "class-based",
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
      { kind: "wikipedia", title: "Class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
    ],
  });

  /**/
}
