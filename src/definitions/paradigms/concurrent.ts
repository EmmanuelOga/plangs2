import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+concurrent").merge({
    name: "concurrent",
    websites: [
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_computing" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming_language" },
      {
        kind: "wikipedia",
        title: "Concurrent",
        href: "https://en.wikipedia.org/wiki/Concurrent_object-oriented_programming",
      },
    ],
  });
}
