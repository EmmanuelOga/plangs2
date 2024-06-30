import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+unified-parallel-c")
    .merge({
      name: "Unified Parallel C (UPC)",
      websites: [
        { kind: "wikipedia", title: "Unified Parallel C", href: "https://en.wikipedia.org/wiki/Unified_Parallel_C" },
      ],
      releases: [{ name: "Unified Parallel C (UPC)", version: "2022.10.0", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+split-c"])
    .addParadigms(["para+parallel", "para+message", "para+imperative", "para+structured"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/
}
