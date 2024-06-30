import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+macros").merge({
    name: "general-purpose macro processor",
    websites: [
      { kind: "wikipedia", title: "macros", href: "https://en.wikipedia.org/wiki/Macro_(computer_science)" },
      {
        kind: "wikipedia",
        title: "general-purpose macro processor",
        href: "https://en.wikipedia.org/wiki/General-purpose_macro_processor",
      },
    ],
  });

  /**/
}
