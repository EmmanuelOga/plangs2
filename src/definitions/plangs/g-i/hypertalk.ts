import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hypertalk")
    .merge({
      name: "HyperTalk",
      websites: [{ kind: "wikipedia", title: "HyperTalk", href: "https://en.wikipedia.org/wiki/HyperTalk" }],
    })
    .addInfluences(["pl+pascal"])
    .addParadigms(["para+imperative", "para+event"]);

  /**/
}
