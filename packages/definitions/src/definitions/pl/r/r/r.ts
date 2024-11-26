import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+r", {
      name: "R",
      description:
        "R is a language and environment for statistical computing and graphics. It is widely used among statisticians and data miners for data analysis and developing statistical software.",
      extensions: [".r", ".rda", ".rdata", ".rds", ".rhistory"],
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
      created: "1993",
    })
    .relInfluencedBy.add(["pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .relLicense.add(["license+gnu-gpl"])
    .relParadigm.add([
      "para+array",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
    ])
    .relPlatforms.add(["plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+windows", "plat+x86-64"])
    .relTags.add([
      "tag+analysis",
      "tag+cli",
      "tag+dataq",
      "tag+genomics",
      "tag+interpreters",
      "tag+multivar",
      "tag+scripting",
      "tag+stats",
      "tag+viz",
    ])
    .relTsys.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenIn.add(["pl+c", "pl+fortran"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
