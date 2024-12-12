import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rakudo", {
      name: "Rakudo",
      description:
        "Rakudo is a compiler for the Raku programming language, targeting MoarVM and JVM, and aligning with the Raku specification as its standard bearer.",
      keywords: ["compiler", "jvm", "moarvm", "raku", "rakudo"],
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
      extWikipediaPath: "Raku_(programming_language)",
      extRedditPath: "rakulang",
      extHomeURL: "https://rakudo.org/",
      created: "2008",
      isTranspiler: true,
      shortDesc: "Rakudo is the main compiler for the Raku language, targeting MoarVM and JVM.",
      githubStars: 1700,
      extGithubPath: "rakudo/rakudo",
      ghRepoCreated: "2009-02-15",
    })
    .relImplements.add("pl+raku")
    .relInfluencedBy.add("pl+common-lisp", "pl+haskell", "pl+perl")
    .relLicenses.add("lic+apache", "lic+artistic")
    .relParadigms.add("para+declarative", "para+functional", "para+imperative", "para+multi", "para+procedural")
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
