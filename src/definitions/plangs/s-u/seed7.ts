import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+seed7")
    .merge({
      name: "Seed7",
      websites: [{ kind: "wikipedia", title: "Seed7", href: "https://en.wikipedia.org/wiki/Seed7" }],
      releases: [{ name: "Seed7", version: "unknown", date: "2023-05-29", kind: "stable" }],
    })
    .addImplementations(["pl+open-source"])
    .addInfluences(["pl+c", "pl+cpp", "pl+java", "pl+modula", "pl+pascal", "pl+algol"])
    .addInfluence("pl+ada", { refs: [{ href: "https://www.sparforte.com/", title: "SparForte Programming Language" }] })
    .addLicenses(["lic+gpl", "lic+lgpl"])
    .addParadigms([
      "para+multi",
      "para+extensible",
      "para+objects",
      "para+imperative",
      "para+structured",
      "para+generic",
      "para+reflective",
    ])
    .addPlatforms(["platf+cross-platform", "platf+bsd", "platf+linux", "platf+mac", "platf+unix", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+safe", "tsys+nominative", "tsys+manifest"]);

  /**/
}
