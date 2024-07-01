import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+aldor")
    .merge({
      name: "Aldor",
      websites: [{ kind: "wikipedia", title: "Aldor", href: "https://en.wikipedia.org/wiki/Aldor" }],
    })
    .addImplementations(["pl+axiom"])
    .addInfluences(["pl+a-", "pl+pascal", "pl+haskell"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+multi", "para+objects", "para+functional", "para+imperative", "para+dependent", "para+logic"])
    .addPlatforms(["platf+axiom", "platf+linux", "platf+win"]);

  /**/
}
