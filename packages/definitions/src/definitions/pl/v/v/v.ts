import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+v", {
      name: "V",
      description:
        "V, also known as vlang, is a statically typed, compiled programming language created by Alexander Medvednikov in early 2019. It was inspired by the language Go, along with other influences like Oberon, Swift, and Rust. V aims for simplicity, readability, maintainability, and performance. It is free and open-source, with a model that emphasizes speed, safety, and reliability, under the MIT License.",
      keywords: ["v language", "v programming", "vlang"],
      extensions: [".v", ".vsh"],
      year: 2019,
      isTranspiler: true,
      isMainstream: false,
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
    })
    .addCompilesTo(["pl+c"])
    .addInfluencedBy(["pl+go", "pl+rust", "pl+swift"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
