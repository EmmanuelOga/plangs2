import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+netlogo", {
      name: "NetLogo",
      description:
        "Multi-agent programmable modeling environment, particularly suited for modeling complex systems over time. It is designed by Uri Wilensky and used extensively in educational contexts and research.",
      shortDesc: "Multi-agent environment for modeling complex systems.",
      created: "1999",
      extensions: [".nlogo", ".nlogo3d", ".nls"],
      extGithubPath: "NetLogo/NetLogo",
      extHomeURL: "https://ccl.northwestern.edu/netlogo/",
      extRedditPath: "NetLogo",
      extWikipediaPath: "NetLogo",
      githubColor: "#ff6375",
      githubLangId: "246",
      githubName: "NetLogo",
      githubPopular: false,
      githubStars: 1000,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["modeling", "multi-agent", "netlogo"],
      languishRanking: 149,
      releases: [
        { version: "6.4.0", name: "NetLogo 6.4.0", date: "2023-11-17" },
      ],
      stackovTags: ["netlogo"],
    })
    .relDialectOf.add("pl+lisp")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add(
      "para+agents",
      "para+educational",
      "para+multi",
      "para+procedural",
      "para+simulation",
    )
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add(
      "tag+edu",
      "tag+interpreters",
      "tag+modeling",
      "tag+sci",
      "tag+uml",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+java", "pl+scala");
}
