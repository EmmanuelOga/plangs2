import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+mlton")
    .merge({
      name: "MLton",
      websites: [{ kind: "wikipedia", title: "MLton", href: "https://en.wikipedia.org/wiki/MLton" }],
      releases: [{ name: "MLton", version: "unknown", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+sml"])
    .addLicense("lic+hpnd", { refs: [{ href: "http://mlton.org/License", title: "License" }] })
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addTypeSystems(["tsys+strong", "tsys+static", "tsys+inferred"]);

  /**/
}
