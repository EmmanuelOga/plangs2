import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pl360")
    .merge({
      name: "PL360",
      websites: [{ kind: "wikipedia", title: "PL360", href: "https://en.wikipedia.org/wiki/PL360" }],
    })
    .addImplementations(["pl+algol"])
    .addInfluences(["pl+algol", "pl+executive-systems-problem-oriented"])
    .addPerson("person+niklaus-wirth", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
