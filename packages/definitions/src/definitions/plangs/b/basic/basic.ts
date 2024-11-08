import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+basic", {
      name: "BASIC",
      description:
        "BASIC (Beginners' All-purpose Symbolic Instruction Code) is a family of general-purpose, high-level programming languages designed for ease of use. The original version was created by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963. They aimed to enable students in non-scientific fields to use computers. At the time, nearly all computers required writing custom software, which only scientists and mathematicians tended to learn.",
      keywords: ["basic"],
      websites: [
        { title: "BASIC on Wikipedia", href: "https://en.wikipedia.org/wiki/BASIC", kind: "wikipedia" },
        { title: "BASIC on Reddit", kind: "reddit", href: "https://reddit.com/r/Basic" },
      ],
      extensions: [".bas", ".bi", ".bb", ".pb", ".fb"],
      year: 1964,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "1.0", name: "Initial Release", date: "1964-01-01" }],
      github: { name: "BASIC", langId: "28923963", color: "#ff0000", popular: false, type: "programming" },
      stackovTags: ["basic"],
    })
    .addInfluencedBy(["pl+fortran"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+imperative", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+cross", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+education", "tag+embedded", "tag+games", "tag+industrial", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
