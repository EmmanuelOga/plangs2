import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+inko", {
      name: "Inko",
      description:
        "Inko is a programming language designed for building concurrent software efficiently and safely. It features deterministic automatic memory management, move semantics, static typing, and type-safe concurrency. It is particularly known for avoiding runtime errors, race conditions, and unpredictable performance.",
      keywords: ["concurrent", "inko", "safe", "type-safe"],
      extensions: [".inko"],
      releases: [
        { version: "0.9.0", name: "Inko 0.9.0", date: "2019-01-01" },
        { version: "1.0.0", name: "Inko 1.0.0", date: "2020-06-01" },
      ],
      extGithubPath: "inko-lang/inko",
      extHomeURL: "https://inko-lang.org/",
      created: "2016",
    })
    .relInfluencedBy.add(["pl+erlang", "pl+go"])
    .relLicense.add(["lic+mit", "lic+mpl"])
    .relParadigm.add(["para+concurrent", "para+message-passing", "para+multi", "para+oop"])
    .relPlatform.add(["plat+cross", "plat+linux"])
    .relTag.add(["tag+automation"])
    .relTypeSystem.add(["tsys+nominal", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
