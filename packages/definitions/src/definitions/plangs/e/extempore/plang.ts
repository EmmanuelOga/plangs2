import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+extempore", {
      images: [],
      name: "Extempore",
      description:
        "Extempore is a live coding environment focused on real-time audiovisual software development. It is designed to accommodate the demands of cyber-physical computing. Extempore consists of two integrated languages, Scheme (with extensions) and Extempore Language. It uses the LLVM cross-language compiler to achieve performant digital signal processing and related low-level features, on-the-fly.",
      websites: [
        { href: "https://github.com/digego/extempore", title: "github.com/digego/extempore", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Extempore_(software)", title: "Extempore", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "0.8.9", date: "2021-01-01" }],
    })
    .addInfluencedBy(["pl+impromptu", "pl+lisp", "pl+scheme"])
    .addParadigms(["para+functional", "para+multi"])
    .addPlatforms(["platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"]);
}
