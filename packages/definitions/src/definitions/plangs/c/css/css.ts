import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+css", {
      name: "CSS",
      languishRanking: 15,
      websites: [
        { title: "CSS - Official documentation", href: "https://www.w3.org/Style/CSS/", kind: "homepage" },
        { title: "CSS on Wikipedia", href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets", kind: "wikipedia" },
        { title: "CSS on Reddit", href: "https://reddit.com/r/CSS", kind: "reddit" },
      ],
      stackovTags: ["css"],
      githubName: "CSS",
      githubLangId: "50",
      githubColor: "#563d7c",
      githubPopular: true,
      githubType: "markup",
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML, or XHTML).",
      keywords: ["Cascading Style Sheets", "layout", "style sheet", "web design"],
      extensions: [".css"],
      year: 1996,
      isMainstream: true,
      releases: [
        { version: "1", name: "CSS1", date: "1996-12-17" },
        { version: "2.1", name: "CSS 2.1", date: "2004-02-25" },
        { version: "3", name: "CSS 3", date: "2023-12-07" },
      ],
    })
    .addParadigms(["paradigm+declarative"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+ui"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
