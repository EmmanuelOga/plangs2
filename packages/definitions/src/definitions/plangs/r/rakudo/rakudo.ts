import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rakudo", {
      name: "Rakudo",
      description:
        "Rakudo is a Raku compiler targeting MoarVM, and the Java Virtual Machine, that implements the Raku specification. It is currently the only major Raku compiler in active development. Originally developed within the Parrot project, the Rakudo source code repository was split from the project in February 2009 for independent development.",
      keywords: ["compiler", "java virtual machine", "moarvm", "raku", "rakudo"],
      year: 2008,
      isMainstream: false,
      releases: [
        { version: "2024.10", name: "Rakudo 2024.10", date: "2024-10-24" },
        { version: "2024.08", name: "Rakudo 2024.08", date: "2024-01-01" },
      ],
      stackovTags: ["raku"],
      githubName: "Raku",
      githubLangId: "283",
      githubColor: "#0000fb",
      githubPopular: false,
      githubType: "programming",
      extensions: [".raku", ".rakudoc", ".rakumod"],
      filenames: ["Makefile"],
      extWikipediaPath: "Raku_(programming_language)",
      extRedditPath: "rakulang",
      extHomeURL: "http://rakudo.org/",
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
