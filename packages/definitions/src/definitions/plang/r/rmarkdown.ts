import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rmarkdown", {
      name: "RMarkdown",
      description:
        "Document format that combines markdown-like syntax with embedded R code chunks, allowing the material to be 'knit' into a final document where the code is executed and outputs are integrated. It is widely used for creating dynamic reports, documents, and presentations that incorporate direct outputs from R.",
      shortDesc:
        "Document format for creating dynamic reports by integrating R code chunks in markdown-like syntax.",
      created: "2014",
      extensions: [".Rmd"],
      extGithubPath: "rstudio/rmarkdown",
      extHomeURL: "https://rmarkdown.rstudio.com/",
      githubColor: "#198ce7",
      githubLangId: "313",
      githubName: "RMarkdown",
      githubPopular: false,
      githubStars: 2900,
      githubType: "prose",
      isTranspiler: true,
      keywords: [
        "markdown",
        "r",
        "reports",
        "reproducible-research",
        "rmarkdown",
      ],
      languishRanking: 79,
      releases: [
        { version: "1.0", name: "Initial Release", date: "2014-01-21" },
      ],
      stackovTags: ["r-markdown"],
    })
    .relCompilesTo.add("pl+html", "pl+markdown")
    .relInfluencedBy.add("pl+markdown", "pl+r")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+data-driven", "para+declarative", "para+multi")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataq", "tag+sci", "tag+stats", "tag+workflow");
}
