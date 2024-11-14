import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+smarty", {
      name: "Smarty",
      languishRanking: 89,
      websites: [
        { title: "Smarty (template engine) - Wikipedia", href: "https://en.wikipedia.org/wiki/Smarty_(template_engine)", kind: "wikipedia" },
        { title: "Official website", href: "http://www.smarty.net", kind: "homepage" },
        { title: "Smarty GitHub repository", href: "https://github.com/smarty-php/smarty", kind: "repository" },
      ],
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
      year: 2001,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "5.4.1", name: "Stable release", date: "2024-08-29" }],
    })
    .addCompilesTo(["pl+php"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+dsl"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
