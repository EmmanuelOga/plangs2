import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+xquery", {
      images: [],
      name: "XQuery",
      description:
        "XQuery (XML Query) is a query and functional programming language that queries and transforms collections of structured and unstructured data, usually in the form of XML, text and with vendor-specific extensions for other data formats (JSON, binary, etc.). The language is developed by the XML Query working group of the W3C. The work is closely coordinated with the development of XSLT  by the XSL Working Group; the two groups share responsibility for XPath, which is a subset of XQuery.",
      websites: [
        { href: "http://www.w3.org/XML/Query/", title: "www.w3.org/XML/Query/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/XQuery", title: "XQuery", kind: "wikipedia" },
      ],
      extensions: [".xq", ".xql", ".xqm", ".xquery", ".xqy"],
      releases: [],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath", "pl+xslt"])
    .addParadigms(["para+declarative", "para+functional", "para+modular"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
