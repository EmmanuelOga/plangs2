import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+vba", {
      name: "VBA",
      languishRanking: 29,
      websites: [
        { kind: "reddit", title: "VBA on Reddit", href: "https://reddit.com/r/vba" },
        { kind: "wikipedia", title: "VBA on Wikipedia", href: "https://en.wikipedia.org/wiki/Visual_Basic_for_Applications" },
      ],
      stackovTags: ["vba"],
      githubName: "VBA",
      githubLangId: "399230729",
      githubColor: "#867db1",
      githubPopular: false,
      githubType: "programming",
      description:
        "Visual Basic for Applications (VBA) is an implementation of Microsoft's event-driven programming language Visual Basic 6.0 built into most desktop Microsoft Office applications. It is used for automating tasks and creating user-defined functions within applications like Excel, Access, Word, and other Microsoft software.",
      keywords: ["Microsoft Office", "VBA", "Visual Basic for Applications", "automation", "event-driven programming", "macro"],
      extensions: [".vba"],
      year: 1993,
      isMainstream: true,
      releases: [{ version: "7.1", name: "Office 2021" }],
    })
    .addParadigms(["paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+windows"])
    .addTags(["tag+automation"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
