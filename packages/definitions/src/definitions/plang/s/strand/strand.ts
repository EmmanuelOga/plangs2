import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+strand", {
      name: "Strand",
      description: "A parallel Prolog dialect focusing on concurrency and logic programming.",
      shortDesc: "A parallel Prolog dialect.",
      extHomeURL: "http://www.call-with-current-continuation.org/strand/strand.html",
      isTranspiler: false,
    })
    .relDialectOf.add("pl+prolog")
    .relParadigms.add("para+concurrent", "para+logic", "para+parallel");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
