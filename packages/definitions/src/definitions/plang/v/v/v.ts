import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+v", {
      name: "V",
      description:
        "V, also known as vlang, is a statically typed, compiled programming language created by Alexander Medvednikov in early 2019. It was inspired by the language Go, along with other influences like Oberon, Swift, and Rust. V aims for simplicity, readability, maintainability, and performance. It is free and open-source, with a model that emphasizes speed, safety, and reliability, under the MIT License.",
      keywords: ["v language", "v programming", "vlang"],
      extensions: [".v", ".vsh"],
      isTranspiler: true,
      releases: [{ version: "0.4.8", name: "V 0.4.8", date: "2024-09-28" }],
      stackovTags: ["vlang"],
      githubName: "V",
      languishRanking: 159,
      githubLangId: "603371597",
      githubColor: "#4f87c4",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "vlang",
      extWikipediaPath: "V_(programming_language)",
      extHomeURL: "http://vlang.io/",
      created: "2019",
    })
    .relCompilesTo.add("pl+c")
    .relInfluencedBy.add("pl+go", "pl+rust", "pl+swift")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+concurrent", "para+functional", "para+imperative", "para+structured")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
