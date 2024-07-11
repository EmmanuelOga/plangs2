import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+concurrent-euclid")
    .merge({
      name: "Concurrent Euclid",
      websites: [
        {
          kind: "wikipedia",
          title: "Concurrent Euclid (ConEuc)",
          href: "https://en.wikipedia.org/wiki/Concurrent_Euclid_(programming_language)",
        },
      ],
    })
    .addInfluences(["pl+euclid", "pl+csp"])
    .addPerson("person+james-cordy", { role: "designer" })
    .addPerson("person+ric-holt", { role: "designer" })
    .addParadigms(["para+multi", "para+structured", "para+imperative", "para+functional"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong", "tsys+static"]);

  /**/
}
