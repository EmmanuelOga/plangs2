import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+language-oriented", "language oriented programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "language oriented programming",
        href: "https://en.wikipedia.org/wiki/Language_oriented_programming",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+lazy", "Lazy", {
    websites: [{ kind: "wikipedia", title: "lazy", href: "https://en.wikipedia.org/wiki/Lazy_evaluation" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+literate", "Literate", {
    websites: [{ kind: "wikipedia", title: "Literate", href: "https://en.wikipedia.org/wiki/Literate_programming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+logic", "logic", {
    websites: [
      { kind: "wikipedia", title: "logic", href: "https://en.wikipedia.org/wiki/Logic_programming" },
      { kind: "wikipedia", title: "Logic Programming", href: "https://en.wikipedia.org/wiki/Logic_Programming" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+low-code", "Low-code", {
    websites: [
      { kind: "wikipedia", title: "Low-code", href: "https://en.wikipedia.org/wiki/Low-code_development_platform" },
    ],
  });
}
