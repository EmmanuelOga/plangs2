import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+cheerio", {
      name: "cheerio",
      description:
        "The fast, flexible & elegant library for parsing and manipulating HTML and XML. Cheerio implements a subset of core jQuery.",
      shortDesc:
        "The fast, flexible & elegant library for parsing and manipulating HTML and XML.",
      extGithubPath: "cheeriojs/cheerio",
      extHomeURL: "https://cheerio.js.org/",
      githubStars: 28900,
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript")
    .relTags.add("tag+webdev")
    .relWrittenWith.add("pl+typescript");
}
