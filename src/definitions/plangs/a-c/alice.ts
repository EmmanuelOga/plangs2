import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+alice")
    .merge({
      name: "Alice",
      websites: [
        { kind: "wikipedia", title: "Alice", href: "https://en.wikipedia.org/wiki/Alice_(programming_language)" },
      ],
      releases: [{ name: "Alice", version: "1.4", date: "2007-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ml", "pl+oz"])
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+functional",
      "para+distributed",
      "para+concurrent",
      "para+constraint",
    ])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/
}
