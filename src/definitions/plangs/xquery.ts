import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xquery",
    "XQuery",
    {
      name: "XQuery",
      websites: [
        { kind: "wikipedia", title: "XQuery", href: "https://en.wikipedia.org/wiki/XQuery" },
        { kind: "homepage", title: "www.w3.org/XML/Query/", href: "http://www.w3.org/XML/Query/" },
      ],
      releases: [
        { version: "unknown", date: "2007-01-01", kind: "first" },
        { version: "unknown", date: "2017-03-21", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "http://www.w3.org/TR/xquery-31/", title: "XQuery 3.1 Recommendation" }],
        typing_discipline: [
          {
            href: "https://www.w3.org/TR/xquery-31/#id-static-typing-feature",
            title: "XQuery 3.1: An XML Query Language",
          },
          { href: "https://technet.microsoft.com/en-us/library/ms190938.aspx", title: "XQuery and Static Typing" },
        ],
      },
      extensions: [".xq", ".xql", ".xqm", ".xqy", ".xquery"],
    },
    {
      influences: ["pl+sql", "pl+xpath", "pl+xslt"],
      paradigms: ["para+declarative", "para+functional", "para+modular"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  /**/
}
