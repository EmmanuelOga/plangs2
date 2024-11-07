import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rakudo", {
      name: "Rakudo",
      description:
        "Rakudo is a Raku compiler targeting MoarVM, and the Java Virtual Machine, that implements the Raku specification. It is currently the only major Raku compiler in active development.",
      keywords: ["rakudo", "raku"],
      websites: [
        { title: "rakudo.org", href: "http://rakudo.org/", kind: "homepage" },
        { title: "Rakudo", href: "https://en.wikipedia.org/wiki/Rakudo", kind: "wikipedia" },
      ],
      year: 2008,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2024.08", name: "Rakudo 2024.08", date: "2024-01-01" }],
    })
    .addImplements(["pl+raku"])
    .addInfluencedBy(["pl+common-lisp", "pl+haskell", "pl+perl"])
    .addLicenses(["license+artistic"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+android", "plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
