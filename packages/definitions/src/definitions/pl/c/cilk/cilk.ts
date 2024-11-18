import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cilk", {
      name: "Cilk",
      description:
        "Cilk, Cilk++, Cilk Plus, and OpenCilk are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ languages and extend them with constructs for parallel loops and the fork-join idiom.",
      keywords: ["cilk", "cilk plus", "opencilk"],
      extensions: [".cilk"],
      year: 1994,
      releases: [
        { version: "2.0.1", name: "OpenCilk", date: "2022-09-03" },
        { version: "5.4.6", name: "Cilk" },
        { version: "1.2", name: "Cilk Plus", date: "2013-09-09" },
      ],
      extWikipediaPath: "Cilk",
      extHomeURL: "https://www.opencilk.org/",
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+c", "pl+c++"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+imperative", "paradigm+parallel", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+x86-64"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
