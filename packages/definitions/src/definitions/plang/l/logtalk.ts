import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+logtalk", {
      name: "Logtalk",
      description:
        "Object-oriented logic programming language that facilitates code reuse by extending Prolog, enabling encapsulated logic programs with a distinct separation of interface and implementation.",
      shortDesc: "Object-oriented logic programming language extending Prolog.",
      created: "1998",
      extensions: [".lgt"],
      extGithubPath: "LogtalkDotOrg/logtalk3",
      extHomeURL: "https://logtalk.org/",
      extWikipediaPath: "Logtalk",
      githubColor: "#295b9a",
      githubLangId: "210",
      githubName: "Logtalk",
      githubPopular: false,
      githubStars: 425,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["logic programming", "logtalk", "prolog"],
      languishRanking: 310,
      releases: [
        { version: "3.85.0", name: "", date: "2024-11-12" },
        { version: "3.66.0", name: "", date: "2023-05-30" },
      ],
      stackovTags: ["logtalk"],
    })
    .relCompilesTo.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+apache", "lic+artistic")
    .relParadigms.add("para+logic", "para+oop", "para+prototype")
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+analysis",
      "tag+compiler",
      "tag+framework",
      "tag+interpreters",
      "tag+viz",
    );
}
