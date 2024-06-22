import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+in-memory-database", "in-memory database", {
    websites: [
      { kind: "wikipedia", title: "in-memory database", href: "https://en.wikipedia.org/wiki/In-memory_database" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+interpreted", "interpreted", {
    websites: [{ kind: "wikipedia", title: "interpreted", href: "https://en.wikipedia.org/wiki/Interpreted_language" }],
  });
}
