import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coldfusion", {
      name: "ColdFusion",
      description:
        "Adobe ColdFusion is a commercial rapid web-application development computing platform created by J. J. Allaire in 1995. The programming language used with the platform is known as CFML (ColdFusion Markup Language). ColdFusion was initially designed to simplify connecting HTML pages to a database, and quickly evolved into a comprehensive platform featuring a full scripting language and an integrated development environment (IDE).",
      keywords: ["adobe", "cfml", "coldfusion", "rapid development"],
      extensions: [".cfm", ".cfml"],
      isTranspiler: true,
      releases: [
        { version: "2023", name: "Adobe ColdFusion 2023", date: "2023-05-01" },
        { version: "2021", name: "ColdFusion 2021", date: "2020-11-11" },
        { version: "2018", name: "ColdFusion 2018", date: "2018-07-12" },
        { version: "2016", name: "ColdFusion 2016", date: "2016-02-16" },
        { version: "2023 Update 6", name: "", date: "2023-11-14" },
      ],
      stackovTags: ["coldfusion"],
      githubName: "ColdFusion",
      languishRanking: 125,
      githubLangId: "64",
      githubColor: "#ed2cd6",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Adobe_ColdFusion",
      extRedditPath: "coldfusion",
      extHomeURL: "https://adobe.com/products/coldfusion-family.html",
      created: "1995",
    })
    .addCompilesTo(["pl+coldfusion", "pl+java"])
    .addParadigms(["paradigm+event-driven", "paradigm+multi", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+dataflow", "tag+dbms", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
