import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+trealla", {
      name: "Trealla Prolog",
      description: "A compact, efficient Prolog interpreter implemented in C, known for its ability to handle concurrent threads and coroutines.",
      shortDesc: "An efficient Prolog interpreter with concurrent capabilities.",
      created: "2020",
      extensions: [".pl"],
      extGithubPath: "trealla-prolog/trealla",
      isTranspiler: false,
      keywords: ["concurrency", "coroutines", "interpreter", "logic-programming", "prolog"],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+gprolog", "pl+swi-prolog", "pl+tau")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+concurrent", "para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+untyped")
    .relWrittenWith.add("pl+c");
}
