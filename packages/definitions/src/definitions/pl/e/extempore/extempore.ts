import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+extempore", {
      name: "Extempore",
      description:
        "Extempore is a live coding environment focused on real-time audiovisual software development. It is designed to accommodate the demands of cyber-physical computing. Extempore consists of two integrated languages, Scheme (with extensions) and Extempore Language. It uses the LLVM cross-language compiler to achieve performant digital signal processing and related low-level features, on-the-fly.",
      keywords: ["extempore"],
      releases: [{ version: "0.8.9", name: "", date: "2021-05-06" }],
      extensions: [""],
      extWikipediaPath: "Extempore_(software)",
      extGithubPath: "digego/extempore",
      created: "2011",
    })
    .relInfluence.add(["pl+lisp", "pl+scheme"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+functional", "para+multi", "para+real-time"])
    .relPlatform.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+audio-dev", "tag+compiler", "tag+dsp", "tag+multimedia", "tag+wavelet"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+static"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
