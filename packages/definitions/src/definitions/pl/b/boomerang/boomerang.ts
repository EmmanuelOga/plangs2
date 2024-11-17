import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+boomerang", {
      name: "Boomerang",
      description:
        "Boomerang is a programming language for writing lenses—well-behaved bidirectional transformations—that operate on ad-hoc, textual data formats.",
      keywords: ["boomerang"],
      year: 2008,
      isMainstream: false,
      releases: [
        { version: "0.2", name: "Stable Release", date: "2009-09-02" },
        { version: "0.1", name: "Initial Release", date: "2008-01-01" },
      ],
      extWikipediaPath: "Boomerang_(programming_language)",
      extHomeURL: "http://www.seas.upenn.edu/~harmony/",
    })
    .addInfluencedBy(["pl+ocaml"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+bidirectional", "paradigm+declarative", "paradigm+dsl"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
