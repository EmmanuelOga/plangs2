import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pop-11")
    .merge({
      name: "POP-11",
      websites: [{ kind: "wikipedia", title: "POP-11", href: "https://en.wikipedia.org/wiki/POP-11" }],
      releases: [{ name: "POP-11", version: "unknown", date: "2020-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+pop-2"])
    .addPerson("person+robin-popplestone", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+open-source", "lic+mit", "lic+xfree86"])
    .addParadigms([
      "para+multi",
      "para+structured",
      "para+reflective",
      "para+imperative",
      "para+functional",
      "para+dec",
    ])
    .addPlatforms([
      "platf+ia-32",
      "platf+x86-64",
      "platf+cross-platform",
      "platf+openvms",
      "platf+unix",
      "platf+linux",
      "platf+mac",
      "platf+win",
    ])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
