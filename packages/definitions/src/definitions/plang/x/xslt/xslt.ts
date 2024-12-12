import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xslt", {
      name: "XSLT",
      description:
        "XSLT (Extensible Stylesheet Language Transformations) is a declarative, data transformation language used for transforming XML documents into other XML documents or different output formats, such as HTML or plain text.",
      keywords: ["xslt"],
      extensions: [".xslt"],
      releases: [
        { version: "1.0", name: "XSLT 1.0", date: "1999-11-16" },
        { version: "2.0", name: "XSLT 2.0", date: "2007-01-23" },
        { version: "3.0", name: "XSLT 3.0", date: "2017-06-08" },
      ],
      stackovTags: ["xslt"],
      githubName: "XSLT",
      languishRanking: 74,
      githubLangId: "404",
      githubColor: "#EB8CEB",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "XSLT",
      extRedditPath: "xslt",
      extHomeURL: "https://www.w3.org/TR/xslt-30/",
      created: "1998",
      isTranspiler: false,
      shortDesc: "XSLT is a declarative language for transforming XML documents.",
    })
    .relInfluencedBy.add("pl+boomerang")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+analysis", "tag+app", "tag+dbms", "tag+editor", "tag+framework", "tag+industrial", "tag+viz")
    .relTypeSystems.add("tsys+untyped");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
