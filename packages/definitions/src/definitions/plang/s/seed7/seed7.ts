import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+seed7", {
      name: "Seed7",
      description:
        "Seed7 is a general-purpose programming language designed by Thomas Mertes. It stands out due to its extensibility, allowing users to define new syntax and semantics and implements concepts from languages like Pascal, Ada, C, and C++.",
      keywords: ["seed7"],
      extensions: [".s7i", ".sd7"],
      releases: [{ version: "2024-08-12", name: "Stable release", date: "2024-08-12" }],
      extWikipediaPath: "Seed7",
      extHomeURL: "https://seed7.sourceforge.net/",
      created: "2005",
      isTranspiler: false,
      shortDesc: "Seed7 is a general-purpose language focused on extensibility and defining new syntax and semantics.",
      githubStars: 236,
      extGithubPath: "ThomasMertes/seed7",
    })
    .relInfluencedBy.add("pl+ada", "pl+c", "pl+c++", "pl+pascal")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add("para+extensible", "para+general-purpose", "para+imperative", "para+multi", "para+oop", "para+reflective", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+analysis", "tag+compiler", "tag+dbms", "tag+interpreters", "tag+ray-tracer")
    .relTypeSystems.add("tsys+manifest", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
