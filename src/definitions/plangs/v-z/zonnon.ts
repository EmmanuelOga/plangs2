import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+zonnon")
    .merge({
      name: "Zonnon",
      websites: [{ kind: "wikipedia", title: "Zonnon", href: "https://en.wikipedia.org/wiki/Zonnon" }],
    })
    .addInfluences(["pl+modula", "pl+oberon", "pl+oberon-2", "pl+pascal"])
    .addPerson("person+jurg-gutknecht", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+modular", "para+objects"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+dynamic"]);

  /**/
}
