import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+puredata")
    .merge({
      name: "Pure DataPure Data",
      websites: [{ kind: "wikipedia", title: "PureData", href: "https://en.wikipedia.org/wiki/PureData" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pure_Data_logo.svg" }],
      releases: [{ version: "0.53", date: "2022-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+lucid", "pl+patcher"])
    .addPerson("person+miller-s-puckette", { role: "designer" })
    .addLicenses(["lic+bsd-s"])
    .addParadigms(["para+dataflow"])
    .addPlatforms(["platf+cross-platform", "platf+mac", "platf+win", "platf+linux"]);

  /**/
}
