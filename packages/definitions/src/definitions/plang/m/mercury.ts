import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mercury", {
      name: "Mercury",
      description:
        "Derived from Prolog, it provides a clean and efficient logic programming with support for functional programming features and powerful static analysis tools.",
      shortDesc: "A logic-based programming language with functional features.",
      created: "1995",
      extensions: [".m"],
      extGithubPath: "Mercury-Language/mercury",
      extHomeURL: "https://mercurylang.org/",
      isTranspiler: false,
      keywords: ["declarative", "functional", "logic", "static"],
      languishRanking: 332,
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+haskell", "pl+prolog")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+declarative",
      "para+functional",
      "para+general-purpose",
      "para+logic",
    )
    .relPlatforms.add("plat+bsd", "plat+linux", "plat+windows")
    .relTypeSystems.add("tsys+algebraic", "tsys+static", "tsys+strong");
}
