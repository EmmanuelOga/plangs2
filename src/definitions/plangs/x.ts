import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define("pl+XAML", "XAML", {
    websites: [{ kind: "wikipedia", title: "XAML", href: "https://en.wikipedia.org/wiki/XAML" }],
    influenced: ["pl+QML"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+XOD", "XOD", {
    websites: [
      {
        kind: "wikipedia",
        title: "XOD",
        href: "https://en.wikipedia.org/wiki/XOD_(programming_language)",
      },
      { kind: "homepage", title: "xod.io", href: "http://xod.io" },
    ],
    releases: [
      { version: "unknown", date: "2016-01-01", kind: "first" },
      { version: "0.38.0", date: "2021-03-12", kind: "stable" },
    ],
    licenses: ["lic+gnu-affero-gpl"],
    paradigms: ["para+declarative", "para+dataflow", "para+functional", "para+visual"],
    platforms: ["platf+arduino", "platf+rpi"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Xojo", "Xojo", {
    websites: [
      { kind: "wikipedia", title: "Xojo", href: "https://en.wikipedia.org/wiki/Xojo" },
      { kind: "homepage", title: "xojo.com", href: "http://xojo.com" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Logomark_Xojo_Company.svg",
      },
    ],
    references: {
      stable_release: [{ href: "https://www.xojo.com/download/", title: "Xojo: Downloads" }],
    },
    releases: [{ version: "3.1", date: "2023-10-25", kind: "stable" }],
    licenses: ["lic+freemium"],
    influenced: ["pl+Visual-Basic", "pl+BASIC"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+XPath", "XPath", {
    websites: [{ kind: "wikipedia", title: "XPath", href: "https://en.wikipedia.org/wiki/XPath" }],
    influenced: ["pl+XQuery"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+XQuery", "XQuery", {
    websites: [
      { kind: "wikipedia", title: "XQuery", href: "https://en.wikipedia.org/wiki/XQuery" },
      { kind: "homepage", title: "www.w3.org/XML/Query/", href: "http://www.w3.org/XML/Query/" },
    ],
    releases: [
      { version: "unknown", date: "2007-01-01", kind: "first" },
      { version: "unknown", date: "2017-03-21", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "http://www.w3.org/TR/xquery-31/", title: "XQuery 3.1 Recommendation" },
      ],
      typing_discipline: [
        {
          href: "https://www.w3.org/TR/xquery-31/#id-static-typing-feature",
          title: "XQuery 3.1: An XML Query Language",
        },
        {
          href: "https://technet.microsoft.com/en-us/library/ms190938.aspx",
          title: "XQuery and Static Typing",
        },
      ],
    },
    extensions: [".xq", ".xql", ".xqm", ".xqy", ".xquery"],
    paradigms: ["para+declarative", "para+functional", "para+modular"],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+XPath", "pl+SQL", "pl+XSLT"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+XSB", "XSB", {
    websites: [
      { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
      { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
    ],
    releases: [{ version: "5.0", date: "2022-05-12", kind: "stable" }],
    extensions: [".P"],
    people: [
      ["person+David-S-Warren", "designer"],
      ["person+Terrance-Swift", "designer"],
      ["person+Kostis-Sagonas", "designer"],
    ],
    paradigms: ["para+logic"],
    platforms: ["platf+cross-platform"],
    influences: ["pl+Prolog"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+XSLT", "XSLT", {
    websites: [
      { kind: "wikipedia", title: "XSLT", href: "https://en.wikipedia.org/wiki/XSLT" },
      { kind: "homepage", title: "www.w3.org/TR/xslt-30/", href: "https://www.w3.org/TR/xslt-30/" },
    ],
    releases: [
      { version: "unknown", date: "1998-01-01", kind: "first" },
      { version: "3.0", date: "2017-06-08", kind: "stable" },
    ],
    extensions: [".xslt"],
    paradigms: ["para+declarative"],
    implementations: ["pl+libxslt", "pl+Saxon", "pl+Xalan"],
    influences: ["pl+DSSSL"],
    influenced: ["pl+Boomerang", "pl+XQuery"],
  });

  //-------------------------------------------------------------------------------

  lb.define("pl+Xtend", "Xtend", {
    websites: [
      { kind: "wikipedia", title: "Xtend", href: "https://en.wikipedia.org/wiki/Xtend" },
      {
        kind: "homepage",
        title: "eclipse.dev/Xtext/xtend/",
        href: "https://eclipse.dev/Xtext/xtend/",
      },
    ],
    images: [
      { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Xtend-logo-c.png" },
    ],
    releases: [
      { version: "unknown", date: "2011-01-01", kind: "first" },
      { version: "2.25.0", date: "2021-03-02", kind: "stable" },
    ],
    references: {
      stable_release: [
        { href: "https://www.eclipse.org/xtend/releasenotes.html", title: "Xtend - Release Notes" },
      ],
    },
    people: [
      ["person+Sven-Efftinge", "designer"],
      ["person+Sebastian-Zarnekow", "designer"],
    ],
    licenses: ["lic+eclipse-public"],
    paradigms: ["para+objects", "para+imperative", "para+functional"],
    typeSystems: ["tsys+static", "tsys+strong", "tsys+inferred"],
    platforms: ["platf+jvm", "platf+cross-platform"],
    influences: ["pl+Java", "pl+Scala", "pl+Groovy", "pl+Smalltalk"],
  });
}
