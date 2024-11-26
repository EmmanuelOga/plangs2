import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+xquery", {
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML, text and with vendor-specific extensions for other data formats like JSON. The language is developed by the XML Query working group of the W3C. The work is closely coordinated with the development of XSLT by the XSL Working Group; the two groups share responsibility for XPath, which is a subset of XQuery.",
      keywords: ["functional", "query", "xml", "xpath", "xquery", "xslt"],
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      releases: [
        { version: "1.0", name: "XQuery 1.0", date: "2007-01-23" },
        { version: "3.0", name: "XQuery 3.0", date: "2014-04-08" },
        { version: "3.1", name: "XQuery 3.1", date: "2017-03-21" },
      ],
      stackovTags: ["xquery"],
      githubName: "XQuery",
      languishRanking: 200,
      githubLangId: "402",
      githubColor: "#5232e7",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "XQuery",
      extRedditPath: "xquery",
      extHomeURL: "http://www.w3.org/XML/Query/",
      created: "2007",
    })
    .relInfluencedBy.add(["pl+sql", "pl+xpath", "pl+xslt"])
    .relParadigm.add(["para+data-exchange", "para+declarative", "para+dsl", "para+functional", "para+modular", "para+query"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+viz"])
    .relTsys.add(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
