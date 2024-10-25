import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+wing", {
      name: "Wing",
      description:
        "Wing is a modern programming language designed to simplify the development of cloud applications. It emphasizes readability and maintainability while providing powerful abstractions for cloud resources.",
      keywords: ["wing", "cloud", "programming"],
      websites: [
        { title: "Wing Programming Language", href: "https://www.winglang.io/", kind: "homepage" },
        { title: "Wing - Wikipedia", href: "https://en.wikipedia.org/wiki/Wing_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".w"],
      year: 2022,
      isTranspiler: true,
      releases: [{ version: "1.0.0", name: "Wing Initial Release", date: "2022-09-01" }],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+multi", "paradigm+reactive"])
    .addPlatforms(["plat+cloud", "plat+cross"])
    .addTags(["tag+cloud", "tag+scripting"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+typescript"]);
}
