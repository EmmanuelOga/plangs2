import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cilk", {
      name: "Cilk",
      description:
        "Cilk, Cilk++, Cilk Plus, and OpenCilk are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ languages and extend them with constructs for parallel loops and the fork-join idiom.",
      keywords: ["cilk", "cilk plus", "opencilk"],
      extensions: [".cilk"],
      releases: [
        { version: "2.0.1", name: "OpenCilk", date: "2022-09-03" },
        { version: "5.4.6", name: "Cilk" },
        { version: "1.2", name: "Cilk Plus", date: "2013-09-09" },
      ],
      extWikipediaPath: "Cilk",
      extHomeURL: "https://www.opencilk.org/",
      created: "1994",
    })
    .relDialectOf.add(["pl+c"])
    .relInfluence.add(["pl+c", "pl+c++"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+concurrent", "para+imperative", "para+parallel", "para+procedural", "para+structured"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+x86-64"])
    .relTag.add(["tag+compiler"])
    .relTypeSystem.add(["tsys+manifest", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
