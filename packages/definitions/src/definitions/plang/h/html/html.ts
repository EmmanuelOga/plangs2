import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+html", {
      name: "HTML",
      languishRanking: 7,
      stackovTags: ["html"],
      githubName: "HTML",
      githubLangId: "146",
      githubColor: "#e34c26",
      githubPopular: true,
      githubType: "markup",
      description:
        "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.",
      keywords: ["HTML", "hypertext", "markup language", "web browser", "web content", "web structure"],
      extensions: [".htm", ".html"],
      releases: [
        { version: "4.01", name: "HTML 4.01", date: "1999-12-24" },
        { version: "5", name: "HTML 5", date: "2014-10-28" },
      ],
      extWikipediaPath: "HTML",
      extRedditPath: "HTML",
      created: "1993",
      isTranspiler: false,
      shortDesc: "HTML is the standard markup language for web pages.",
    })
    .relParadigms.add("para+declarative")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+scripting");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
