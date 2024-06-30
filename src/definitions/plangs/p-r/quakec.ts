import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+quakec")
    .merge({
      name: "QuakeC",
      websites: [{ kind: "wikipedia", title: "QuakeC", href: "https://en.wikipedia.org/wiki/QuakeC" }],
    })
    .addInfluences(["pl+c"])
    .addPerson("person+john-carmack", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
