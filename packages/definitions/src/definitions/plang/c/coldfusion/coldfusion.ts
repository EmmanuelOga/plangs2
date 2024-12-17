import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coldfusion", {
      name: "ColdFusion",
      description:
        "Commercial rapid web-application development computing platform primarily using the ColdFusion Markup Language (CFML). It facilitates quick development of internet-based applications by simplifying database connectivity, and offers a comprehensive suite of tools including an integrated development environment.",
      shortDesc: "Commercial rapid web-development platform using CFML for quick internet application development.",
      created: "1995",
      extensions: [".cfm", ".cfml"],
      extHomeURL: "https://www.adobe.com/products/coldfusion-family.html",
      extRedditPath: "coldfusion",
      extWikipediaPath: "Adobe_ColdFusion",
      githubColor: "#ed2cd6",
      githubLangId: "64",
      githubName: "ColdFusion",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["adobe", "cfml", "coldfusion", "rapid development"],
      languishRanking: 125,
      releases: [{ version: "2023 Update 6", date: "2023" }],
      stackovTags: ["coldfusion"],
    })
    .relCompilesTo.add("pl+coldfusion", "pl+java")
    .relParadigms.add("para+event-driven", "para+imperative", "para+multi", "para+procedural", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+dataflow", "tag+dbms", "tag+rad", "tag+scripting", "tag+server", "tag+webdev")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
