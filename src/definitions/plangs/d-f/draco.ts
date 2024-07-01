import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+draco")
    .merge({
      name: "Draco",
      websites: [
        { kind: "wikipedia", title: "Draco", href: "https://en.wikipedia.org/wiki/Draco_(programming_language)" },
      ],
    })
    .addInfluences(["pl+algol", "pl+pascal", "pl+c"])
    .addParadigms(["para+imperative", "para+structured"])
    .addPlatforms(["platf+amiga"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+manifest"]);

  /**/
}
