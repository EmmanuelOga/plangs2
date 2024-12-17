import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+imba", {
      name: "Imba",
      description:
        "Imba is a friendly full-stack programming language for the web that compiles to performant JavaScript. It has language-level support for defining, extending, subclassing, instantiating and rendering DOM vertices.",
      shortDesc: "Imba is a full-stack web language compiling to JavaScript.",
      created: "2015",
      extensions: [".imba"],
      extGithubPath: "imba/imba",
      extHomeURL: "https://imba.io/",
      githubColor: "#16cec6",
      githubLangId: "1057618448",
      githubName: "Imba",
      githubPopular: false,
      githubStars: 6300,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["full-stack", "imba", "javascript", "web"],
      releases: [{ version: "2.0.0-alpha.238", date: "2022-11-26" }],
    })
    .relCompilesTo.add("pl+javascript")
    .relInfluencedBy.add("pl+coffeescript")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+general-purpose", "para+imperative", "para+oop", "para+reactive")
    .relPlatforms.add("plat+nodejs", "plat+web")
    .relTags.add("tag+gui")
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred", "tsys+static")
    .relWrittenWith.add("pl+javascript");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
