import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+erlog", {
      name: "erlog",
      description: "An interpreter for Prolog written entirely in Erlang, leveraging Erlang's features for concurrency and fault tolerance.",
      shortDesc: "A Prolog interpreter implemented in Erlang.",
      created: "2008-08",
      extensions: [".erl"],
      extGithubPath: "rvirding/erlog",
      githubStars: 372,
      isTranspiler: false,
      keywords: ["erlang", "interpreter", "prolog"],
    })
    .relImplements.add("pl+prolog")
    .relInfluencedBy.add("pl+erlang")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+concurrent", "para+logic")
    .relPlatforms.add("plat+beam")
    .relTags.add("tag+interpreters")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+erlang");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
