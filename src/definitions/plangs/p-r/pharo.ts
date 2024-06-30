import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+pharo")
    .merge({
      name: "Pharo",
      websites: [{ kind: "wikipedia", title: "Pharo", href: "https://en.wikipedia.org/wiki/Pharo" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg" }],
      releases: [{ version: "12.0", date: "2024-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+smalltalk"])
    .addInfluences(["pl+smalltalk", "pl+squeak"])
    .addLicenses(["lic+mit"])
    .addLicense("lic+apache", { refs: [{ href: "https://pharo.org/license", title: "Pharo license information" }] })
    .addParadigms(["para+objects"])
    .addPlatforms(["platf+arm", "platf+ia-32", "platf+x86-64", "platf+win", "platf+linux", "platf+mac"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
