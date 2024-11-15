import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+icon", {
      name: "Icon",
      description:
        'Icon is a very high-level programming language based on the concept of "goal-directed execution" in which code returns a "success" or "failure" to direct processing, minimizing the need for explicit boolean logic. It is influenced by SNOBOL and designed for tasks involving string manipulation and goal-directed execution.',
      keywords: ["goal-directed execution", "icon", "string manipulation"],
      extensions: [".icn"],
      year: 1977,
      isMainstream: false,
      releases: [{ version: "9.5.24", name: "", date: "2024-01-17" }],
      extWikipediaPath: "Icon_programming_language",
      extHomeURL: "http://www.cs.arizona.edu/icon",
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
