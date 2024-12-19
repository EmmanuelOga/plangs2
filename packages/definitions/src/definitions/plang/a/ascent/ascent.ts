import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ascent", {
      name: "Ascent",
      description:
        "A logic programming language, similar to Datalog, embedded in Rust using macros for declarative logic processing and query optimization.",
      shortDesc: "Logic programming language (similar to Datalog) embedded in Rust via macros.",
      created: "2023",
      extGithubPath: "s-arash/ascent",
      extHomeURL: "https://s-arash.github.io/ascent/",
      isTranspiler: true,
      keywords: ["datalog", "macros-usage", "rust-embedded"],
      links: [
        { url: "https://docs.rs/ascent", title: "Docs" },
        { url: "https://crates.io/crates/ascent", title: "Rust Crate" },
      ],
    })
    .relInfluencedBy.add("pl+datalog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+embedded", "para+logic")
    .relTags.add("tag+languages", "tag+proofs", "tag+webdev")
    .relWrittenWith.add("pl+rust");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
