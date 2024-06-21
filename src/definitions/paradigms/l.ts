import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+language-oriented", "language oriented programming", [
    {
      kind: "wikipedia",
      title: "language oriented programming",
      href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+lazy", "Lazy", [
    { kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+literate", "Literate", [
    { kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+logic", "logic", [
    { kind: "wikipedia", title: "logic", href: "https://en.wikipedia.org/wiki/Logic_programming" },
    { kind: "wikipedia", title: "Logic Programming", href: "https://en.wikipedia.org/wiki/Logic_Programming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+low-code", "Low-code", [
    { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
  ]);
}
