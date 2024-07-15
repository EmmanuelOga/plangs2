import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+darwin")
    .merge({
      name: "Darwin",
      websites: [
        { kind: "wikipedia", title: "Darwin", href: "https://en.wikipedia.org/wiki/Darwin_(programming_language)" },
      ],
    })
    .addInfluences(["pl+maple"])
    .addPerson("person+gaston-gonnet", { role: "designer" })
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
