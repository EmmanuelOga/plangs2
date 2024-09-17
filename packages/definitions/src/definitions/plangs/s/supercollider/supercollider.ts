import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .addLicenses(["license+gnu-gpl"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+dsp", "tag+framework", "tag+industrial", "tag+interpreter", "tag+ray-tracer", "tag+wavelet"])
    .addWrittenIn(["pl+c++"]);
}
