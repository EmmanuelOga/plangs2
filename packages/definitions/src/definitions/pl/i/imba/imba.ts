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
      releases: [
        { version: "v1.5.0", name: "Imba 1.5.0", date: "2020-06-15" },
        { version: "v2.0.0", name: "Imba 2.0.0", date: "2022-10-12" },
      ],
      githubName: "Imba",
      githubLangId: "1057618448",
      githubColor: "#16cec6",
      githubPopular: false,
      githubType: "programming",
      extGithubPath: "imba/imba",
      created: "2015",
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
