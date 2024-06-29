import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+libxslt",
    "libxslt",
    {
      name: "libxslt",
      websites: [{ kind: "wikipedia", title: "libxslt", href: "https://en.wikipedia.org/wiki/Libxslt" }],
      releases: [{ version: "1.1.40", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+mit"] },
  );

  lb.define("pl+saxon-xslt", "Saxon", {
    name: "Saxon",
    websites: [{ kind: "wikipedia", title: "Saxon", href: "https://en.wikipedia.org/wiki/Saxon_XSLT" }],
  });

  lb.define("pl+xpath", "XPath", {
    name: "XPath",
    websites: [{ kind: "wikipedia", title: "XPath", href: "https://en.wikipedia.org/wiki/XPath" }],
  });

  lb.define(
    "pl+xquery",
    "XQuery",
    {
      name: "XQuery",
      websites: [{ kind: "wikipedia", title: "XQuery", href: "https://en.wikipedia.org/wiki/XQuery" }],
      releases: [{ version: "3.1", date: "2017-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+xpath", "pl+sql", "pl+xslt"],
      paradigms: ["para+dec", "para+functional", "para+modular"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  lb.define(
    "pl+xslt",
    "XSLT",
    {
      name: "XSLT",
      websites: [{ kind: "wikipedia", title: "XSLT", href: "https://en.wikipedia.org/wiki/XSLT" }],
      releases: [{ version: "3.0", date: "2017-01-01", kind: "stable" }],
      extensions: [".xslt"],
    },
    {
      implementations: ["pl+libxslt", "pl+saxon-xslt", "pl+xalan"],
      influences: ["pl+boomerang", "pl+dsssl"],
      paradigms: ["para+dec"],
    },
  );
}
