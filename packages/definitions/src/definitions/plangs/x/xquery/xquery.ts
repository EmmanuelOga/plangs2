import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xquery", {
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML, text and with vendor-specific extensions for other data formats (JSON, binary, etc.). The language is developed by the XML Query working group of the W3C. The work is closely coordinated with the development of XSLT by the XSL Working Group; the two groups share responsibility for XPath, which is a subset of XQuery.",
      keywords: ["xquery", "xml", "query", "xpath", "xslt"],
      websites: [
        { title: "W3C XML Query Language", href: "http://www.w3.org/XML/Query/", kind: "homepage" },
        { title: "XQuery on Wikipedia", href: "https://en.wikipedia.org/wiki/XQuery", kind: "wikipedia" },
      ],
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      firstAppeared: "2007-01-01",
      images: [
        { kind: "logo", title: "XQuery Logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/XMLQuerylogo.svg", width: 512, height: 512 },
      ],
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "1.0", name: "XQuery 1.0", date: "2007-01-23" },
        { version: "3.0", name: "XQuery 3.0", date: "2014-04-08" },
        { version: "3.1", name: "XQuery 3.1", date: "2017-03-21" },
      ],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath", "pl+xslt"])
    .addParadigms(["paradigm+data-exchange", "paradigm+declarative", "paradigm+dsl", "paradigm+functional", "paradigm+modular"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+strong"]);
}
