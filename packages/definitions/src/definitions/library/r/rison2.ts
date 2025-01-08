import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.library
    .set("lib+rison2", {
      name: "rison2",
      description:
        "Rison2 is a library for RISON, a slight variation of JSON that looks vastly superior after URI encoding. Rison still expresses exactly the same set of data structures as JSON, so data can be translated back and forth without loss or guesswork.",
      shortDesc:
        "Parser for RISON serialization format. RISON looks good in URL parameters and fragments.",
      extGithubPath: "kou64yama/rison2",
      extHomeURL: "https://www.npmjs.com/package/rison2",
      githubStars: 5,
    })
    .relPlangs.add("pl+javascript", "pl+javascriptcore", "pl+typescript");
}
