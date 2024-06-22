import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+dataflow", "Dataflow", {
    websites: [
      { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
      { kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+declarative", "declarative", {
    websites: [
      { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+dependent-typed", "dependent typed", {
    websites: [{ kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+domain-specific", "domain-specific", {
    websites: [
      { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
    ],
  });
}
