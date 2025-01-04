import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pkl", {
      name: "PKL",
      description:
        "Configuration language designed to define data structures and generate multiple output formats such as JSON and YAML. It supports embedded configurations in applications across various languages like Java, Kotlin, Swift, and Go, and provides integrations to enhance usability.",
      shortDesc:
        "Configuration language for defining data structures and generating JSON or YAML outputs.",
      created: "2021",
      extensions: [".pkl"],
      extGithubPath: "apple/pkl",
      extWikipediaPath: "PKL_(programming_language)",
      githubColor: "#6b9543",
      githubLangId: "288822799",
      githubName: "Pkl",
      githubPopular: false,
      githubStars: 10400,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["pkl"],
      releases: [{ version: "1.0.0", name: "PKL 1.0.0", date: "2021-06-01" }],
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
}
