import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+boomerang", {
      name: "Boomerang",
      description:
        "Programming language for writing lenses—well-behaved bidirectional transformations—that operate on ad-hoc, textual data formats.",
      shortDesc:
        "Language for bidirectional transformations on textual data formats.",
      created: "2008",
      extHomeURL: "http://www.seas.upenn.edu/~harmony/",
      extWikipediaPath: "Boomerang_(programming_language)",
      githubStars: 0,
      isTranspiler: false,
      keywords: ["boomerang"],
      releases: [
        { version: "0.2", name: "Stable Release", date: "2009-09-02" },
        { version: "0.1", name: "Initial Release", date: "2008-01-01" },
      ],
    })
    .relInfluencedBy.add("pl+ocaml")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+bidirectional", "para+declarative", "para+dsl")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+strong");
}
