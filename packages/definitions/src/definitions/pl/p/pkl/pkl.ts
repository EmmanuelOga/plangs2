import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pkl", {
      name: "PKL",
      description:
        "PKL is a language designed to handle configurable data definitions with ease, offering a robust configuration format that can generate output in multiple formats like JSON, YAML, and more. It supports embedded configurations in applications like Java, Kotlin, Swift, and Go, and provides IDE integrations to facilitate ease of use for developers.",
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
      extHomeURL: "https://pkl-lang.org/",
      created: "2021",
    })
    .relCompilesTo.add(["pl+json", "pl+yaml"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add([
      "para+data-driven",
      "para+data-exchange",
      "para+declarative",
      "para+functional",
      "para+multi",
      "para+scripting",
      "para+validation",
    ])
    .relPlatform.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+automation", "tag+interpreters", "tag+scripting"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
