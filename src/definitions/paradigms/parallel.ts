import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+parallel").merge({
    name: "parallel",
    websites: [
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_programming" },
      {
        kind: "wikipedia",
        title: "Parallel programming",
        href: "https://en.wikipedia.org/wiki/Parallel_programming_model",
      },
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" },
    ],
  });
}
