import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rmarkdown", {
      name: "RMarkdown",
      languishRanking: 79,
      stackovTags: ["r-markdown"],
      githubName: "RMarkdown",
      githubLangId: "313",
      githubColor: "#198ce7",
      githubPopular: false,
      githubType: "prose",
      description:
        "RMarkdown is a document format that allows you to write content in a markdown-like syntax intermixed with chunks of executable R code. The document can then be 'knit' or compiled into a document with the R code executed and its output rendered as part of the document. RMarkdown is widely used for creating reproducible reports, technical documents, presentations, and dashboards. It is particularly popular in data science and statistics for building reports that include R code and output directly embedded within the document.",
      keywords: ["markdown", "r", "reports", "reproducible research", "rmarkdown"],
      extensions: [".Rmd"],
      isTranspiler: true,
      releases: [{ version: "1.0", name: "Initial Release", date: "2014-01-21" }],
      extHomeURL: "https://rmarkdown.rstudio.com/",
      created: "2014",
    })
    .relCompilesTo.add("pl+html", "pl+markdown")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-driven", "para+declarative", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataq", "tag+sci", "tag+stats", "tag+workflow");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
