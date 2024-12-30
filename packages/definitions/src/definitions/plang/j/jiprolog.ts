import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jiprolog", {
      name: "JIProlog",
      description:
        "An interpreter for the Prolog language implemented in Java, providing cross-platform compatibility and integration capabilities with Java environments.",
      shortDesc: "An interpreter for the Prolog language implemented in Java.",
      created: "1999",
      extensions: [".pl", ".prolog"],
      extGithubPath: "jiprolog/jiprolog",
      extHomeURL: "http://www.jiprolog.com/",
      isTranspiler: false,
      keywords: ["java prolog", "jiprolog", "prolog interpreter"],
      links: [{ url: "https://x.com/jiprolog", title: "Twitter" }],
    })
    .relDialectOf.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relParadigms.add("para+declarative", "para+interpreted", "para+logic")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+scripting")
    .relWrittenWith.add("pl+java");
}
