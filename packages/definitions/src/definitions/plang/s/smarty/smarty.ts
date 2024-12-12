import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+smarty", {
      name: "Smarty",
      languishRanking: 89,
      stackovTags: ["smarty"],
      githubName: "Smarty",
      githubLangId: "353",
      githubColor: "#f0c040",
      githubPopular: false,
      githubType: "programming",
      description:
        "Smarty is a PHP-based web template engine designed to separate the presentation layer from the application logic, facilitating easier management of web page layout and design.",
      keywords: ["php", "smarty", "template system", "web"],
      extensions: [".tpl"],
      filenames: ["index.tpl"],
      isTranspiler: false,
      releases: [{ version: "5.4.1", name: "Stable release", date: "2024-08-29" }],
      extWikipediaPath: "Smarty_(template_engine)",
      shortDesc: "Smarty is a PHP template engine for separating presentation and application logic.",
      githubStars: 2300,
      extGithubPath: "smarty-php/smarty",
      extHomeURL: "http://www.smarty.net",
      created: "2001",
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
