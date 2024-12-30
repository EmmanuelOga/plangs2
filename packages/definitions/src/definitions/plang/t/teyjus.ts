import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+teyjus", {
      name: "Teyjus",
      description: "An implementation of Lambda Prolog focused on supporting higher-order and logic programming features.",
      shortDesc: "Implementation of Lambda Prolog for higher-order logic programming.",
      created: "2002",
      extensions: [".lp"],
      extGithubPath: "",
      extHomeURL: "https://teyjus.cs.umn.edu/",
      isTranspiler: false,
      keywords: ["higher-order", "lambda-prolog", "logic-programming"],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relParadigms.add("para+functional", "para+logic");
}
