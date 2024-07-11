import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+t")
    .merge({
      name: "T",
      websites: [
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
        { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
      ],
    })
    .addInfluences(["pl+scheme"])
    .addParadigms(["para+multi", "para+objects", "para+imperative", "para+functional", "para+meta"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/
}
