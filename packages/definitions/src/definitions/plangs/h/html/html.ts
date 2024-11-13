import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+html", {
      name: "HTML",
      languishRanking: 7,
      websites: [
        { kind: "reddit", title: "HTML on Reddit", href: "https://reddit.com/r/HTML" },
        { title: "HTML - Wikipedia", href: "https://en.wikipedia.org/wiki/HTML", kind: "wikipedia" },
      ],
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
      year: 1993,
      isMainstream: true,
      releases: [
        { version: "4.01", name: "HTML 4.01", date: "1999-12-24" },
        { version: "5", name: "HTML 5", date: "2014-10-28" },
      ],
    })
    .addParadigms(["paradigm+declarative"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
