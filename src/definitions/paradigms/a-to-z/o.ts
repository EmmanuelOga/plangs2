import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+objects", "object-oriented", [
    { kind: "wikipedia", title: "object-oriented", href: "https://en.wikipedia.org/wiki/Object-oriented_programming" },
    { kind: "wikipedia", title: "object-based", href: "https://en.wikipedia.org/wiki/Object-based_language" },
    { kind: "wikipedia", title: "object-oriented", href: "https://en.wikipedia.org/wiki/Object-oriented" },
    {
      kind: "wikipedia",
      title: "Object-oriented",
      href: "https://en.wikipedia.org/wiki/Object-oriented_programming_language",
    },
    { kind: "wikipedia", title: "object oriented", href: "https://en.wikipedia.org/wiki/Object_oriented_programming" },
    { kind: "wikipedia", title: "Object database", href: "https://en.wikipedia.org/wiki/Object_database" },
    { kind: "wikipedia", title: "object-oriented", href: "https://en.wikipedia.org/wiki/Object-oriented_Programming" },
    {
      kind: "wikipedia",
      title: "Object oriented",
      href: "https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design",
    },
  ]);
}
