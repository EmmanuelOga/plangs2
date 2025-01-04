import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+r", {
      name: "R",
      description:
        "Language and environment for statistical computing and graphics. Widely used among statisticians and data miners for data analysis and developing statistical software.",
      shortDesc:
        "Language and environment for statistical computing and graphics.",
      created: "1993",
      extensions: [".r", ".rda", ".rdata", ".rds", ".rhistory"],
      extGithubPath: "wch/r-source",
      extHomeURL: "https://www.r-project.org/",
      extRedditPath: "Rlanguage",
      extWikipediaPath: "R_(programming_language)",
      githubColor: "#198CE7",
      githubLangId: "307",
      githubName: "R",
      githubPopular: false,
      githubStars: 1200,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "cran",
        "data analysis",
        "data visualization",
        "graphics",
        "statistical computing",
        "statisticians",
      ],
      languishRanking: 18,
      releases: [
        { version: "4.4.2", name: "Pile of Leaves", date: "2024-10-31" },
        { version: "4.3.3", name: "Angel Food Cake", date: "2024-02-29" },
        { version: "4.0.0", name: "Arbor Day", date: "2020-04-24" },
        { version: "4.4.1", name: "R 4.4.1", date: "2024-01-01" },
      ],
      stackovTags: ["r"],
    })
    .relInfluencedBy.add("pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add(
      "para+array",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+procedural",
      "para+reflective",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+arm",
      "plat+cross",
      "plat+linux",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add(
      "tag+analysis",
      "tag+cli",
      "tag+dataq",
      "tag+genomics",
      "tag+interpreters",
      "tag+multivar",
      "tag+scripting",
      "tag+stats",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+fortran");
}
