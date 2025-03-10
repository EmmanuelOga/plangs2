import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+inko", {
      name: "Inko",
      description:
        "Programming language designed for building concurrent software efficiently and safely. It features deterministic automatic memory management, move semantics, static typing, and type-safe concurrency. It is particularly known for avoiding runtime errors, race conditions, and unpredictable performance.",
      shortDesc:
        "Language for efficient, safe concurrent software, with features like static typing and type-safe concurrency.",
      created: "2016",
      extensions: [".inko"],
      extGithubPath: "inko-lang/inko",
      extHomeURL: "https://inko-lang.org",
      githubStars: 913,
      isTranspiler: false,
      keywords: ["concurrent", "inko", "safe", "type-safe"],
      releases: [{ version: "0.17.1", date: "2024-10-29" }],
    })
    .relInfluencedBy.add("pl+erlang", "pl+go")
    .relLicenses.add("lic+mit", "lic+mpl")
    .relParadigms.add(
      "para+concurrent",
      "para+general-purpose",
      "para+message-passing",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+cross", "plat+linux")
    .relTags.add("tag+automation", "tag+better-c")
    .relTypeSystems.add("tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+llvm", "pl+rust");
}
