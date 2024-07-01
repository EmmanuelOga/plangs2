import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+euclid")
    .merge({
      name: "Euclid",
      websites: [
        { kind: "wikipedia", title: "Euclid", href: "https://en.wikipedia.org/wiki/Euclid_(programming_language)" },
      ],
    })
    .addInfluences(["pl+pascal", "pl+mesa", "pl+alphard", "pl+clu", "pl+bcpl", "pl+modula", "pl+lis"])
    .addPerson("person+butler-lampson", { role: "designer" })
    .addPerson("person+james-g-mitchell", { role: "designer" })
    .addPerson("person+jim-horning", { role: "designer" })
    .addPerson("person+gerald-j-popek", { role: "designer" })
    .addPerson("person+ric-holt", { role: "developer" })
    .addPerson("person+james-cordy", { role: "developer" })
    .addParadigms(["para+multi", "para+structured", "para+imperative", "para+functional"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/
}
