import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+isetl")
    .merge({
      name: "ISETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/ISETL" }],
      releases: [{ name: "SETL", version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+isetl", "pl+setl", "pl+setl2"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
