import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "SuperCollider is an environment and programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic composition.",
      websites: [
        { href: "http://supercollider.github.io/", title: "supercollider.github.io", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/SuperCollider", title: "SuperCollider", kind: "wikipedia" },
      ],
      releases: [{ version: "3.13.0", date: "2023-01-01" }],
    })
    .addLicenses(["lic+gnu-gpl"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+linux", "platf+windows"])
    .addTags(["tag+audio-dev", "tag+interpreter"])
    .addWrittenIn(["pl+c++"]);
}
