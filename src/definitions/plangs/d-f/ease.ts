import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ease")
    .merge({
      name: "Ease",
      websites: [
        { kind: "wikipedia", title: "Ease", href: "https://en.wikipedia.org/wiki/Ease_(programming_language)" },
      ],
    })
    .addInfluences(["pl+occam"])
    .addParadigms(["para+concurrent", "para+csp"])
    .addPlatforms(["platf+parallel-computing"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
