import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+csv", {
      name: "Comma-separated values (CSV)",
      languishRanking: 46,
      stackovTags: ["csv"],
      githubName: "CSV",
      githubLangId: "51",
      githubColor: "#237346",
      githubPopular: false,
      githubType: "data",
      description:
        "CSV (Comma-separated values) is a simple file format used to store tabular data, such as a spreadsheet or database, in plain text.",
      keywords: ["comma-separated", "csv", "data exchange", "data storage", "plain text"],
      extensions: [".csv"],
      year: 1972,
      isMainstream: true,
      releases: [
        { version: "RFC 4180", name: "RFC 4180", date: "2005" },
        { version: "RFC 7111", name: "RFC 7111", date: "2014" },
      ],
      extWikipediaPath: "Comma-separated_values",
    })
    .addParadigms(["paradigm+data-exchange"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataq"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
