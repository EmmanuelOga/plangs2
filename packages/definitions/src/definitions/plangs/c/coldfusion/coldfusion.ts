import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coldfusion", {
      name: "ColdFusion",
      description:
        "Adobe ColdFusion is a commercial rapid web-application development computing platform created by J. J. Allaire in 1995. The programming language used with the platform is known as CFML (ColdFusion Markup Language). ColdFusion was initially designed to simplify connecting HTML pages to a database, and quickly evolved into a comprehensive platform featuring a full scripting language and an integrated development environment (IDE).",
      keywords: ["cfml", "coldfusion"],
      websites: [
        { title: "adobe.com/products/coldfusion-family.html", href: "https://adobe.com/products/coldfusion-family.html", kind: "homepage" },
        { title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion", kind: "wikipedia" },
        { title: "ColdFusion on Reddit", kind: "reddit", href: "https://reddit.com/r/coldfusion" },
        { title: "ColdFusion on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Adobe_ColdFusion" },
      ],
      extensions: [".cfm", ".cfml"],
      year: 1995,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2023", name: "Adobe ColdFusion 2023", date: "2023-05-01" }],
      stackovTags: ["coldfusion"],
      githubName: "ColdFusion",
      languishRanking: 125,
      githubLangId: "64",
      githubColor: "#ed2cd6",
      githubPopular: false,
      githubType: "programming",
    })
    .addParadigms(["paradigm+event-driven", "paradigm+multi", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+dataflow", "tag+dbms", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
