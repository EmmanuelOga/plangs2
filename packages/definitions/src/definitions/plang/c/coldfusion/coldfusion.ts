import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coldfusion", {
      name: "ColdFusion",
      description:
        "Adobe ColdFusion is a commercial rapid web-application development computing platform primarily using the ColdFusion Markup Language (CFML). It facilitates quick development of internet-based applications by simplifying database connectivity, and offers a comprehensive suite of tools including an integrated development environment.",
      keywords: ["adobe", "cfml", "coldfusion", "rapid development"],
      extensions: [".cfm", ".cfml"],
      isTranspiler: false,
      releases: [{ version: "2023 Update 6", date: "2023" }],
      stackovTags: ["coldfusion"],
      githubName: "ColdFusion",
      languishRanking: 125,
      githubLangId: "64",
      githubColor: "#ed2cd6",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Adobe_ColdFusion",
      extRedditPath: "coldfusion",
      extHomeURL: "https://www.adobe.com/products/coldfusion-family.html",
      created: "1995",
      shortDesc: "Adobe ColdFusion is a commercial rapid web-development platform using CFML for quick internet application development.",
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
