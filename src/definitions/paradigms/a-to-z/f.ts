import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+function-level", "Function-level", [
    { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+functional", "Functional", [
    { kind: "wikipedia", title: "functional", href: "https://en.wikipedia.org/wiki/Functional_programming" },
    {
      kind: "wikipedia",
      title: "Purely functional",
      href: "https://en.wikipedia.org/wiki/Purely_functional_programming",
    },
    { kind: "wikipedia", title: "Functional", href: "https://en.wikipedia.org/wiki/Functional_programming_language" },
    {
      kind: "wikipedia",
      title: "functional reactive",
      href: "https://en.wikipedia.org/wiki/Functional_reactive_programming",
    },
  ]);
}
