import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pkl", {
      name: "PKL",
      description:
        "PKL is a configuration language designed to define data structures and generate multiple output formats such as JSON and YAML. It supports embedded configurations in applications across various languages like Java, Kotlin, Swift, and Go, and provides integrations to enhance usability.",
      keywords: ["pkl"],
      extensions: [".pkl"],
      releases: [{ version: "1.0.0", name: "PKL 1.0.0", date: "2021-06-01" }],
      githubName: "Pkl",
      githubLangId: "288822799",
      githubColor: "#6b9543",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: true,
      extWikipediaPath: "PKL_(programming_language)",
      created: "2021",
      shortDesc: "PKL is a configuration language for defining data structures and generating JSON or YAML outputs.",
      githubStars: 10400,
      extGithubPath: "apple/pkl",
    })
    .relCompilesTo.add("pl+json", "pl+yaml")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+data-driven",
      "para+data-exchange",
      "para+declarative",
      "para+functional",
      "para+multi",
      "para+scripting",
      "para+validation",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+python");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
