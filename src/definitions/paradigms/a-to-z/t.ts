import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+tacit", "tacit programming", {
    websites: [{ kind: "wikipedia", title: "tacit", href: "https://en.wikipedia.org/wiki/Tacit_programming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+term-rewriting", "Term-rewriting", {
    websites: [
      { kind: "wikipedia", title: "term rewriting", href: "https://en.wikipedia.org/wiki/Term_rewriting" },
      { kind: "wikipedia", title: "term-rewriting", href: "https://en.wikipedia.org/wiki/Term-rewriting" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+thread-safe", "thread safe", {
    websites: [{ kind: "wikipedia", title: "thread safe", href: "https://en.wikipedia.org/wiki/Thread_safe" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+transformation-language", "Transformation language", {
    websites: [
      {
        kind: "wikipedia",
        title: "Transformation language",
        href: "https://en.wikipedia.org/wiki/Transformation_language",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+typed-language", "typed language", {
    websites: [{ kind: "wikipedia", title: "typed language", href: "https://en.wikipedia.org/wiki/Typed_language" }],
  });
}
