import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sas")
    .merge({
      name: "SAS",
      websites: [{ kind: "wikipedia", title: "SAS", href: "https://en.wikipedia.org/wiki/SAS_language" }],
    })
    .addInfluences(["pl+pl-slash"])
    .addPerson("person+anthony-james-barr", { role: "designer" })
    .addLicenses(["lic+proprietary", "lic+commercial"])
    .addParadigms(["para+multi", "para+data", "para+imperative"])
    .addPlatforms(["platf+win", "platf+mac"]);

  /**/
}
