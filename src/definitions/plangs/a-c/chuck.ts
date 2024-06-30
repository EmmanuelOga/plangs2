import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+chuck")
    .merge({
      name: "ChucK",
      websites: [{ kind: "wikipedia", title: "ChucK", href: "https://en.wikipedia.org/wiki/ChucK" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png" }],
      releases: [{ version: "1.5.2.4", date: "2024-01-01", kind: "stable" }],
    })
    .addPerson("person+ge-wang", { role: "designer" })
    .addLicenses(["lic+mac-os-x", "lic+linux", "lic+win", "lic+gpl", "lic+ios"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
