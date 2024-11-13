import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Mojo is a programming language in the Python family, designed to deliver Python's expressiveness with the performance of C, and is particularly geared towards AI development, supporting high-performance computing on diverse hardware.",
      keywords: ["AI", "modular", "mojo", "performance", "programming"],
      websites: [
        { title: "Programming language for all of AI", href: "https://www.modular.com/mojo", kind: "homepage" },
        { title: "Mojo (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".mojo", ".🔥"],
      year: 2023,
      stackovTags: ["mojolang"],
      githubName: "Mojo",
      languishRanking: 208,
      githubLangId: "1045019587",
      githubColor: "#ff4c1f",
      githubPopular: false,
      githubType: "programming",
      isMainstream: false,
      releases: [{ version: "24.4", name: "Preview release", date: "2024-05-24" }],
    })
    .addInfluencedBy(["pl+python", "pl+swift"])
    .addLicenses(["license+apache"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+functional",
      "paradigm+general-purpose",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+object-oriented",
    ])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux"])
    .addTags(["tag+automation", "tag+performance", "tag+scripting"])
    .addTypeSystems(["tsys+affine", "tsys+duck", "tsys+dynamic", "tsys+generic", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
