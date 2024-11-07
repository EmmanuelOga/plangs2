import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+processing", {
      name: "Processing",
      description:
        "Processing is a free graphics library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.",
      keywords: ["processing"],
      websites: [
        { title: "processing.org", href: "http://processing.org/", kind: "homepage" },
        { title: "Processing", href: "https://en.wikipedia.org/wiki/Processing_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".pde"],
      year: 2001,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "4.3", name: "Processing 4.3", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+java"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+dsl", "paradigm+educational", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+app", "tag+edu", "tag+framework", "tag+games", "tag+industrial", "tag+interpreter", "tag+multimedia", "tag+ray-tracer", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
