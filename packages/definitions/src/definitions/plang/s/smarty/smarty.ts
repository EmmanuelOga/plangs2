import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+smarty", {
      name: "Smarty",
      description:
        "Smarty is a PHP-based web template engine designed to separate the presentation layer from the application logic, facilitating easier management of web page layout and design.",
      shortDesc: "Smarty is a PHP template engine for separating presentation and application logic.",
      created: "2001",
      extensions: [".tpl"],
      extGithubPath: "smarty-php/smarty",
      extHomeURL: "http://www.smarty.net",
      extWikipediaPath: "Smarty_(template_engine)",
      filenames: ["index.tpl"],
      githubColor: "#f0c040",
      githubLangId: "353",
      githubName: "Smarty",
      githubPopular: false,
      githubStars: 2300,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["php", "smarty", "template system", "web"],
      languishRanking: 89,
      releases: [{ version: "5.4.1", name: "Stable release", date: "2024-08-29" }],
      stackovTags: ["smarty"],
    })
    .relCompilesTo.add("pl+php")
    .relInfluencedBy.add("pl+php")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+dsl")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+scripting");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
