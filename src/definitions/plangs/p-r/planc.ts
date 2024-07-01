import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+planc")
    .merge({
      name: "PLANC",
      websites: [{ kind: "wikipedia", title: "PLANC", href: "https://en.wikipedia.org/wiki/PLANC" }],
    })
    .addPerson("person+norsk-data", { role: "developer" })
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+x86"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
