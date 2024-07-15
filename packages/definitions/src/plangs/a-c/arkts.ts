import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+arkts")
    .merge({
      name: "ArkTS",
      websites: [{ kind: "wikipedia", title: "ArkTS", href: "https://en.wikipedia.org/wiki/ArkTS" }],
      releases: [{ name: "ArkTS", version: "4.1.7.3", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences([
      "pl+typescript",
      "pl+swift",
      "pl+objective-c",
      "pl+javascript",
      "pl+c-sharp",
      "pl+f-sharp",
      "pl+java",
      "pl+actionscript",
      "pl+atscript",
      "pl+assemblyscript",
    ])
    .addLicenses(["lic+apache", "lic+proprietary"])
    .addParadigms(["para+multi", "para+functional", "para+generic", "para+imperative", "para+objects"])
    .addPlatforms(["platf+mac", "platf+win", "platf+android", "platf+ios"])
    .addTypeSystems(["tsys+duck", "tsys+gradual", "tsys+structural"]);

  /**/
}
