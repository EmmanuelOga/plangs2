import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+c-star")
    .merge({
      name: "C*",
      websites: [{ kind: "wikipedia", title: "C*", href: "https://en.wikipedia.org/wiki/C*" }],
      releases: [{ name: "C*", version: "unknown", date: "1993-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+ansi-c", "pl+star-lisp"])
    .addPerson("person+thinking-machines", { role: "designer" })
    .addParadigms(["para+multi", "para+imperative", "para+parallel"])
    .addTypeSystems(["tsys+static", "tsys+weak", "tsys+manifest"]);

  /**/
}
