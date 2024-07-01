import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+futhark")
    .merge({
      name: "Futhark",
      websites: [
        { kind: "wikipedia", title: "Futhark", href: "https://en.wikipedia.org/wiki/Futhark_(programming_language)" },
      ],
    })
    .addInfluences(["pl+apl", "pl+haskell", "pl+nesl", "pl+sml"])
    .addLicenses(["lic+isc"])
    .addParadigms(["para+array", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+uniqueness", "tsys+dependent"]);

  /**/
}
