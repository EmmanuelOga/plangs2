import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+libxslt")
    .merge({
      name: "libxslt",
      websites: [{ kind: "wikipedia", title: "libxslt", href: "https://en.wikipedia.org/wiki/Libxslt" }],
      releases: [{ version: "1.1.40", date: "2024-01-01", kind: "stable" }],
    })
    .addLicenses(["lic+mit"]);

  /**/
  g.buildPlang("pl+saxon-xslt").merge({
    name: "Saxon",
    websites: [{ kind: "wikipedia", title: "Saxon", href: "https://en.wikipedia.org/wiki/Saxon_XSLT" }],
  });

  /**/
  g.buildPlang("pl+xpath").merge({
    name: "XPath",
    websites: [{ kind: "wikipedia", title: "XPath", href: "https://en.wikipedia.org/wiki/XPath" }],
  });

  /**/
  g.buildPlang("pl+xquery")
    .merge({
      name: "XQuery",
      websites: [{ kind: "wikipedia", title: "XQuery", href: "https://en.wikipedia.org/wiki/XQuery" }],
      releases: [{ version: "3.1", date: "2017-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+xpath", "pl+sql", "pl+xslt"])
    .addParadigms(["para+dec", "para+functional", "para+modular"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+strong"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://www.w3.org/TR/xquery-31/#id-static-typing-feature",
          title: "XQuery 3.1: An XML Query Language",
        },
      ],
    });

  /**/
  g.buildPlang("pl+xslt")
    .merge({
      name: "XSLT",
      websites: [{ kind: "wikipedia", title: "XSLT", href: "https://en.wikipedia.org/wiki/XSLT" }],
      releases: [{ version: "3.0", date: "2017-01-01", kind: "stable" }],
      extensions: [".xslt"],
    })
    .addImplementations(["pl+libxslt", "pl+saxon-xslt", "pl+xalan"])
    .addInfluences(["pl+boomerang", "pl+dsssl"])
    .addParadigms(["para+dec"]);

  /**/
}
