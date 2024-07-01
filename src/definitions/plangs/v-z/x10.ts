import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+x10")
    .merge({
      name: "X10",
      websites: [{ kind: "wikipedia", title: "X10", href: "https://en.wikipedia.org/wiki/X10_(programming_language)" }],
      releases: [{ name: "X10", version: "2.6.2", date: "2019-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp", "pl+java"])
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe"]);

  /**/
}
