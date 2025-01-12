import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+awk", {
      name: "AWK",
      description:
        "Domain-specific language designed for text processing and is typically used as a data extraction and reporting tool. It operates as a filter and is a standard feature of most Unix-like operating systems. AWK is recognized for its terseness and power in text processing, facilitating one-liner programs.",
      shortDesc:
        "Text processing and data extraction, common on Unix-like systems.",
      created: "1977",
      extensions: [".awk", ".gawk", ".mawk", ".nawk"],
      extHomeURL: "https://www.gnu.org/software/gawk/",
      extRedditPath: "awk",
      extWikipediaPath: "AWK",
      githubColor: "#c30e9b",
      githubLangId: "28",
      githubName: "Awk",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["awk", "text processing", "unix utilities"],
      links: [
        {
          url: "https://www.gnu.org/software/gawk/manual/gawk.html",
          title: "Effective AWK Programming",
        },
      ],
      stackovTags: ["awk"],
    })
    .relInfluencedBy.add("pl+c", "pl+sed")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+data-driven",
      "para+pattern-matching",
      "para+procedural",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+dataflow",
      "tag+editor",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped");
}
