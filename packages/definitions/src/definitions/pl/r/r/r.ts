import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+r", {
      name: "R",
      description:
        "R is a language and environment for statistical computing and graphics. It is widely used among statisticians and data miners for data analysis and developing statistical software.",
      extensions: [".r", ".rda", ".rdata", ".rds", ".rhistory"],
      year: 1993,
      releases: [
        { version: "4.4.2", name: "Pile of Leaves", date: "2024-10-31" },
        { version: "4.3.3", name: "Angel Food Cake", date: "2024-02-29" },
        { version: "4.0.0", name: "Arbor Day", date: "2020-04-24" },
        { version: "4.4.1", name: "R 4.4.1", date: "2024-01-01" },
      ],
      stackovTags: ["r"],
      githubName: "R",
      languishRanking: 18,
      githubLangId: "307",
      githubColor: "#198CE7",
      githubPopular: false,
      githubType: "programming",
      keywords: ["CRAN", "data analysis", "data visualization", "graphics", "open source", "statistical computing", "statisticians"],
      extWikipediaPath: "R_(programming_language)",
      extRedditPath: "Rlanguage",
      extHomeURL: "https://www.r-project.org/",
    })
    .addInfluencedBy(["pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms([
      "paradigm+array",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+analysis", "tag+cli", "tag+dataq", "tag+genomics", "tag+interpreters", "tag+multivar", "tag+scripting", "tag+stats", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c", "pl+fortran"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
