import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+css", {
      name: "CSS",
      description:
        "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML, or XHTML).",
      shortDesc: "CSS is a style sheet language for styling documents written in HTML or XML.",
      created: "1996",
      extensions: [".css"],
      extHomeURL: "https://www.w3.org/Style/CSS/",
      extRedditPath: "CSS",
      extWikipediaPath: "Cascading_Style_Sheets",
      githubColor: "#563d7c",
      githubLangId: "50",
      githubName: "CSS",
      githubPopular: true,
      githubType: "markup",
      isTranspiler: false,
      keywords: ["cascading-style-sheets", "layout", "stylesheet", "webdesign"],
      languishRanking: 15,
      releases: [
        { version: "1", name: "CSS1", date: "1996-12-17" },
        { version: "2.1", name: "CSS 2.1", date: "2004-02-25" },
        { version: "3", name: "CSS 3", date: "2023-12-07" },
      ],
      stackovTags: ["css"],
    })
    .relParadigms.add("para+declarative")
    .relPlatforms.add("plat+web")
    .relTags.add("tag+gui");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
