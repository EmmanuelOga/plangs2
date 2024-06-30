import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+qb64")
    .merge({
      name: "QB64",
      websites: [{ kind: "wikipedia", title: "QB64", href: "https://en.wikipedia.org/wiki/QB64" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg" },
      ],
      releases: [{ version: "2.0.2", date: "2021-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+basic"])
    .addLicenses(["lic+mit"])
    .addPlatforms(["platf+win", "platf+linux", "platf+mac"]);

  /**/
}
