import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+xtend")
    .merge({
      name: "Xtend",
      websites: [{ kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" }],
      releases: [{ version: "2.25.0", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+java", "pl+scala", "pl+groovy", "pl+smalltalk"])
    .addLicenses(["lic+eclipse-public"])
    .addParadigms(["para+objects", "para+imperative", "para+functional"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
