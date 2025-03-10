import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+rebol", {
      name: "Rebol",
      description:
        "Cross-platform data exchange language and a multi-paradigm dynamic programming language designed for network communications and distributed computing. It introduced the concept of dialects, which are small, optimized domain-specific languages for code and data. Rebol emphasizes simplicity and readability, featuring numerous data types for expressing information in a concise format.",
      shortDesc:
        "Cross-platform multi-paradigm language known for its dialects and simplicity.",
      created: "1997",
      extensions: [".r", ".reb"],
      extGithubPath: "rebol/rebol",
      extHomeURL: "https://www.rebol.com",
      extRedditPath: "rebol",
      extWikipediaPath: "Rebol",
      githubColor: "#358a5b",
      githubLangId: "319",
      githubName: "Rebol",
      githubPopular: false,
      githubStars: 868,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["rebol"],
      releases: [
        { version: "2.7.8", name: "Stable release", date: "2011-01-01" },
        { version: "2.101.0", name: "Preview release", date: "2012-12-01" },
      ],
      stackovTags: ["rebol"],
    })
    .relInfluencedBy.add("pl+forth", "pl+lisp", "pl+self")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+data-exchange",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+language-oriented",
      "para+prototype",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+3dg",
      "tag+app",
      "tag+audio-dev",
      "tag+dbms",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+video",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");
}
