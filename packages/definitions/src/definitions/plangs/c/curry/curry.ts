import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+curry", {
      name: "Curry",
      description:
        "Curry is a declarative programming language, an implementation of the functional logic programming paradigm, and based on the Haskell language. It merges elements of functional and logic programming, including constraint programming integration.",
      keywords: ["curry"],
      websites: [
        { title: "Curry Language", href: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org", kind: "homepage" },
        { title: "Curry", href: "https://en.wikipedia.org/wiki/Curry_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".curry"],
      firstAppeared: "1995-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.6.0", name: "Curry 3.6.0", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+haskell", "pl+prolog"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+constraint", "paradigm+functional", "paradigm+logic"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+x86-64"])
    .addTags(["tag+audio-dev", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
