import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xquery", {
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML, text and with vendor-specific extensions for other data formats (JSON, binary, etc.). The language is developed by the XML Query working group of the W3C. The work is closely coordinated with the development of XSLT  by the XSL Working Group; the two groups share responsibility for XPath, which is a subset of XQuery.",
      firstAppeared: "2007-01-01",
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      websites: [
        { href: "http://www.w3.org/XML/Query/", title: "www.w3.org/XML/Query/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/XQuery", title: "XQuery", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath", "pl+xslt"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+modular"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+app", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
