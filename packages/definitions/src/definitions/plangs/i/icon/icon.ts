import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+icon", {
      name: "Icon",
      description:
        'Icon is a very high-level programming language based on the concept of "goal-directed execution" in which code returns a "success" along with valid values, or a "failure", indicating that there is no valid data to return. The success and failure of a given block of code is used to direct further processing, whereas conventional languages would typically use boolean logic written by the programmer to achieve the same ends. Because the logic for basic control structures is often implicit in Icon, common tasks can be completed with less explicit code.',
      keywords: ["icon"],
      websites: [
        { title: "www.cs.arizona.edu/icon", href: "http://www.cs.arizona.edu/icon", kind: "homepage" },
        { title: "Icon", href: "https://en.wikipedia.org/wiki/Icon_programming_language", kind: "wikipedia" },
      ],
      extensions: [".icn"],
      year: 1977,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "9.5.24", name: "Icon 9.5.24", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+algol"])
    .addParadigms(["paradigm+multi", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+asm", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
