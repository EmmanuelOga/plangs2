import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+concatenative").merge({
    name: "concatenative",
    websites: [
      {
        kind: "wikipedia",
        title: "concatenative",
        href: "https://en.wikipedia.org/wiki/Concatenative_programming_language",
      },
      { kind: "wikipedia", title: "Concatenative", href: "https://en.wikipedia.org/wiki/Concatenative_programming" },
    ],
  });
}
