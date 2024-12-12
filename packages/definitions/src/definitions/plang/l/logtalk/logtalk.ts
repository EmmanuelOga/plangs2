import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+logtalk", {
      name: "Logtalk",
      description:
        "Logtalk is an open-source object-oriented logic programming language that facilitates code reuse by extending Prolog, enabling encapsulated logic programs with a distinct separation of interface and implementation.",
      keywords: ["logic programming", "logtalk", "prolog"],
      isTranspiler: true,
      releases: [
        { version: "3.85.0", name: "", date: "2024-11-12" },
        { version: "3.66.0", name: "", date: "2023-05-30" },
      ],
      stackovTags: ["logtalk"],
      githubName: "Logtalk",
      githubLangId: "210",
      githubColor: "#295b9a",
      githubPopular: false,
      githubType: "programming",
      extensions: [".lgt"],
      extWikipediaPath: "Logtalk",
      extHomeURL: "https://logtalk.org/",
      created: "1998",
      shortDesc: "Logtalk is an object-oriented logic programming language extending Prolog.",
      extGithubPath: "LogtalkDotOrg/logtalk3",
      githubStars: 425,
    })
    .relCompilesTo.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+apache", "lic+artistic")
    .relParadigms.add("para+logic", "para+oop", "para+prototype")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler", "tag+framework", "tag+interpreters", "tag+viz");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
