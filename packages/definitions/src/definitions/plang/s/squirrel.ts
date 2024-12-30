import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+squirrel", {
      name: "Squirrel",
      description:
        "High-level imperative, object-oriented programming language, designed to be a lightweight scripting language that fits in the size, memory bandwidth, and real-time requirements of applications like video games.",
      shortDesc: "Object-oriented scripting language designed for applications like video games.",
      created: "2003",
      extensions: [".nut"],
      extGithubPath: "albertodemichelis/squirrel",
      extHomeURL: "http://squirrel-lang.org/",
      extWikipediaPath: "Squirrel_(programming_language)",
      githubColor: "#800000",
      githubLangId: "355",
      githubName: "Squirrel",
      githubPopular: false,
      githubStars: 932,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["squirrel"],
      languishRanking: 221,
      releases: [{ version: "3.2", name: "Squirrel 3.2", date: "2022-02-10" }],
      stackovTags: ["squirrel"],
    })
    .relInfluencedBy.add("pl+c++", "pl+javascript", "pl+lua", "pl+python")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+app", "tag+games", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic");
}
