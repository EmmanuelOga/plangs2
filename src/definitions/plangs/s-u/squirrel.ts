import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+squirrel")
    .merge({
      name: "Squirrel",
      websites: [
        { kind: "wikipedia", title: "Squirrel", href: "https://en.wikipedia.org/wiki/Squirrel_(programming_language)" },
      ],
      releases: [{ name: "Squirrel", version: "3.2", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+cpp", "pl+javascript", "pl+lua", "pl+python"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+multi", "para+scripting", "para+imperative", "para+functional", "para+objects"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
