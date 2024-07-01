import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+nemerle")
    .merge({
      name: "Nemerle",
      websites: [{ kind: "wikipedia", title: "Nemerle", href: "https://en.wikipedia.org/wiki/Nemerle" }],
      releases: [{ name: "Nemerle", version: "1.2.507.0", date: "2016-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c-sharp", "pl+ml", "pl+lisp"])
    .addParadigms([
      "para+multi",
      "para+aspect",
      "para+event",
      "para+functional",
      "para+generic",
      "para+imperative",
      "para+meta",
      "para+objects",
      "para+reflective",
    ])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"]);

  /**/
}
