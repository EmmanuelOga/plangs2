import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+abap")
    .merge({
      name: "ABAP/4",
      websites: [{ kind: "wikipedia", title: "ABAP/4", href: "https://en.wikipedia.org/wiki/ABAP" }],
      releases: [{ name: "ABAP/4", version: "7.58", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+sap"])
    .addParadigms(["para+objects", "para+structured", "para+imperative"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative"]);

  /**/
}
