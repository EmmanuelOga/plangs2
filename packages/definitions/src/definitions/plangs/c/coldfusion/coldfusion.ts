import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coldfusion", {
      name: "Adobe ColdFusion",
      description:
        "Adobe ColdFusion is a commercial rapid web-application development computing platform created by J. J. Allaire in 1995. The programming language used with the platform is known as CFML (ColdFusion Markup Language). ColdFusion was initially designed to simplify connecting HTML pages to a database, and quickly evolved into a comprehensive platform featuring a full scripting language and an integrated development environment (IDE).",
      keywords: ["coldfusion", "cfml"],
      websites: [
        { title: "adobe.com/products/coldfusion-family.html", href: "https://adobe.com/products/coldfusion-family.html", kind: "homepage" },
        { title: "Adobe ColdFusion", href: "https://en.wikipedia.org/wiki/ColdFusion", kind: "wikipedia" },
      ],
      extensions: [".cfm", ".cfml"],
      firstAppeared: "1995-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2023", name: "Adobe ColdFusion 2023", date: "2023-05-01" }],
    })
    .addParadigms(["paradigm+event-driven", "paradigm+multi", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+dataflow", "tag+dbms", "tag+scripting", "tag+server"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);
}
