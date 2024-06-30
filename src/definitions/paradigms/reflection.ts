import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+reflection").merge({
    name: "reflective",
    websites: [
      { kind: "wikipedia", title: "Reflective", href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)" },
      {
        kind: "wikipedia",
        title: "reflective",
        href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
      },
    ],
  });
}
