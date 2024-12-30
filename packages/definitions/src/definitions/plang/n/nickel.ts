import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+nickel", {
      name: "Nickel",
      description:
        "Lightweight configuration language aimed at automating the generation of configuration files. It combines JSON semantics with first-class functions, allowing for modular and reusable configurations. With features like optional static typing and design by contract, Nickel ensures that complex configurations are easy to manage and less prone to errors.",
      shortDesc: "Lightweight configuration language designed for generating modular and reusable configuration files.",
      created: "2021",
      extensions: [".ncl"],
      extGithubPath: "tweag/nickel",
      extHomeURL: "https://nickel-lang.org",
      extWikipediaPath: "Nickel_(programming_language)",
      githubStars: 2400,
      isTranspiler: true,
      keywords: ["configuration", "json", "nickel", "xml", "yaml"],
      releases: [{ version: "1.0.0", name: "Nickel 1.0.0", date: "2023-05-01" }],
    })
    .relCompilesTo.add("pl+json", "pl+nix", "pl+rust", "pl+xml", "pl+yaml")
    .relInfluencedBy.add("pl+rust")
    .relLicenses.add("lic+mpl")
    .relParadigms.add("para+data-exchange", "para+declarative", "para+validation")
    .relPlatforms.add("plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+gradual", "tsys+optional", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+rust");
}
