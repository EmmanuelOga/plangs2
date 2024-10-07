import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+v", {
      name: "V",
      description:
        "V, also known as vlang, is a statically typed, compiled programming language created by Alexander Medvednikov in early 2019. It was inspired by the language Go, and other influences including Oberon, Swift, and Rust. It is free and open-source software released under the MIT License, and currently in beta.",
      firstAppeared: "2019-01-01",
      extensions: [".v", ".vsh"],
      websites: [
        { href: "http://vlang.io/", title: "vlang.io", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/V_(programming_language)", title: "V", kind: "wikipedia" },
      ],
      releases: [{ version: "0.4.6", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c", "pl+go", "pl+kotlin", "pl+oberon", "pl+python", "pl+rust", "pl+swift"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
