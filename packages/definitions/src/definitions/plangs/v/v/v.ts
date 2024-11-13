import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+v", {
      name: "V",
      description:
        "V, also known as vlang, is a statically typed, compiled programming language created by Alexander Medvednikov in early 2019. It was inspired by the language Go, and other influences including Oberon, Swift, and Rust. It is free and open-source software released under the MIT License, and currently in beta.",
      keywords: ["v language", "v programming", "vlang"],
      websites: [
        { title: "vlang.io", href: "http://vlang.io/", kind: "homepage" },
        { title: "V", href: "https://en.wikipedia.org/wiki/V_(programming_language)", kind: "wikipedia" },
        { title: "V on Reddit", kind: "reddit", href: "https://reddit.com/r/vlang" },
      ],
      extensions: [".v", ".vsh"],
      year: 2019,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "0.4.6", name: "V 0.4.6", date: "2024-01-01" }],
      stackovTags: ["vlang"],
      githubName: "V",
      languishRanking: 159,
      githubLangId: "603371597",
      githubColor: "#4f87c4",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+go", "pl+oberon", "pl+rust", "pl+swift"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
