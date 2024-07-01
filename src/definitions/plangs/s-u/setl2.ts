import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+setl2")
    .merge({
      name: "SETL2",
      websites: [{ kind: "wikipedia", title: "SETL2", href: "https://en.wikipedia.org/wiki/SETL2" }],
      releases: [{ name: "SETL", version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+isetl", "pl+setl", "pl+algol", "pl+setl2"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
