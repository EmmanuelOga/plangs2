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
        "RMarkdown is a document format that combines markdown-like syntax with embedded R code chunks, allowing the material to be 'knit' into a final document where the code is executed and outputs are integrated. It is widely used for creating dynamic reports, documents, and presentations that incorporate direct outputs from R.",
      keywords: ["markdown", "r", "reports", "reproducible-research", "rmarkdown"],
      extensions: [".Rmd"],
      isTranspiler: false,
      releases: [{ version: "1.0", name: "Initial Release", date: "2014-01-21" }],
      extHomeURL: "https://rmarkdown.rstudio.com/",
      created: "2014",
      shortDesc: "RMarkdown is a document format for creating dynamic reports by integrating R code chunks in markdown-like syntax.",
      githubStars: 2900,
      extGithubPath: "rstudio/rmarkdown",
    })
    .relCompilesTo.add("pl+html", "pl+markdown")
    .relInfluencedBy.add("pl+markdown", "pl+r")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-driven", "para+declarative", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataq", "tag+sci", "tag+stats", "tag+workflow");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
