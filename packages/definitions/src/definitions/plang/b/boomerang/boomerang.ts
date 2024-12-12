import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      isTranspiler: false,
      shortDesc: "Boomerang is a language for bidirectional transformations on textual data formats.",
      githubStars: 0,
    })
    .relInfluencedBy.add("pl+ocaml")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+bidirectional", "para+declarative", "para+dsl")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
