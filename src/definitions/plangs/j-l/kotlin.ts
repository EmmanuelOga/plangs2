import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+kotlin")
    .merge({
      name: "Kotlin",
      websites: [
        { kind: "wikipedia", title: "Kotlin", href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg" }],
      releases: [{ name: "Kotlin", version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+apache-groovy", "pl+c-sharp", "pl+gosu", "pl+groovy", "pl+java", "pl+ml", "pl+scala"])
    .addLicenses(["lic+apache"])
    .addParadigms([
      "para+multi",
      "para+objects",
      "para+functional",
      "para+imperative",
      "para+block",
      "para+dec",
      "para+generic",
      "para+reflection",
      "para+concurrent",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  /**/
}
