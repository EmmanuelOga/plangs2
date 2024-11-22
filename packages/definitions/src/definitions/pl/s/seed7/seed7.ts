import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+seed7", {
      name: "Seed7",
      description:
        "Seed7 is a general-purpose programming language designed by Thomas Mertes. It stands out in the landscape of programming languages due to its extensibility, allowing users to define new syntax and semantics. Seed7 simplifies complex templates and generics, emphasizing object orientation where advantageous. It implements various concepts from languages like Pascal, Ada, C, C++, and Java, featuring a unique mix of compile-time execution and reflection, among other functionalities.",
      keywords: ["seed7"],
      extensions: [".s7i", ".sd7"],
      releases: [{ version: "2024-08-12", name: "Stable release", date: "2024-08-12" }],
      extWikipediaPath: "Seed7",
      extHomeURL: "https://seed7.sourceforge.net/",
      created: "2005",
    })
    .relInfluencedBy.add(["pl+ada", "pl+c", "pl+c++", "pl+pascal"])
    .relLicenses.add(["license+gnu-gpl", "license+lgpl"])
    .relParadigms.add(["paradigm+extensible", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+reflective", "paradigm+structured"])
    .relPlatforms.add(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+analysis", "tag+compiler", "tag+dbms", "tag+interpreters", "tag+ray-tracer"])
    .relTsys.add(["tsys+manifest", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
