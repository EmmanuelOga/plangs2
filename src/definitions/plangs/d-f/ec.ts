import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ec")
    .merge({
      name: "eC",
      websites: [{ kind: "wikipedia", title: "eC", href: "https://en.wikipedia.org/wiki/EC_(programming_language)" }],
      releases: [{ version: "0.44.15", date: "2016-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+cpp", "pl+python"])
    .addLicenses(["lic+bsd-3"])
    .addParadigms(["para+multi", "para+imperative", "para+objects", "para+generic"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+nominative", "tsys+inferred"]);

  /**/
}
