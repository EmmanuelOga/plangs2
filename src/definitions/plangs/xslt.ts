import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+xslt",
    "XSLT",
    {
      name: "XSLT",
      websites: [
        { kind: "wikipedia", title: "XSLT", href: "https://en.wikipedia.org/wiki/XSLT" },
        { kind: "homepage", title: "www.w3.org/TR/xslt-30/", href: "https://www.w3.org/TR/xslt-30/" },
      ],
      releases: [
        { version: "unknown", date: "1998-01-01", kind: "first" },
        { version: "3.0", date: "2017-06-08", kind: "stable" },
      ],
      extensions: [".xslt"],
    },
    {
      implementations: ["pl+libxslt", "pl+saxon-xslt", "pl+xalan"],
      influenced: ["pl+boomerang", "pl+xquery"],
      influences: ["pl+dsssl"],
      paradigms: ["para+dec"],
    },
  );

  /**/
}
