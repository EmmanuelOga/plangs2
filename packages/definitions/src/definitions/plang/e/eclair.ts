import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+eclair", {
      name: "Eclair",
      description:
        "A logic programming language designed for specifying complex rules over large datasets efficiently, particularly used in the development of compilers and analyzing data dependencies.",
      shortDesc:
        "A logic programming language for specifying complex rules over large datasets efficiently.",
      created: "2021-06",
      extGithubPath: "luc-tielen/eclair-lang",
      extHomeURL: "https://eclair-lang.org",
      isTranspiler: false,
      keywords: ["data analysis", "dependency analysis", "logic programming"],
    })
    .relInfluencedBy.add("pl+souffle")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+haskell");
}
