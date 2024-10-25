import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scopes", {
      name: "Scopes",
      description:
        "Scopes is an extensible programming language that focuses on providing a powerful macro system and supports multiple stages of evaluation, enabling complex metaprogramming tasks with ease.",
      keywords: ["scopes", "metaprogramming", "extensible", "macro system"],
      websites: [{ title: "Scopes", href: "https://hg.sr.ht/~duangle/scopes", kind: "homepage" }],
      extensions: [".scopes"],
      year: 2015,
      releases: [{ version: "0.1", name: "Initial release", date: "2015-01-01" }],
    })
    .addParadigms(["paradigm+extensible", "paradigm+macro", "paradigm+metaprogramming"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);
}
