import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xquery", {
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language designed to query and transform XML data, developed by the W3C XML Query working group. It shares its foundation with XSLT, and makes extensive use of XPath.",
      keywords: ["functional", "query", "w3c", "xml", "xpath", "xquery"],
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      releases: [{ version: "3.1", name: "XQuery 3.1", date: "2017-03-21" }],
      stackovTags: ["xquery"],
      githubName: "XQuery",
      languishRanking: 200,
      githubLangId: "402",
      githubColor: "#5232e7",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "XQuery",
      extRedditPath: "xquery",
      created: "1998",
      isTranspiler: false,
      shortDesc: "XQuery is a W3C language for querying and transforming XML data using XPath.",
    })
    .relInfluencedBy.add("pl+sql", "pl+xpath", "pl+xslt")
    .relParadigms.add("para+data-exchange", "para+declarative", "para+dsl", "para+functional", "para+modular", "para+query")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+app", "tag+dataq", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+viz")
    .relTypeSystems.add("tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
