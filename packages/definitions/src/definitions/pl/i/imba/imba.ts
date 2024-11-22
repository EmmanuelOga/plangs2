import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+imba", {
      name: "Imba",
      description:
        "Imba is a friendly full-stack programming language for the web that compiles to performant JavaScript. It has language-level support for defining, extending, subclassing, instantiating and rendering DOM nodes.",
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
    .relCompilesTo.add(["pl+javascript"])
    .relInfluencedBy.add(["pl+coffeescript"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+functional", "paradigm+general-purpose", "paradigm+imperative", "paradigm+oop", "paradigm+reactive"])
    .relPlatforms.add(["plat+nodejs", "plat+web"])
    .relTags.add(["tag+ui"])
    .relTsys.add(["tsys+dynamic", "tsys+inferred", "tsys+static"])
    .relWrittenIn.add(["pl+javascript"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
