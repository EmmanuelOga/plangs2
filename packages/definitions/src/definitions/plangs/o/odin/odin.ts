import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+odin", {
      name: "Odin",
      description:
        "Odin is a general-purpose programming language with a focus on simplicity and performance. It is designed to replace C as an alternative systems programming language, offering modern features and a straightforward syntax.",
      keywords: ["odin"],
      websites: [
        { title: "Odin", href: "https://odin-lang.org/", kind: "homepage" },
        { title: "Odin", href: "https://en.wikipedia.org/wiki/Odin_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".odin"],
      firstAppeared: "2016-04-20",
      isMainstream: true,
      releases: [{ version: "0.13.0", name: "Odin 0.13.0", date: "2023-08-21" }],
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+procedural", "paradigm+systems"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+wasm", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+systems"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+odin"]);
}
