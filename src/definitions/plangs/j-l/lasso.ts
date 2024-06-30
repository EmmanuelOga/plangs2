import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+lasso")
    .merge({
      name: "Lasso",
      websites: [
        { kind: "wikipedia", title: "Lasso", href: "https://en.wikipedia.org/wiki/Lasso_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/LassoSoft_and_Lasso_Logo.png/220px-LassoSoft_and_Lasso_Logo.png",
        },
      ],
      releases: [{ name: "Lasso", version: "9.3.1", date: "2015-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+dylan", "pl+smalltalk", "pl+scala"])
    .addLicenses(["lic+proprietary"])
    .addParadigms(["para+multi", "para+structured", "para+objects", "para+meta", "para+reflection"])
    .addPlatforms(["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"])
    .addTypeSystems(["tsys+dynamic", "tsys+nominative", "tsys+duck"]);

  /**/
}
