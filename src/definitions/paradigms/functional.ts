import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+functional", {
    name: "functional",
    websites: [
      { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming" },
      { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming_language" },
      {
        kind: "wikipedia",
        title: "Purely functional",
        href: "https://en.wikipedia.org/wiki/Purely_functional_programming",
      },
      {
        kind: "wikipedia",
        title: "functional reactive",
        href: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
      },
    ],
  });
}
