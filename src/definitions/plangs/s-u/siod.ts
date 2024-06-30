import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+siod")
    .merge({
      name: "SIOD",
      websites: [{ kind: "wikipedia", title: "SIOD", href: "https://en.wikipedia.org/wiki/SIOD" }],
      releases: [{ name: "SIOD", version: "3.63", date: "2008-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp", "pl+scheme"])
    .addLicenses(["lic+lgpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative", "para+meta"])
    .addPlatforms(["platf+ia-32", "platf+cross-platform", "platf+linux", "platf+openvms", "platf+win"])
    .addTypeSystems(["tsys+strong", "tsys+dynamic", "tsys+latent"]);

  /**/
}
