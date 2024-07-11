import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+setl")
    .merge({
      name: "SETL",
      websites: [{ kind: "wikipedia", title: "SETL", href: "https://en.wikipedia.org/wiki/SETL" }],
      releases: [{ name: "SETL", version: "1.1", date: "2005-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol"])
    .addPerson("person+jacob-t-schwartz", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
