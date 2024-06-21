import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+imperative", "procedural", [
    { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming" },
    { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_programming" },
    { kind: "wikipedia", title: "imperative", href: "https://en.wikipedia.org/wiki/Imperative_programming_language" },
    { kind: "wikipedia", title: "procedural", href: "https://en.wikipedia.org/wiki/Procedural_language" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+in-memory-database", "in-memory database", [
    { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("para+interpreted", "interpreted", [
    { kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" },
  ]);
}
