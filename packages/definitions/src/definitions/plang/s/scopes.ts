import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scopes", {
      name: "Scopes",
      description:
        "Modern programming language emphasizing multi-stage programming, influenced by systems programming and expressive languages like Python and Scheme. It features a borrow checker along with extensive retargeting capabilities for high performance tasks.",
      shortDesc:
        "Modern, multi-stage programming language with a focus on systems programming and expressiveness.",
      created: "2015",
      extensions: [".scopes"],
      extHomeURL: "https://hg.sr.ht/~duangle/scopes",
      filenames: ["scopes"],
      isTranspiler: false,
      keywords: [
        "borrow checking",
        "multi-stage programming",
        "retargetable",
        "systems programming",
      ],
      releases: [
        { version: "0.1", name: "Initial release", date: "2015-01-01" },
      ],
    })
    .relInfluencedBy.add("pl+c", "pl+python", "pl+scheme")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+extensible",
      "para+low-code",
      "para+macro",
      "para+metaprogramming",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add(
      "tsys+dynamic",
      "tsys+inferred",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+c++");
}
