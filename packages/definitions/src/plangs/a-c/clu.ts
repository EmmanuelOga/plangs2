import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+clu")
    .merge({
      name: "CLU",
      websites: [{ kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" }],
      releases: [{ name: "CLU", version: "1.5", date: "1989-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+algol", "pl+lisp", "pl+simula", "pl+alphard", "pl+simula-67", "pl+simula67"])
    .addPerson("person+barbara-liskov", { role: "designer" })
    .addParadigms(["para+multi", "para+objects", "para+imperative"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
