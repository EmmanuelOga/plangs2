import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+opa")
    .merge({
      name: "Opa",
      websites: [{ kind: "wikipedia", title: "Opa", href: "https://en.wikipedia.org/wiki/Opa_(programming_language)" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/6/64/Opa_logo_cloud.png" }],
      releases: [{ name: "Opa", version: "1.1.1", date: "2014-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+erlang", "pl+javascript", "pl+ml", "pl+ocaml"])
    .addLicenses(["lic+mit", "lic+affero-gpl"])
    .addParadigms(["para+multi", "para+functional", "para+imperative"])
    .addPlatforms(["platf+linux", "platf+mac", "platf+win"])
    .addTypeSystems(["tsys+static", "tsys+strong", "tsys+inferred"]);

  /**/
}
