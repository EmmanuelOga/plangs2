import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+xslt", {
      images: [],
      name: "XSLT",
      description:
        "XSLT (Extensible Stylesheet Language Transformations) is a language originally designed for transforming XML documents into other XML documents, or other formats such as HTML for web pages, plain text or XSL Formatting Objects, which may subsequently be converted to other formats, such as PDF, PostScript and PNG. Support for JSON and plain-text transformation was added in later updates to the XSLT 1.0 specification.",
      websites: [
        { href: "https://www.w3.org/TR/xslt-30/", title: "www.w3.org/TR/xslt-30/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/XSLT", title: "XSLT", kind: "wikipedia" },
      ],
      extensions: [".xslt"],
      releases: [{ version: "3.0", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+boomerang"])
    .addParadigms(["para+declarative"]);
}
