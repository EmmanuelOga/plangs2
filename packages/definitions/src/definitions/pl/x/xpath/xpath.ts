import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xpath", {
      name: "XPath",
      description:
        "XPath (XML Path Language) is an expression language designed to support the query or transformation of XML documents. It was defined by the World Wide Web Consortium (W3C) in 1999, and can be used to compute values (e.g., strings, numbers, or Boolean values) from the content of an XML document. Support for XPath exists in applications that support XML, such as web browsers, and many programming languages.",
      keywords: ["xpath"],
      releases: [
        { version: "1.0", name: "XPath 1.0", date: "1999-11-16" },
        { version: "2.0", name: "XPath 2.0", date: "2007-01-23" },
        { version: "3.0", name: "XPath 3.0", date: "2014-04-08" },
        { version: "3.1", name: "XPath 3.1", date: "2017-03-21" },
      ],
      extWikipediaPath: "XPath",
      created: "1998",
    })
    .relInfluencedBy.add(["pl+xslt"])
    .relParadigms.add(["paradigm+query"])
    .relPlatforms.add(["plat+cross"])
    .relTags.add(["tag+automation", "tag+dataflow", "tag+workflow"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
