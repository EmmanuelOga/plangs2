import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+obliq")
    .merge({
      name: "Obliq",
      websites: [{ kind: "wikipedia", title: "Obliq", href: "https://en.wikipedia.org/wiki/Obliq" }],
    })
    .addImplementations(["pl+modula"])
    .addInfluences(["pl+modula", "pl+self", "pl+oberon"])
    .addPerson("person+luca-cardelli", { role: "designer" })
    .addParadigms([
      "para+multi",
      "para+imperative",
      "para+structured",
      "para+modular",
      "para+objects",
      "para+prototypes",
      "para+parallel",
    ])
    .addPlatforms(["platf+ia-32"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic"]);

  /**/
}
