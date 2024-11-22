import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+boomerang", {
      name: "Boomerang",
      description:
        "Boomerang is a programming language for writing lenses—well-behaved bidirectional transformations—that operate on ad-hoc, textual data formats.",
      keywords: ["boomerang"],
      releases: [
        { version: "0.2", name: "Stable Release", date: "2009-09-02" },
        { version: "0.1", name: "Initial Release", date: "2008-01-01" },
      ],
      extWikipediaPath: "Boomerang_(programming_language)",
      extHomeURL: "http://www.seas.upenn.edu/~harmony/",
      created: "2008",
    })
    .relInfluencedBy.add(["pl+ocaml"])
    .relLicenses.add(["license+lgpl"])
    .relParadigms.add(["paradigm+bidirectional", "paradigm+declarative", "paradigm+dsl"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux"])
    .relTags.add(["tag+interpreters"])
    .relTsys.add(["tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
