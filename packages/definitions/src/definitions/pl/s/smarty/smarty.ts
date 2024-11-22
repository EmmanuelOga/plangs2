import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
        "Smarty is a web template system written in PHP. It is designed for separation of concerns, allowing for the front-end of a web page to be changed separately from its back-end.",
      keywords: ["PHP", "Smarty", "template engine", "web template"],
      extensions: [".tpl"],
      filenames: ["index.tpl"],
      isTranspiler: true,
      releases: [{ version: "5.4.1", name: "Stable release", date: "2024-08-29" }],
      extWikipediaPath: "Smarty_(template_engine)",
      extGithubPath: "smarty-php/smarty",
      extHomeURL: "http://www.smarty.net",
      created: "2001",
    })
    .relCompilesTo.add(["pl+php"])
    .relLicenses.add(["license+lgpl"])
    .relParadigms.add(["paradigm+dsl"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
