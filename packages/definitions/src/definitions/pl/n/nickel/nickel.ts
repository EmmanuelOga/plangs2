import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nickel", {
      name: "Nickel",
      description:
        "Nickel is a lightweight configuration language aimed at automating the generation of configuration files. It combines JSON semantics with first-class functions, allowing for modular and reusable configurations. With features like optional static typing and design by contract, Nickel ensures that complex configurations are easy to manage and less prone to errors.",
      keywords: ["configuration", "json", "nickel", "xml", "yaml"],
      extensions: [".ncl"],
      releases: [{ version: "1.0.0", name: "Nickel 1.0.0", date: "2023-05-01" }],
      isTranspiler: true,
      extGithubPath: "tweag/nickel",
      extWikipediaPath: "Nickel_(programming_language)",
      extHomeURL: "https://nickel-lang.org/",
      created: "2021",
    })
    .relCompilesTo.add(["pl+json", "pl+nix", "pl+rust", "pl+xml", "pl+yaml"])
    .relInfluencedBy.add(["pl+rust"])
    .relLicenses.add(["license+mpl"])
    .relParadigms.add(["paradigm+data-exchange", "paradigm+declarative", "paradigm+validation"])
    .relPlatforms.add(["plat+linux", "plat+windows"])
    .relTags.add(["tag+automation"])
    .relTsys.add(["tsys+dynamic", "tsys+gradual", "tsys+optional", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
