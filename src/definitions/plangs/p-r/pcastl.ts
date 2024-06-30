import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pcastl")
    .merge({
      name: "PCASTL",
      websites: [{ kind: "wikipedia", title: "PCASTL", href: "https://en.wikipedia.org/wiki/PCASTL" }],
      releases: [{ name: "PCASTL", version: "3.5", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+r"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+imperative", "para+reflective"])
    .addPlatforms(["platf+cross-platform"]);

  /**/
}
