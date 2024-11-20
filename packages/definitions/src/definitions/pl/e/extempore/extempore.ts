import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+real-time"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+audio-dev", "tag+compiler", "tag+dsp", "tag+multimedia", "tag+wavelet"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
