import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+eqlog", {
      name: "Eqlog",
      description:
        "A logic programming language blending Datalog with equality reasoning capabilities, primarily targeting integration with Rust projects.",
      shortDesc:
        "A logic programming language for Datalog with equality support.",
      created: "2019-12",
      extensions: [".eq"],
      extGithubPath: "eqlog/eqlog",
      isTranspiler: false,
      keywords: ["datalog", "equality reasoning", "logic programming"],
    })
    .relImplements.add("pl+datalog")
    .relInfluencedBy.add("pl+rust")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+languages", "tag+proofs")
    .relWrittenWith.add("pl+rust");
}
