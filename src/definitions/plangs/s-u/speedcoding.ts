import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+speedcoding")
    .merge({
      name: "Speedcoding",
      websites: [{ kind: "wikipedia", title: "Speedcoding", href: "https://en.wikipedia.org/wiki/Speedcoding" }],
    })
    .addInfluences(["pl+assembly"])
    .addPerson("person+john-backus", { role: "designer" })
    .addParadigms(["para+structured", "para+generic"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+manifest"]);

  /**/
}
