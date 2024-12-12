import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+imba", {
      name: "Imba",
      description:
        "Imba is a friendly full-stack programming language for the web that compiles to performant JavaScript. It has language-level support for defining, extending, subclassing, instantiating and rendering DOM vertices.",
      keywords: ["full-stack", "imba", "javascript", "web"],
      extensions: [".imba"],
      isTranspiler: true,
      releases: [{ version: "2.0.0-alpha.238", date: "2022-11-26" }],
      githubName: "Imba",
      githubLangId: "1057618448",
      githubColor: "#16cec6",
      githubPopular: false,
      githubType: "programming",
      extGithubPath: "imba/imba",
      created: "2015",
      shortDesc: "Imba is a full-stack web language compiling to JavaScript.",
      extHomeURL: "https://imba.io/",
      githubStars: 6300,
      ghRepoCreated: "2014-12-21",
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
