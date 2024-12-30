import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+html", {
      name: "HTML",
      description:
        "HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.",
      shortDesc: "HTML is the standard markup language for web pages.",
      created: "1993",
      extensions: [".htm", ".html"],
      extRedditPath: "HTML",
      extWikipediaPath: "HTML",
      githubColor: "#e34c26",
      githubLangId: "146",
      githubName: "HTML",
      githubPopular: true,
      githubType: "markup",
      isTranspiler: false,
      keywords: ["HTML", "hypertext", "markup language", "web browser", "web content", "web structure"],
      languishRanking: 7,
      releases: [
        { version: "4.01", name: "HTML 4.01", date: "1999-12-24" },
        { version: "5", name: "HTML 5", date: "2014-10-28" },
      ],
      stackovTags: ["html"],
    })
    .relParadigms.add("para+declarative")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+scripting");
}
