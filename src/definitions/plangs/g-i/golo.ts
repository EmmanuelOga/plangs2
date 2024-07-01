import type { PlangsGraph } from "../../../schemas/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+golo")
    .merge({
      name: "Golo",
      websites: [
        { kind: "wikipedia", title: "Golo", href: "https://en.wikipedia.org/wiki/Golo_(programming_language)" },
      ],
      releases: [{ name: "Golo", version: "3.4.0", date: "2021-01-01", kind: "stable" }],
    })
    .addPerson("person+insa-lyon", { role: "developer" })
    .addLicenses(["lic+eclipse-public"])
    .addPlatforms(["platf+jvm", "platf+cross-platform"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"]);

  /**/
}
