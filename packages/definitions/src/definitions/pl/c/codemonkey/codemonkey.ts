import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+codemonkey", {
      name: "CodeMonkey",
      description:
        "CodeMonkey is an educational computer coding environment designed to teach programming concepts and languages to beginners, specifically students aged 6-14. It provides an engaging interface where students can learn text-based programming in languages such as Python, Blockly, and CoffeeScript, while also gaining an understanding of fundamental computer science and mathematics concepts. The platform, initially developed by Jonathan Schor, Ido Schor, and Yishai Pinchover, was first released in 2014 with support from the Center for Educational Technology in Israel.",
      keywords: ["codemonkey", "coding", "education", "game-based learning", "kids", "programming"],
      releases: [{ version: "1.0", name: "CodeMonkey 1.0", date: "2014-05-01" }],
      extWikipediaPath: "CodeMonkey_(software)",
      extHomeURL: "https://www.codemonkey.com/",
      created: "2014",
    })
    .relParadigms.add("para+dsl", "para+educational", "para+visual")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+edu", "tag+games")
    .relTypeSystems.add("tsys+inferred")
    .relWrittenWith.add("pl+coffeescript", "pl+javascript", "pl+ruby");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
