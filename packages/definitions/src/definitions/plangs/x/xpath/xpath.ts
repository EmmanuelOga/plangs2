import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xpath", {
      name: "XPath",
      description:
        "XPath (XML Path Language) is an expression language designed to support the query or transformation of XML documents. It was defined by the World Wide Web Consortium (W3C) in 1999, and can be used to compute values (e.g., strings, numbers, or Boolean values) from the content of an XML document. Support for XPath exists in applications that support XML, such as web browsers, and many programming languages.",
      firstAppeared: "1998-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/XPath", title: "XPath", kind: "wikipedia" }],
      releases: [{ version: "3.1", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+xslt"])
    .addParadigms(["paradigm+query"])
    .addTags(["tag+app"]);
}
