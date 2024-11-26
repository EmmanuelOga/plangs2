import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+whiley", {
      name: "Whiley",
      description:
        'Whiley is an experimental programming language that combines features from the functional and imperative paradigms, and supports formal specification through function preconditions, postconditions and loop invariants. The language uses flow-sensitive typing also known as "flow typing."',
      keywords: ["whiley"],
      extensions: [".whiley"],
      releases: [{ version: "0.6.1", name: "", date: "2022-06-27" }],
      githubName: "Whiley",
      githubLangId: "888779559",
      githubColor: "#d5c397",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Whiley_(programming_language)",
      extHomeURL: "http://whiley.org/",
      created: "2010",
    })
    .relInfluence.add(["pl+c", "pl+python", "pl+rust"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+functional", "para+imperative"])
    .relPlatform.add(["plat+cross", "plat+java"])
    .relTag.add(["tag+compiler", "tag+interpreters", "tag+sci"])
    .relTypeSystem.add(["tsys+flow", "tsys+safe", "tsys+strong", "tsys+structural"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
