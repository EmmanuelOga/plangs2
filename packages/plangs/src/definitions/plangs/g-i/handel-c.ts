import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+handel-c")
    .merge({
      name: "Handel-C",
      websites: [{ kind: "wikipedia", title: "Handel-C", href: "https://en.wikipedia.org/wiki/Handel-C" }],
    })
    .addInfluences(["pl+c", "pl+csp", "pl+occam"])
    .addPerson("person+siemens-eda", { role: "developer" })
    .addParadigms(["para+imperative", "para+structured", "para+concurrent"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+static", "tsys+manifest", "tsys+nominative", "tsys+inferred"]);

  /**/
}
