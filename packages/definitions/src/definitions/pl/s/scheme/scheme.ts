import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scheme", {
      name: "Scheme",
      description:
        "Scheme is a classical dialect of the Lisp family of programming languages. It emphasizes functional programming, domain-specific languages, and flexibility in adapting to other programming styles. Scheme is known for its clean design and minimalist approach, making it one of the longest-surviving and extensively studied dynamic languages. Scheme was created at MIT CSAIL by Guy L. Steele and Gerald Jay Sussman in the 1970s, and its development was documented in the Lambda Papers. It notably introduced lexical scoping, required tail-call optimization, and supported first-class continuations, influencing many subsequent languages including Common Lisp.",
      keywords: ["scheme"],
      extensions: [".scm", ".ss"],
      stackovTags: ["scheme"],
      githubName: "Scheme",
      languishRanking: 115,
      githubLangId: "343",
      githubColor: "#1e4aec",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Scheme_(programming_language)",
      extRedditPath: "scheme",
      extHomeURL: "https://www.scheme.org/",
      created: "1975",
    })
    .relDialectOf.add(["pl+lisp"])
    .relInfluence.add(["pl+lisp"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+functional", "para+imperative", "para+metaprogramming", "para+multi"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+compiler", "tag+interpreters", "tag+scripting", "tag+testing"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
