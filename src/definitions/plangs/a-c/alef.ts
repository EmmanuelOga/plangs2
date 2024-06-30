import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+alef")
    .merge({
      name: "Alef",
      websites: [
        { kind: "wikipedia", title: "Alef", href: "https://en.wikipedia.org/wiki/Alef_(programming_language)" },
      ],
    })
    .addInfluences(["pl+c", "pl+newsqueak"])
    .addParadigms(["para+compiled", "para+concurrent", "para+structured"])
    .addPlatforms(["platf+plan9"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  /**/
}
