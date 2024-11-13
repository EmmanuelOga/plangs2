import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+nickel", {
      name: "Nickel",
      description:
        "Nickel is a lightweight configuration language aimed at automating the generation of configuration files. It combines JSON semantics with first-class functions, allowing for modular and reusable configurations. With features like optional static typing and design by contract, Nickel ensures that complex configurations are easy to manage and less prone to errors.",
      keywords: ["configuration", "json", "nickel", "xml", "yaml"],
      websites: [
        { title: "Nickel", href: "https://nickel-lang.org/", kind: "homepage" },
        { title: "Nickel GitHub", href: "https://github.com/tweag/nickel", kind: "repository" },
        { title: "Nickel Wikipedia", href: "https://en.wikipedia.org/wiki/Nickel_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".ncl"],
      year: 2021,
      releases: [{ version: "1.0.0", name: "Nickel 1.0.0", date: "2023-05-01" }],
      isTranspiler: true,
      isMainstream: false,
    })
    .addCompilesTo(["pl+json", "pl+nix", "pl+rust", "pl+xml", "pl+yaml"])
    .addInfluencedBy(["pl+rust"])
    .addLicenses(["license+mpl"])
    .addParadigms(["paradigm+data-exchange", "paradigm+declarative", "paradigm+validation"])
    .addPlatforms(["plat+linux", "plat+mac", "plat+windows"])
    .addTags(["tag+automation", "tag+configuration", "tag+validation"])
    .addTypeSystems(["tsys+dynamic", "tsys+gradual", "tsys+optional", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
