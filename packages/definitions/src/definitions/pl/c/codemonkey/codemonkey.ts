import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+codemonkey", {
      name: "CodeMonkey",
      description:
        "CodeMonkey is an educational computer coding environment designed to teach programming concepts and languages to beginners, specifically students aged 6-14. It provides an engaging interface where students can learn text-based programming in languages such as Python, Blockly, and CoffeeScript, while also gaining an understanding of fundamental computer science and mathematics concepts. The platform, initially developed by Jonathan Schor, Ido Schor, and Yishai Pinchover, was first released in 2014 with support from the Center for Educational Technology in Israel.",
      keywords: ["codemonkey", "coding", "education", "game-based learning", "kids", "programming"],
      year: 2014,
      isMainstream: false,
      releases: [{ version: "1.0", name: "CodeMonkey 1.0", date: "2014-05-01" }],
      extWikipediaPath: "CodeMonkey_(software)",
      extHomeURL: "https://www.codemonkey.com/",
    })
    .addParadigms(["paradigm+dsl", "paradigm+educational", "paradigm+visual"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+edu", "tag+games"])
    .addTypeSystems(["tsys+inferred"])
    .addWrittenIn(["pl+coffeescript", "pl+javascript", "pl+ruby"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
