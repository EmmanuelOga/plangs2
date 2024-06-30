import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+stack").merge({
    name: "stack machine",
    websites: [
      { kind: "wikipedia", title: "stack-based", href: "https://en.wikipedia.org/wiki/Stack-oriented_programming" },
      {
        kind: "wikipedia",
        title: "stack-oriented",
        href: "https://en.wikipedia.org/wiki/Stack-oriented_programming_language",
      },
      { kind: "wikipedia", title: "stack machine", href: "https://en.wikipedia.org/wiki/Stack_machine" },
    ],
  });

  /**/
}
