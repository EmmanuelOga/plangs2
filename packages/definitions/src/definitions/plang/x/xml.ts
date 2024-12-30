import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xml", {
      name: "XML",
      description:
        "Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data in a way that is both human-readable and machine-readable. It is widely used for data interchange over the Internet.",
      shortDesc: "Markup language used for storing and sharing data.",
      created: "1996",
      extensions: [".xml"],
      extHomeURL: "https://www.w3.org/XML/",
      extRedditPath: "xml",
      extWikipediaPath: "XML",
      githubColor: "#0060ac",
      githubLangId: "399",
      githubName: "XML",
      githubPopular: false,
      githubType: "data",
      isTranspiler: false,
      keywords: ["W3C", "data interchange", "markup language", "serialization"],
      languishRanking: 32,
      releases: [
        { version: "1.0", name: "5th Edition", date: "2008-11-26" },
        { version: "1.1", name: "2nd Edition", date: "2006-08-16" },
      ],
      stackovTags: ["xml"],
    })
    .relParadigms.add("para+data-exchange", "para+markup")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dataq", "tag+workflow")
    .relTypeSystems.add("tsys+untyped");
}
