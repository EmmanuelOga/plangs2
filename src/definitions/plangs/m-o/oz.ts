import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+oz")
    .merge({
      name: "Oz",
      websites: [{ kind: "wikipedia", title: "Oz", href: "https://en.wikipedia.org/wiki/Oz_(programming_language)" }],
      releases: [{ name: "Oz", version: "1.4.0", date: "2018-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+erlang", "pl+lisp", "pl+prolog"])
    .addLicense("lic+mit", {
      refs: [{ href: "https://mozart.github.io/license-info/", title: "Mozart Oz License Info" }],
    })
    .addParadigms([
      "para+multi",
      "para+logic",
      "para+functional",
      "para+imperative",
      "para+objects",
      "para+constraint",
      "para+distributed",
      "para+concurrent",
    ])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
