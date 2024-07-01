import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+fl")
    .merge({
      name: "FL",
      websites: [{ kind: "wikipedia", title: "FL", href: "https://en.wikipedia.org/wiki/FL_(programming_language)" }],
    })
    .addInfluences(["pl+ffp", "pl+fp"])
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+function", "para+functional"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
