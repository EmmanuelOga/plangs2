import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+small")
    .merge({
      name: "Small Machine Algol Like Language",
      websites: [
        { kind: "wikipedia", title: "Small Machine Algol Like Language", href: "https://en.wikipedia.org/wiki/SMALL" },
      ],
    })
    .addImplementations(["pl+fortran"])
    .addInfluences(["pl+algol"])
    .addParadigms(["para+imperative", "para+structured", "para+objects"])
    .addPlatforms(["platf+dec"]);

  /**/
}
