import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+macros", "macros", {
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose macro processor",
        href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
      },
      { kind: "wikipedia", title: "macro", href: "https://en.wikipedia.org/wiki/Macro_(computer_science)" },
    ],
  });
}
