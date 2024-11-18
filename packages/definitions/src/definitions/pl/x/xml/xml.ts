import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xml", {
      name: "XML",
      languishRanking: 32,
      stackovTags: ["xml"],
      githubName: "XML",
      githubLangId: "399",
      githubColor: "#0060ac",
      githubPopular: false,
      githubType: "data",
      description:
        "Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data in a way that is both human-readable and machine-readable. It is widely used for data interchange over the Internet.",
      keywords: ["W3C", "data interchange", "data structure", "document format", "markup language", "serialization"],
      extensions: [".xml"],
      year: 1996,
      releases: [
        { version: "1.0", name: "5th Edition", date: "2008-11-26" },
        { version: "1.1", name: "2nd Edition", date: "2006-08-16" },
      ],
      extWikipediaPath: "XML",
      extRedditPath: "xml",
    })
    .addParadigms(["paradigm+data-exchange"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataq", "tag+workflow"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
