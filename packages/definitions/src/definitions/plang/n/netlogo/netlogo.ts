import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+netlogo", {
      name: "NetLogo",
      description:
        "NetLogo is a multi-agent programmable modeling environment, particularly suited for modeling complex systems over time. It is designed by Uri Wilensky and used extensively in educational contexts and research.",
      keywords: ["modeling", "multi-agent", "netlogo"],
      extensions: [".nlogo", ".nlogo3d", ".nls"],
      releases: [{ version: "6.4.0", name: "NetLogo 6.4.0", date: "2023-11-17" }],
      stackovTags: ["netlogo"],
      githubName: "NetLogo",
      languishRanking: 161,
      githubLangId: "246",
      githubColor: "#ff6375",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "NetLogo",
      extRedditPath: "NetLogo",
      extHomeURL: "https://ccl.northwestern.edu/netlogo/",
      created: "1999",
      isTranspiler: false,
      shortDesc: "NetLogo is a multi-agent environment for modeling complex systems.",
      githubStars: 1000,
      extGithubPath: "NetLogo/NetLogo",
    })
    .relDialectOf.add("pl+lisp")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+agents", "para+educational", "para+multi", "para+procedural", "para+simulation")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+edu", "tag+interpreters", "tag+modeling", "tag+sci", "tag+uml")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+java", "pl+scala");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
