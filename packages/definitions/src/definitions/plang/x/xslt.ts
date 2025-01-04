import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xslt", {
      name: "XSLT",
      description:
        "Extensible Stylesheet Language Transformations is a declarative, data transformation language used for transforming XML documents into other XML documents or different output formats, such as HTML or plain text.",
      shortDesc: "Declarative language for transforming XML documents.",
      created: "1998",
      extensions: [".xslt"],
      extHomeURL: "https://www.w3.org/TR/xslt-30/",
      extRedditPath: "xslt",
      extWikipediaPath: "XSLT",
      githubColor: "#EB8CEB",
      githubLangId: "404",
      githubName: "XSLT",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["xslt"],
      languishRanking: 74,
      releases: [
        { version: "1.0", name: "XSLT 1.0", date: "1999-11-16" },
        { version: "2.0", name: "XSLT 2.0", date: "2007-01-23" },
        { version: "3.0", name: "XSLT 3.0", date: "2017-06-08" },
      ],
      stackovTags: ["xslt"],
    })
    .relInfluencedBy.add("pl+boomerang")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+untyped");
}
