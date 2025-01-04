import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shen", {
      name: "Shen",
      description:
        "High-level, multi-paradigm language that combines elements of Lisp-like functional programming with pattern-matching and logic programming, targeted primarily for functional programming and symbolic computation.",
      shortDesc:
        "Multi-paradigm language blending functional and logic programming for symbolic computation.",
      created: "2011",
      extensions: [".shen"],
      extGithubPath: "Shen-Language/shen-sources",
      extHomeURL: "https://shenlanguage.org",
      extRedditPath: "Qi_Shen|shenlanguage",
      extWikipediaPath: "Shen_(programming_language)",
      githubColor: "#120F14",
      githubLangId: "348",
      githubName: "Shen",
      githubPopular: false,
      githubStars: 360,
      githubType: "programming",
      isTranspiler: true,
      keywords: [
        "functional",
        "lambda",
        "pattern-matching",
        "shen",
        "symbolic",
      ],
      releases: [{ version: "22.2", name: "Shen 22.2", date: "2023-08-01" }],
      stackovTags: ["shen"],
    })
    .relInfluencedBy.add("pl+prolog", "pl+scheme")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+functional",
      "para+logic",
      "para+multi",
      "para+pattern-matching",
      "para+symbolic",
    )
    .relPlatforms.add(
      "plat+apple",
      "plat+cross",
      "plat+java",
      "plat+linux",
      "plat+web",
      "plat+windows",
    )
    .relTags.add(
      "tag+automation",
      "tag+cas",
      "tag+compiler",
      "tag+interpreters",
      "tag+scripting",
    )
    .relTypeSystems.add(
      "tsys+manifest",
      "tsys+polymorphic",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+common-lisp", "pl+scheme");
}
