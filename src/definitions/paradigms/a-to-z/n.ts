import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+non-structured", "Non-structured", {
    websites: [
      { kind: "wikipedia", title: "non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+nondeterministic", "nondeterministic", {
    websites: [
      {
        kind: "wikipedia",
        title: "nondeterministic",
        href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+numerical-control", "Numerical control", {
    websites: [
      { kind: "wikipedia", title: "Numerical control", href: "https://en.wikipedia.org/wiki/Numerical_control" },
    ],
  });
}
