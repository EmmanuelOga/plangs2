import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+natural-language", "natural-language", [
    {
      kind: "wikipedia",
      title: "Natural language programming",
      href: "https://en.wikipedia.org/wiki/Natural_language_programming",
    },
    {
      kind: "wikipedia",
      title: "natural-language",
      href: "https://en.wikipedia.org/wiki/Natural-language_programming",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+non-structured", "Non-structured", [
    { kind: "wikipedia", title: "non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+nondeterministic", "nondeterministic", [
    {
      kind: "wikipedia",
      title: "nondeterministic",
      href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
    },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+numerical-control", "Numerical control", [
    { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
  ]);
}
