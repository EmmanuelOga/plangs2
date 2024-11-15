import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xquery", {
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML, text and with vendor-specific extensions for other data formats like JSON. The language is developed by the XML Query working group of the W3C. The work is closely coordinated with the development of XSLT by the XSL Working Group; the two groups share responsibility for XPath, which is a subset of XQuery.",
      keywords: ["functional", "query", "xml", "xpath", "xquery", "xslt"],
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      year: 2007,
      isMainstream: true,
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
    })
    .addInfluencedBy(["pl+sql", "pl+xpath", "pl+xslt"])
    .addParadigms(["paradigm+data-exchange", "paradigm+declarative", "paradigm+dsl", "paradigm+functional", "paradigm+modular", "paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}