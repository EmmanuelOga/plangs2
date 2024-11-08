import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+awk", {
      name: "AWK",
      description:
        "AWK (/ɔːk/) is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool. Like sed and grep, it is a filter, and is a standard feature of most Unix-like operating systems.",
      keywords: ["awk"],
      websites: [
        { title: "AWK on Wikipedia", href: "https://en.wikipedia.org/wiki/AWK_programming_language", kind: "wikipedia" },
        { title: "AWK on Reddit", kind: "reddit", href: "https://reddit.com/r/awk" },
      ],
      extensions: [".awk", ".gawk", ".mawk", ".nawk"],
      year: 1977,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Initial Release", date: "1977-01-01" }],
      github: { name: "Awk", langId: "28", color: "#c30e9b", popular: false, type: "programming" },
      stackovTags: ["awk"],
    })
    .addInfluencedBy(["pl+c", "pl+sed"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+data-driven", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+dataflow", "tag+editor", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
