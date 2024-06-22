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

  //-------------------------------------------------------------------------------

  lb.define("para+markup", "markup", {
    websites: [{ kind: "wikipedia", title: "markup", href: "https://en.wikipedia.org/wiki/Markup_language" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+message-passing", "message passing", {
    websites: [{ kind: "wikipedia", title: "message passing", href: "https://en.wikipedia.org/wiki/Message_passing" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+meta", "meta", {
    websites: [{ kind: "wikipedia", title: "meta", href: "https://en.wikipedia.org/wiki/Metaprogramming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+modular", "modular", {
    websites: [{ kind: "wikipedia", title: "modular", href: "https://en.wikipedia.org/wiki/Modular_programming" }],
  });
}
