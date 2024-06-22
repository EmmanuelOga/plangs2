import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+reflective", "Reflective", {
    websites: [
      { kind: "wikipedia", title: "reflective", href: "https://en.wikipedia.org/wiki/Reflective_programming" },
      {
        kind: "wikipedia",
        title: "reflective",
        href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
      },
      { kind: "wikipedia", title: "Reflective", href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)" },
    ],
  });
}
