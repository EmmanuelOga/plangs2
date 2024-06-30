import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+brainfuck")
    .merge({
      name: "Brainfuck",
      websites: [{ kind: "wikipedia", title: "Brainfuck", href: "https://en.wikipedia.org/wiki/Brainfuck" }],
    })
    .addInfluences(["pl+p--", "pl+esoteric"])
    .addParadigms(["para+esoteric", "para+imperative", "para+structured"]);

  /**/
}
