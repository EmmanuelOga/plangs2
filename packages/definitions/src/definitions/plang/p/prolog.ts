import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+prolog", {
      name: "Prolog",
      description:
        "Logic programming language that has its roots in artificial intelligence, automated theorem proving, and computational linguistics, influenced by first-order logic for declarative programming.",
      shortDesc:
        "Logic programming language used in AI and theorem proving, influenced by first-order logic for declarative tasks.",
      created: "1972",
      extensions: [".P", ".pl", ".pro"],
      extRedditPath: "prolog",
      extWikipediaPath: "Prolog",
      githubColor: "#74283c",
      githubLangId: "295",
      githubName: "Prolog",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["prolog"],
      languishRanking: 105,
      releases: [
        {
          version: "ISO/IEC 13211-1",
          name: "General - Edition 1",
          date: "1995-06",
        },
        {
          version: "ISO/IEC 13211-2",
          name: "Modules - Edition 1",
          date: "2000-06",
        },
      ],
      stackovTags: ["prolog"],
    })
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+low-code",
      "tag+modeling",
      "tag+proofs",
      "tag+ray-tracer",
      "tag+uml",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+untyped");
}
