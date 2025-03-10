import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+processing", {
      name: "Processing",
      description:
        "Free graphics library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.",
      shortDesc: "Language for visual and multimedia programming.",
      created: "2001",
      extensions: [".pde"],
      extGithubPath: "processing/processing",
      extHomeURL: "https://processing.org/",
      extRedditPath: "processing",
      extWikipediaPath: "Processing_(programming_language)",
      githubColor: "#0096D8",
      githubLangId: "294",
      githubName: "Processing",
      githubPopular: false,
      githubStars: 6500,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "IDE",
        "art",
        "graphics library",
        "processing",
        "programming language",
        "visual design",
      ],
      languishRanking: 166,
      releases: [
        { version: "4.3", name: "Processing 4.3", date: "2023-07-26" },
      ],
      stackovTags: ["processing"],
    })
    .relInfluencedBy.add("pl+c", "pl+java")
    .relLicenses.add("lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add(
      "para+dsl",
      "para+educational",
      "para+multi",
      "para+oop",
      "para+visual",
    )
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add(
      "tag+app",
      "tag+edu",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+ray-tracer",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+java");
}
