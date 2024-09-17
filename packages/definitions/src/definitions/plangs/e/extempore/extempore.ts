import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+extempore", {
      name: "Extempore",
      description:
        "Extempore is a live coding environment focused on real-time audiovisual software development. It is designed to accommodate the demands of cyber-physical computing. Extempore consists of two integrated languages, Scheme (with extensions) and Extempore Language. It uses the LLVM cross-language compiler to achieve performant digital signal processing and related low-level features, on-the-fly.",
      firstAppeared: "2011-01-01",
      websites: [
        { href: "https://github.com/digego/extempore", title: "github.com/digego/extempore", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Extempore_(software)", title: "Extempore", kind: "wikipedia" },
      ],
      releases: [{ version: "0.8.9", date: "2021-01-01" }],
    })
    .addInfluencedBy(["pl+impromptu", "pl+lisp", "pl+scheme"])
    .addParadigms(["paradigm+functional", "paradigm+multi"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+dsp", "tag+multimedia", "tag+wavelet"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);
}
