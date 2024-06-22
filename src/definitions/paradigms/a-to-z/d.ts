import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+data-driven", "data exchange", [
    { kind: "wikipedia", title: "data and procedure hiding", href: "https://en.wikipedia.org/wiki/Information_hiding" },
    { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
    { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+dataflow", "Dataflow", [
    { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
    { kind: "wikipedia", title: "dataflow", href: "https://en.wikipedia.org/wiki/Dataflow" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+declarative", "declarative", [
    { kind: "wikipedia", title: "declarative", href: "https://en.wikipedia.org/wiki/Declarative_programming" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+dependent-typed", "dependent typed", [
    { kind: "wikipedia", title: "dependent typed", href: "https://en.wikipedia.org/wiki/Dependent_type" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+distributed", "distributed", [
    { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_computing" },
    { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_programming" },
    { kind: "wikipedia", title: "Distributed cache", href: "https://en.wikipedia.org/wiki/Distributed_cache" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+domain-specific", "domain-specific", [
    { kind: "wikipedia", title: "domain-specific", href: "https://en.wikipedia.org/wiki/Domain-specific_language" },
  ]);
}
